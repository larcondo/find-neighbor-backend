const {
  getPieces,
  getPieceById,
  deleteAllPieces,
  getPlayerPieces,
} = require('../../database');
const { textToArray } = require('../utils/general');


const allPieces = async (req, res) => {
  try {
    const resultado = await getPieces();
    res.status(200).send(resultado);
  } catch(e) {
    console.log(e.message);
    res.status(500).send({ error: '/pieces ERROR' });
  }
};

const pieceById = async (req, res) => {
  const { id } = req.params;

  try {
    const resultados = await getPieceById(id);

    if (resultados.length < 1) return res.status(200).send([]);

    const piece = resultados[0];
    // piece.valores = piece.valores.split(';');
    // piece.valores = piece.valores.map(v => Number(v));
    piece.valores = textToArray(piece.valores);
    res.status(200).send(piece);
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/piece/:id ERROR' });
  }
};

const removePieces = async (req, res) => {
  try {
    const resultado = await deleteAllPieces();
    res.status(204).send(resultado);
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/pieces DELETE ERROR' });
  }
};

const playerPieces = async (req, res) => {
  try {
    const resultados = await getPlayerPieces();
    const player1 = resultados
      .slice(0,4)
      .map(p => ({...p, valores: textToArray(p.valores)}));
    
    const player2 = resultados
      .slice(4,8)
      .map(p => ({...p, valores: textToArray(p.valores)}));
    
    const idsToDeleteP1 = player1.map(p => p.id);
    const idsToDeleteP2 = player2.map(p => p.id);

    const idsToDelete = [...idsToDeleteP1, ...idsToDeleteP2];

    const str_query = '(' + idsToDelete.map(p => '?').join(',') + ')';

    res.status(200).send({ player1, player2, idsToDelete, str_query });
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/pieces ERROR' });
  }
};

// const addPiece = async (req, res) => {
//   const { tipo, valores } = req.body;

//   if(!tipo || !valores) return res.status(400).send({ message: 'Missing parameters' });

//   try {
//     const resultado = await insertPiece({ tipo, valores});
//     res.status(200).send(resultado);
//   } catch(e) {
//     console.log(e.message);
//     res.status(500).send({ error: '/add-piece ERROR' });
//   }
// };

module.exports = {
  allPieces,
  pieceById,
  removePieces,
  playerPieces,
}