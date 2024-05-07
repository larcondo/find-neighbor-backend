const { getPieceByOwner, getPlayerPieces } = require('../../database');
const { textToArray } = require('../utils/general');

const piecesByOwner = async (playerRole, partida) => {
  try {
    const rawPieces = await getPieceByOwner(playerRole, partida);
    const pieces = rawPieces.map(p => (
      { ...p, valores: textToArray(p.valores) }
    ));
    return pieces;
  } catch(e) {
    return e;
  }
};

const playerPieces = async (partida) => {
  try {
    const rawPieces = await getPlayerPieces(partida);
    const pieces = rawPieces.map(p => (
      { ...p, valores: textToArray(p.valores) }
    ));
    return pieces;
  } catch(e) {
    return e;
  }
};

module.exports = {
  piecesByOwner,
  playerPieces,
};