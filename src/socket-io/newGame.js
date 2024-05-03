const { generarId } = require('../utils/general');
const { initializeGame, getGamesByPlayerName } = require('../../database');

const newGameHandler = (io, socket) => {
  const crearPartida = async (playerName) => {
    const games = await getGamesByPlayerName(playerName);
    let values = null;
    let room = null;

    if (games?.length) {
      const {
        id: playerId,
        game_id: gameId,
        player_role: playerRole,
        player_name: playerName
      } = games[0];

      values = { playerId, playerName, playerRole, gameId };
      room = `room:${gameId}`;
    } else {
      const gameId = generarId();
      const playerId = generarId();
      const playerRole = 'player1';

      const res = await initializeGame({
        playerId, playerName, playerRole, gameId
      });

      values = res;
      room = `room:${gameId}`;
    }

    console.log(`Event: nueva-partida | to: $s{room} | from: ${socket.id}`);
    socket.join(room);
    io.to(room).emit('nueva-partida', values);
  };

  socket.on('nueva-partida', crearPartida);
};

module.exports = newGameHandler;