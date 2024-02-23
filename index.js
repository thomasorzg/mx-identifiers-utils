const { generarCURP } = require('./src/index');
const { Estado } = require('./src/enums/estado');
const { Sexo } = require('./src/enums/sexo');
const { isCURP } = require('./src/extensions/stringExtensions');
const moment = require('moment');

// Datos para generar una CURP
const nombres = "Thomas Francisco";
const paterno = "Orozco";
const materno = "Galindo";
const sexo = "Hombre";
const fechaNacimiento = moment("2002-05-15");
const estado = "Sonora";

// Generar la CURP
const curpGenerada = generarCURP(nombres, paterno, materno, sexo, fechaNacimiento, estado);

console.log(`CURP Generada: ${curpGenerada}`);
console.log("Válida: ", isCURP(curpGenerada));