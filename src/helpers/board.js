const { boardStatus } = require('../../database');
const { textToArray } = require('../utils/general');

const boardPosiciones = async (partida) => {
  try {
    const board = await boardStatus(partida);
    let posiciones = [];
    board.map(p => {
      posiciones = [...posiciones, ...textToArray(p.valores)];
    });

    return posiciones;
  } catch(e) {
    return e;
  }
};

module.exports = {
  boardPosiciones,
}