const { generarId } = require('../utils/general');
const { initializeGame } = require('../../database');

const newGameHandler = (io, socket) => {
  const crearPartida = async (playerName) => {
    const gameId = generarId();
    const playerId = generarId();
    const playerRole = 'player1';

    const res = await initializeGame({
      playerId, playerName, playerRole, gameId
    });

    socket.emit('nueva-partida', res);
    console.log(`${playerName} inicio una nueva partida...`);
  }

  socket.on('nueva-partida', crearPartida);
}

module.exports = newGameHandler;