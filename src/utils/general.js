const crypto = require('crypto');

const generarId = (size = 8) => {
  return crypto.randomBytes(size).toString('hex');
};

const arrayToText = (arr) => JSON.stringify(arr);
const textToArray = (text) => JSON.parse(text);
const compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);

module.exports = {
  generarId,
  arrayToText,
  textToArray,
  compareArrays,
};