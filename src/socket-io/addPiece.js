const { changeOwner, getPieceByOwner } = require('../../database');
const { boardPosiciones } = require('../helpers/board');
const { addPiezaIsPossible } = require('../utils/funciones');
const { textToArray } = require('../utils/general')

const addPieceHandler = (io, socket) => {

  const agregarPieza = async (piece, playerRole, gameStatus) => {
    const { partida, player1, player2, turn } = gameStatus;
    const { piece_id } = piece;
    const board = await boardPosiciones(partida);
    const ids = `('${piece_id}')`;

    const canAdd = addPiezaIsPossible(board, piece.valores);

    if (canAdd) {
      await changeOwner('board', partida, ids);
    } else {
      const deck = await getPieceByOwner('deck', partida);
      if (deck.length > 0) {
        const newId = `('${deck[0].piece_id}')`;
        await changeOwner(playerRole, partida, newId);
      }
    }

    const playerPieces = await getPieceByOwner(playerRole, partida);
    const newPositions = await boardPosiciones(partida);
    const newPieces = playerPieces.map(p => ({...p, valores: textToArray(p.valores)}));

    const newGameStatus = {
      ...gameStatus,
      board: newPositions,
      turn: turn === 'player1' ? 'player2' : 'player1',
      player1: {
        ...player1,
        pieces: (playerRole === 'player1') ? newPieces : player1.pieces,
      },
      player2: {
        ...player2,
        pieces: (playerRole === 'player2') ? newPieces : player2.pieces,
      },
    }

    console.log(`Event: add-piece | to: room:${partida} | from: ${socket.id}`);
    io.to(`room:${partida}`).emit('add-piece', newGameStatus);
  }

  socket.on('add-piece', agregarPieza);
}

module.exports = addPieceHandler;