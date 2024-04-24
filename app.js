const express = require('express');
const app = express();
const cors = require('cors');

// Controllers
const tablesController = require('./src/controllers/tables');
const piecesController = require('./src/controllers/pieces');
const gameController = require('./src/controllers/game');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Home page');
});

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

module.exports = app;