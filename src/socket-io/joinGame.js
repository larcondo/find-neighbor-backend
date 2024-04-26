const { generarId } = require('../utils/general');
const {
  initializeGame,
  initializeDeck,
  getPlayerPieces,
  getGamesByGameId,
  changeOwner,
} = require('../../database');
const { textToArray } = require('../utils/general')

const joinGameHandler = (io, socket) => {
  const unirseAPartida = async (playerName, partida) => {
    console.log(`${playerName} quiere unirse a la partida ${partida}`);

    const playerId = generarId();
    const playerRole = 'player2';

    await initializeGame({ playerId, playerName, playerRole, gameId: partida });
    await initializeDeck(partida);
    const deck = await getPlayerPieces(partida);

    const p1pieces = deck.slice(0,8)
      .map(p => ({...p, valores: textToArray(p.valores)}));
    
    const p2pieces = deck.slice(8,16)
      .map(p => ({...p, valores: textToArray(p.valores)}));

    const idsToP1 = p1pieces.map(p => p.piece_id);
    const idsPieces1 = "('" + idsToP1.join("', '") + "')";
    const idsToP2 = p2pieces.map(p => p.piece_id);
    const idsPieces2 = "('" + idsToP2.join("', '") + "')";

    await changeOwner('player1', partida, idsPieces1);
    await changeOwner('player2', partida, idsPieces2);
 
    const newPartida = await getGamesByGameId(partida);
    console.log(newPartida)

    const gameStatus = {
      partida,
      player1: {
        ...newPartida[0],
        pieces: p1pieces,
      },
      player2: {
        ...newPartida[1],
        pieces: p2pieces,
      },
      board: [],
      turn: 'player1',
    }

    io.emit('unirse-partida', gameStatus);
  }

  socket.on('unirse-partida', unirseAPartida);
}

module.exports = joinGameHandler;