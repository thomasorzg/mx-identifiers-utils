const moment = require('moment');
const Estado = require('./enums/estado');
const CodigosEstado = require('./constants/CodigosEstado');
const PalabrasInconvenientes = require('./constants/palabrasInconvenientes');
const { internalConsonant, internalVowel } = require('./extensions/stringExtensions');
const filtrar = require('./utils/filtrar');

/**
 * Genera una CURP basada en los datos proporcionados.
 * @param {string} nombres Los nombres de la persona.
 * @param {string} paterno El apellido paterno de la persona.
 * @param {string} materno El apellido materno de la persona.
 * @param {string} sexo El sexo de la persona ('H' para hombre, 'M' para mujer).
 * @param {moment.Moment} fechaNacimiento La fecha de nacimiento de la persona (objeto Moment).
 * @param {string} estadoEnumValue El estado de nacimiento de la persona (valor del enum Estado).
 * @returns {string} La CURP generada.
 */
const generarCURP = (nombres, paterno, materno, sexo, fechaNacimiento, estadoEnumValue) => {
    // Aplicar filtros
    let nombreTemp = filtrar(nombres);
    let paternoTemp = filtrar(paterno);
    let maternoTemp = filtrar(materno);
    
    // Posiciones 1-4
    let uno = paternoTemp[0] === 'Ñ' ? 'X' : paternoTemp[0];
    let dos = internalVowel(paternoTemp, 1) ?? 'X';
    let tres = (maternoTemp && maternoTemp[0] === 'Ñ') ? 'X' : (maternoTemp ? maternoTemp[0] : 'X'); // Manejo de materno vacío
    let cuatro = nombreTemp[0] === 'Ñ' ? 'X' : nombreTemp[0];

    // Fecha de nacimiento
    let fechaNacFormat = moment(fechaNacimiento);
    let fecha = fechaNacFormat.format('YYMMDD');

    // Código del estado
    let estadoCodigo = CodigosEstado[Estado[estadoEnumValue]];

    // Posiciones 14-16
    let x = internalConsonant(paternoTemp, 1);
    let y = internalConsonant(maternoTemp, 1);
    let z = internalConsonant(nombreTemp, 1);

    let catorce = x == null ? 'X' : x == 'Ñ' ? 'X' : x;
    let quince = y == null ? 'X' : y == 'Ñ' ? 'X' : y;
    let dieciseis = z == null ? 'X' : z == 'Ñ' ? 'X' : z;

    // Pre-CURP
    let preCURP = `${uno}${dos}${tres}${cuatro}${fecha}${sexo}${estadoCodigo}${catorce}${quince}${dieciseis}`;

    // Reemplazar el 2do caracter por una 'X' en caso de palabra inconveniente
    if (PalabrasInconvenientes.has(preCURP.substring(0, 4))) {
        preCURP = `${preCURP[0]}X${preCURP.substring(2)}`;
    }

    // Dígito diferenciador de homonimia y siglo (pendiente de implementar correctamente)
    let diferenciador = fechaNacFormat.year() < 2000 ? "0" : "A";

    let codigoVerificador = calcularCodigoVerificador(preCURP);

    return `${preCURP}${diferenciador}${codigoVerificador}`;
};

/**
 * Calcula el dígito verificador de la CURP.
 * @param {string} preCURP La parte inicial de la CURP.
 * @returns {string} El dígito verificador calculado.
 */
const calcularCodigoVerificador = (preCURP) => {
    const caracteres = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let sumatoria = 0;
    let contador = 18;

    for (let i = 0; i < preCURP.length; i++) {
        let index = caracteres.indexOf(preCURP[i]);
        if (index === -1) {
            throw new Error(`Carácter inválido en la composición de la pre-CURP: ${preCURP[i]}`);
        }
        let valor = index * contador;
        contador--;
        sumatoria += valor;
    }

    let numVer = sumatoria % 10;
    numVer = (10 - numVer) % 10;

    return numVer;
};

module.exports = {
    generarCURP
};
