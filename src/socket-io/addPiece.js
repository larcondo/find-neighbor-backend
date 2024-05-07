const { changeOwner } = require('../../database');
const { boardPosiciones } = require('../helpers/board');
const { piecesByOwner } = require('../helpers/pieces');
const { addPiezaIsPossible } = require('../utils/funciones');

const addPieceHandler = (io, socket) => {

  const agregarPieza = async (piece, playerRole, gameStatus) => {
    const { partida, player1, player2, turn } = gameStatus;
    const { piece_id } = piece;
    const board = await boardPosiciones(partida);
    const ids = `('${piece_id}')`;
    let newPiece = [];

    const canAdd = addPiezaIsPossible(board, piece.valores);

    if (canAdd) {
      await changeOwner('board', partida, ids);
    } else {
      const deck = await piecesByOwner('deck', partida);
      if (deck.length > 0) {
        const newId = `('${deck[0].piece_id}')`;
        await changeOwner(playerRole, partida, newId);
        newPiece.push(deck[0]);
      }
    }

    const playerPieces = await piecesByOwner(playerRole, partida);
    const newPositions = await boardPosiciones(partida);

    const newGameStatus = {
      ...gameStatus,
      board: newPositions,
      turn: turn === 'player1' ? 'player2' : 'player1',
      player1: {
        ...player1,
        pieces: (playerRole === 'player1') ? playerPieces : player1.pieces,
        newPiece: (playerRole === 'player1') ? newPiece : null,
      },
      player2: {
        ...player2,
        pieces: (playerRole === 'player2') ? playerPieces : player2.pieces,
        newPiece: (playerRole === 'player2') ? newPiece : null,
      },
    };

    console.log(`Event: add-piece | to: room:${partida} | from: ${socket.id}`);
    io.to(`room:${partida}`).emit('add-piece', newGameStatus);
  };

  socket.on('add-piece', agregarPieza);
};

module.exports = addPieceHandler;