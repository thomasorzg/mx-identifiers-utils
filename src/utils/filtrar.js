const { removeAccentMarks, removeVowelDieresis } = require('../extensions/stringExtensions');

/**
 * 
 * @param {*} str 
 * @returns 
 */
const filtrar = (str) => {
  if (!str) return "";

  // Convierte a mayúsculas y eliminar acentos y diéresis
  str = str.toUpperCase();
  str = removeAccentMarks(str);
  str = removeVowelDieresis(str);

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
  let palabrasFiltradas = palabras.filter(
    (palabra) => !excepciones.includes(palabra)
  );
  if (
    palabrasFiltradas.length > 1 &&
    compuestos.includes(palabrasFiltradas[0])
  ) {
    palabrasFiltradas = palabrasFiltradas.slice(1);
  }

  // Reemplazar caracteres especiales
  return palabrasFiltradas.join(" ").replace(/[\/\-\.]/g, "X");
};

module.exports = filtrar;
