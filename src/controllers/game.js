const {
  initializeGame,
  getGamesByPlayerName,
  getGamesByGameId,
  getPieceById,
  initializeDeck,
  getPlayerPieces,
  getPieceByOwner,
  boardStatus,
  changeOwner,
  emptyDeck,
} = require('../../database');
const { generarId, textToArray } = require('../utils/general');
const { addPiezaIsPossible } = require('../utils/funciones');
const { boardPosiciones } = require('../helpers/board');

const startGame = async (req, res) => {
  const { playerName } = req.body;

  if (!playerName) return res.status(400).send({ msg: 'Player name required' });

  try {
    const query1 = await getGamesByPlayerName(playerName);

    if (query1.some(g => g.player_name === playerName)){
      return res.status(400).send({ msg: `El jugador ${playerName} ya ha comenzado una partida.` });
    }

    const playerId = generarId();
    const gameId = generarId();
    const playerRole = 'player1';

    const resultado = await initializeGame({
      playerId, playerName, playerRole, gameId
    });

    res.status(200).send(resultado);

  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ errMessage: e?.message });
  }
};

const joinToGame = async (req, res) => {
  const { playerName, gameId } = req.body;
  if (!playerName) return res.status(400).send({ msg: 'Player name required' });
  if (!gameId) return res.status(400).send({ msg: 'Game ID required' });

  try {
    const query1 = await getGamesByPlayerName(playerName);

    if (query1.some(g => g.player_name === playerName)) {
      return res.status(400).send({ msg: `El jugador ${playerName} ya ha comenzado una partida.` });
    }

    const query2 = await getGamesByGameId(gameId);

    if(query2.length < 1) return res.status(400).send({ msg: 'Game ID erroneo. No se encontró partida.' });
    if(query2.length > 1) return res.status(400).send({ msg: 'Partida ya iniciada entre 2 jugadores.' });

    const playerId = generarId();
    const playerRole = 'player2';

    const resultado = await initializeGame({
      playerId, playerName, playerRole, gameId
    });

    const deckStatus = await initializeDeck(gameId);

    res.status(200).send({resultado, deckStatus});
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ errMessage: e?.message });
  }

};

const playerPieces = async (req, res) => {
  const { partida } = req.params;

  try {
    const resultados = await getPlayerPieces(partida);

    if (!resultados.every(p => p.owner === 'deck')) return res.status(400).send({ msg: `Las piezas ya fueron repartidas! Game ID: ${partida}` });

    const player1 = resultados
      .slice(0,8)
      .map(p => ({...p, valores: textToArray(p.valores)}));
    
    const player2 = resultados
      .slice(8,16)
      .map(p => ({...p, valores: textToArray(p.valores)}));
    
    const idsToP1 = player1.map(p => p.piece_id);
    const idsPieces1 = "('" + idsToP1.join("', '") + "')";
    const idsToP2 = player2.map(p => p.piece_id);
    const idsPieces2 = "('" + idsToP2.join("', '") + "')";

    const q1 = await changeOwner('player1', partida, idsPieces1);
    const q2 = await changeOwner('player2', partida, idsPieces2);

    res.status(200).send({ player1, player2 });
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/pieces ERROR' });
  }
};

const getBoardStatus = async (req, res) => {
  const { partida } = req.params;
  if (!partida) return res.status(400).send({ msg: 'Game ID required!' });

  try {
    const board = await boardStatus(partida);
    const posiciones = await boardPosiciones(partida);

    res.status(200).send({ board, posiciones });
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/board ERROR' });
  }
};

const addPiece = async (req, res) => {
  const { piece_id, partida, playerRole } = req.body;
  const ids = "('" + piece_id + "')";

  try {
    const posiciones = await boardPosiciones(partida);
    const pieces = await getPieceById(piece_id);
    const piece = pieces.filter(p => p.partida === partida)[0];
    // console.log(piece);
    const canAdd = addPiezaIsPossible(posiciones, textToArray(piece.valores));

    if (canAdd) {
      const q1 = await changeOwner('board', partida, ids);
    } else {
      const deck = await getPieceByOwner('deck', partida);
      if (deck.length > 0) {
        const newId = "('" + deck[0].piece_id + "')";
        const q2 = await changeOwner(playerRole, partida, newId);
      }
    }
    const playerPieces = await getPieceByOwner(playerRole, partida);
    const newPositions = await boardPosiciones(partida);

    const gameInProgress = playerPieces.length > 0;

    res.status(200).send({
      playerPieces: playerPieces.map(p => ({...p, valores: textToArray(p.valores)})),
      board: newPositions,
      gameInProgress,
    });
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/addpiece ERROR' });
  }
};

const resetGameDeck = async (req, res) => {
  const { partida } = req.params;
  if (!partida) return res.status(400).send({ msg: 'Game ID required!' });

  try {
    const q1 = await emptyDeck(partida);
    // console.log(q1);
    const resultado = await initializeDeck(partida);

    res.status(200).send(resultado);
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/reset-board ERROR' });
  }
};

module.exports = {
  resetGameDeck,
  startGame,
  joinToGame,
  playerPieces,
  addPiece,
  getBoardStatus,
}