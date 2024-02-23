/**
 * Encuentra la primera consonante interna en el string dado.
 * @param {*} str El string en el que se buscará la consonante interna.
 * @param {*} number El número de la consonante interna que se desea encontrar.
 * @returns La consonante interna encontrada o null si no se encuentra.
 */
const internalConsonant = (str, number) => {
  const consonantRegex = /[bcdfghjklmnñpqrstvwxyz]/i;
  return findInternalChar(str, number, consonantRegex);
};

/**
 * Encuentra la primera vocal interna en el string dado.
 * @param {*} str El string en el que se buscará la vocal interna.
 * @param {*} number El número de la vocal interna que se desea encontrar.
 * @returns La vocal interna encontrada o null si no se encuentra.
 */
const internalVowel = (str, number) => {
  const vowelRegex = /[aeiou]/i;
  return findInternalChar(str, number, vowelRegex);
};

/**
 * 
 * @param {*} str 
 * @returns 
 */
const isCURP = (str) => {
  const curpRegex = /^[A-Z][AEIOUX][A-Z]{2}(\d{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])(H|M)(?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d]\d$/;
  return curpRegex.test(str);
};

/**
 * 
 * @param {*} str 
 * @returns 
 */
const removeAccentMarks = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

/**
 * 
 * @param {*} str 
 * @returns 
 */
const removeVowelDieresis = (str) => {
  return str.replace(/[ÄËÏÖÜ]/g, (match) => {
    switch (match) {
      case "Ä":
        return "A";
      case "Ë":
        return "E";
      case "Ï":
        return "I";
      case "Ö":
        return "O";
      case "Ü":
        return "U";
      default:
        return match;
    }
  });
};

/**
 * 
 * @param {*} str 
 * @param {*} number 
 * @param {*} regex 
 * @returns 
 */
const findInternalChar = (str, number, regex) => {
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (regex.test(str[i])) {
      count++;
      if (count === number) {
        return str[i];
      }
    }
  }
  return null;
};

module.exports = {
  internalConsonant,
  internalVowel,
  isCURP,
  removeAccentMarks,
  removeVowelDieresis
};
