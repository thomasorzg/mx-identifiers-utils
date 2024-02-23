const { generarCURP } = require('../../src/index');
const { isCURP } = require('../../src/extensions/stringExtensions');
const moment = require('moment');

describe('CURP', () => {
    test('Letra inicial Ñ', () => {
        const curp = generarCURP("Alberto", "Ñando", "Rodriguez", "H", moment("2000-01-01"), "Aguascalientes");
        expect(curp.substring(0, 4)).toBe("XARA");
    });

    test('Nombre compuesto', () => {
        const curp = generarCURP("Ma. de los angeles", "Moreno", "Sanchez", "M", moment("1998-01-01"), "San_Luis_Potosi");
        expect(curp.substring(13, 16)).toBe("RNN");
    });

    test('Apellido compuesto', () => {
        const curp = generarCURP("Carlos", "Mc Gregor", "Lopez", "H", moment("1963-01-01"), "Sonora");
        expect(curp.substring(0, 4)).toBe("GELC");
    });

    test('Un apellido', () => {
        const curp = generarCURP("Luis", "Perez", null, "H", moment("1979-01-01"), "Zacatecas");
        expect(curp.substring(0, 4)).toBe("PEXL");
    });

    test('Palabra altisonante', () => {
        const curp = generarCURP("Ofelia", "Pedrero", "Dominguez", "M", moment("1995-03-12"), "Campeche");
        expect(curp.substring(0, 4)).toBe("PXDO");
    });

    test('Sin vocal interna', () => {
        const curp = generarCURP("Andres", "Ich", "Rodriguez", "H", moment("1984-12-06"), "Campeche");
        expect(curp.substring(0, 4)).toBe("IXRA");
    });

    test('Normal', () => {
        const curp = generarCURP("Thomas Francisco", "Orozco", "Galindo", "H", moment("2002-05-15"), "Sonora");
        expect(curp).toBe("OOGT020515HSRRLHA1");
    });

    test('isCURP', () => {
        const curp = generarCURP("Thomas Francisco", "Orozco", "Galindo", "H", moment("2002-05-15"), "Sonora");
        expect(isCURP(curp)).toBe(true);
    });
});
