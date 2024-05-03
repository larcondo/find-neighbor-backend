const { emptyDeck, emptyGame } = require('../../database');

const endGameHandler = (io, socket) => {

  const finalizarPartida = async (partida) => {
    await emptyDeck(partida);
    await emptyGame(partida);

    console.log(`Event: finalizar | to: room:${partida} | from: ${socket.id}`);
    io.to(`room:${partida}`).emit('finalizar', { partida: null });
  };

  socket.on('finalizar', finalizarPartida);
};

module.exports = endGameHandler;