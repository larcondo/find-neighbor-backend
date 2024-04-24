const sqlite3 = require('sqlite3').verbose();
const DB_NAME = 'myDatabase.db';
const { generarId, arrayToText } = require('./src/utils/general');
const { TOTAL_PIECES } = require('./src/utils/constants');
 
const CREATE_TABLES_QUERY = `
  CREATE TABLE IF NOT EXISTS game_data (
    id TEXT PRIMARY KEY UNIQUE,
    game_id TEXT,
    player_role TEXT,
    player_name TEXT
  );

  CREATE TABLE IF NOT EXISTS game_pieces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    piece_id TEXT,
    tipo TEXT,
    valores TEXT,
    owner TEXT,
    partida TEXT
  );
`;

const db = new sqlite3.Database(DB_NAME, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Connected to database');
    db.exec(CREATE_TABLES_QUERY, (err) => {
      if(err) {
        console.log('Create:',err.message);
      } else {
        console.log('Tablas creadas exitosamente o ya existen');
      }
    })
  }
});

const getTables = () => {
  const TABLES_QUERY = `SELECT * FROM sqlite_master WHERE type='table'`

  return new Promise((resolve, reject) => {
    db.all(TABLES_QUERY, (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    })
  })
};

const getPieces = () => {
  const GET_PIECES = `SELECT * FROM game_pieces`;
  return new Promise((resolve, reject) => {
    db.all(GET_PIECES, (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    })
  });
};

const boardStatus = (partida) => {
  const BOARD_QUERY = `SELECT * FROM game_pieces WHERE owner='board' AND partida=?`;

  return new Promise((resolve, reject) => {
    db.all(BOARD_QUERY, [partida], (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    });
  });
};

const getPieceById = (id) => {
  const GET_PIECE_BY_ID = `SELECT * FROM game_pieces WHERE piece_id=?`;
  return new Promise((resolve, reject) => {
    db.all(GET_PIECE_BY_ID, [id], (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    });
  });
};

const getPieceByOwner = (owner, partida) => {
  const GET_PIECE_BY_OWNER = `SELECT id, piece_id, tipo, valores, owner FROM game_pieces WHERE owner=? and partida=?`;
  return new Promise((resolve, reject) => {
    db.all(GET_PIECE_BY_OWNER, [owner, partida], (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    });
  });
};

const getPlayerPieces = (gameId) => {
  const GET_PLAYER_PIECES = `SELECT * FROM game_pieces WHERE partida=? ORDER BY RANDOM() LIMIT 16`;
  return new Promise((resolve, reject) => {
    db.all(GET_PLAYER_PIECES, [gameId], (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    })
  });
};

const insertPiece = (piece) => {
  const { tipo, valores } = piece;
  const id = generarId();
  const INSERT_QUERY = `INSERT INTO game_pieces (id, tipo, valores) VALUES (?, ?, ?)`;
  
  return new Promise((resolve, reject) => {
    db.run(INSERT_QUERY, [id, tipo, valores], function(err) {
      if (err) {
        return reject(err)
      } else {
        return resolve({ id, tipo, valores, lastId: this.lastID })
      }
    })
  });
};

const deleteAllPieces = () => {
  const DELETE_ALL_QUERY = `DELETE FROM game_pieces`;
  return new Promise((resolve, reject) => {
    db.run(DELETE_ALL_QUERY, (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve({ message: 'table empty'});
      }
    })
  });
};

const changeOwner = (owner, partida, ids) => {
  const UPDATE_QUERY = `UPDATE game_pieces SET owner='${owner}' WHERE partida='${partida}' AND piece_id IN ${ids}`;
  return new Promise((resolve, reject) => {
    db.run(UPDATE_QUERY, (err) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(true);
      }
    })
  });
};

const initializeDeck = (partida) => {
  const INSERT_QUERY = `INSERT INTO game_pieces (piece_id, tipo, valores, owner, partida) VALUES (?, ?, ?, ?, ?)`;
  
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(INSERT_QUERY);
    for(let i = 0; i < TOTAL_PIECES.length; i++) {
      const valores = arrayToText(TOTAL_PIECES[i].valores);
      stmt.run([TOTAL_PIECES[i].id, TOTAL_PIECES[i].tipo, valores, 'deck', partida], (err) => {
        if (err) return reject(err);
      });
    }
    stmt.finalize((err) => {
      if(err) {
        return reject(err);
      } else {
        return resolve({ message: `Deck inicializado. Game ID: ${partida}.` });
      }
    });
  });
};

const emptyDeck = (partida) => {
  const DELETE_QUERY = `DELETE FROM game_pieces WHERE partida=?`;
  return new Promise((resolve, reject) => {
    db.run(DELETE_QUERY,[partida], function(err) {
      if(err) {
        reject(err);
      } else {
        resolve({ message: `Deck vaciado. Game ID: ${partida}.` })
      }
    });
  });
};

const initializeGame = ({ playerId, playerName, playerRole, gameId }) => {
  const INSERT_QUERY = `
    INSERT INTO game_data (id, game_id, player_name, player_role)
    VALUES (?, ?, ?, ?)
  `;

  return new Promise((resolve, reject) => {
    db.run(INSERT_QUERY, [playerId, gameId, playerName, playerRole],
      function(err) {
        if(err) {
          return reject(err)
        } else {
          return resolve({
            playerId,
            playerName,
            playerRole,
            gameId,
            lastID: this.lastID,
          })
        }
      }
    )
  });
};

const getGamesByPlayerName = (playerName) => {
  const GET_GAMES_BY_PLAYER_NAME = `SELECT * FROM game_data WHERE player_name=?`;
  return new Promise((resolve, reject) => {
    db.all(GET_GAMES_BY_PLAYER_NAME, [playerName], (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    });
  });
};

const getGamesByGameId = (gameId) => {
  const GET_GAMES_BY_GAME_ID = `SELECT * FROM game_data WHERE game_id=?`;
  return new Promise((resolve, reject) => {
    db.all(GET_GAMES_BY_GAME_ID, [gameId], (err, rows) => {
      if(err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    });
  });
}

module.exports = {
  db,
  getTables,
  getPieces,
  getPieceById,
  getPieceByOwner,
  getPlayerPieces,
  insertPiece,
  deleteAllPieces,
  initializeGame,
  initializeDeck,
  getGamesByPlayerName,
  getGamesByGameId,
  changeOwner,
  boardStatus,
  emptyDeck,
};