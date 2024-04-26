const { emptyDeck, emptyGame } = require('../../database')

const endGameHandler = (io, socket) => {

  const finalizarPartida = async (partida) => {
    await emptyDeck(partida);
    await emptyGame(partida);

    io.emit('finalizar', { partida: null });
  }

  socket.on('finalizar', finalizarPartida);
}

module.exports = endGameHandler;