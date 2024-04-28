const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const configCors = require('./config/cors');
const io = new Server(server, {
  cors: {
    origin: configCors.whitelist,
    methods: configCors.methods,
  }
});
const cors = require('cors');

// Controllers
const tablesController = require('./src/controllers/tables');
const piecesController = require('./src/controllers/pieces');
const gameController = require('./src/controllers/game');

app.use(express.json());
app.use(cors());

app.use(express.static('dist'));

app.get('/tables', tablesController.tables);
app.get('/pieces', piecesController.allPieces);
app.get('/piece/:id', piecesController.pieceById);
// app.get('/player-pieces', piecesController.playerPieces);
app.delete('/pieces', piecesController.removePieces);

app.get('/game/board-status/:partida', gameController.getBoardStatus);
app.get('/game/initial-pieces/:partida', gameController.playerPieces);
app.post('/game/start', gameController.startGame);
app.post('/game/join', gameController.joinToGame);
app.post('/game/add-piece', gameController.addPiece);
app.post('/game/reset-board/:partida', gameController.resetGameDeck);

// handlers
const registerNewGameHandler = require('./src/socket-io/newGame');
const registerJoinGameHandler = require('./src/socket-io/joinGame');
const registerAddPieceHandler = require('./src/socket-io/addPiece');
const registerEndGameHandler = require('./src/socket-io/endGame');

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', (reason) => {
    console.log('user disconnected:', reason);
  });

  registerNewGameHandler(io, socket);
  registerJoinGameHandler(io, socket);
  registerAddPieceHandler(io, socket);
  registerEndGameHandler(io, socket);

});

module.exports = server;