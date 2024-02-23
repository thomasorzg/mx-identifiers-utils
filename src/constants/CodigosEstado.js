const Estado = require('../enums/estado');

/**
 * Códigos de estado de la república mexicana con su respectivo código de dos letras
 */
const CodigosEstado = {
    [Estado.Aguascalientes]: 'AS',
    [Estado.Baja_California]: 'BC',
    [Estado.Baja_California_Sur]: 'BS',
    [Estado.Campeche]: 'CC',
    [Estado.Coahuila]: 'CL',
    [Estado.Colima]: 'CM',
    [Estado.Chiapas]: 'CS',
    [Estado.Chihuahua]: 'CH',
    [Estado.Distrito_Federal]: 'DF',
    [Estado.Durango]: 'DG',
    [Estado.Guanajuato]: 'GT',
    [Estado.Guerrero]: 'GR',
    [Estado.Hidalgo]: 'HG',
    [Estado.Jalisco]: 'JC',
    [Estado.Mexico]: 'MC',
    [Estado.Michoacan]: 'MN',
    [Estado.Morelos]: 'MS',
    [Estado.Nayarit]: 'NT',
    [Estado.Nuevo_Leon]: 'NL',
    [Estado.Oaxaca]: 'OC',
    [Estado.Puebla]: 'PL',
    [Estado.Queretaro]: 'QT',
    [Estado.Quintana_Roo]: 'QR',
    [Estado.San_Luis_Potosi]: 'SP',
    [Estado.Sinaloa]: 'SL',
    [Estado.Sonora]: 'SR',
    [Estado.Tabasco]: 'TC',
    [Estado.Tamaulipas]: 'TS',
    [Estado.Tlaxcala]: 'TL',
    [Estado.Veracruz]: 'VZ',
    [Estado.Yucatan]: 'YN',
    [Estado.Zacatecas]: 'ZS',
    [Estado.Extranjero]: 'NE'
};

module.exports = CodigosEstado;