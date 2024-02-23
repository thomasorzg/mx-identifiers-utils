const { removeAccentMarks, removeVowelDieresis } = require("../extensions/stringExtensions");

/**
 * Filtra y procesa un string para generar un texto adecuado para la CURP.
 * @param {string} str El string a filtrar.
 * @returns {string} El string filtrado y procesado.
 */
const filtrar = (str) => {
  if (!str) return "";

  // Convierte el texto a mayúsculas
  str = str.toUpperCase();

  // Separa el texto en palabras y aplicar filtros
  const palabras = str.split(" ").filter((palabra) => palabra);
  const excepciones = [
    "DA",
    "DAS",
    "DE",
    "DEL",
    "DER",
    "DI",
    "DIE",
    "DD",
    "EL",
    "LA",
    "LOS",
    "LAS",
    "LE",
    "LES",
    "MAC",
    "MC",
    "VAN",
    "VON",
    "Y",
    "J",
    "MA",
  ];
  const compuestos = ["MARIA", "MA.", "MA", "JOSE", "J", "J."];

  // Filtra las preposiciones, conjunciones, etc., y nombres compuestos
  let palabrasFiltradas = palabras.filter((palabra) => !excepciones.includes(palabra));
  
  if (palabrasFiltradas.length > 1 && compuestos.includes(palabrasFiltradas[0])) {
    palabrasFiltradas = palabrasFiltradas.slice(1);
  }

  str = removeAccentMarks(str); // Remueve acentos
  str = removeVowelDieresis(str); // Remueve diéresis

  return palabrasFiltradas.join(" ").replace(/[\/\-\.]/g, "X");
};

module.exports = filtrar;
