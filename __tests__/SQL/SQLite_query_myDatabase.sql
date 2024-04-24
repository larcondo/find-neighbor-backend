-- SQLite
-- Para ejecutar query: Ctrl+Alt+Q
-- SELECT * FROM game_pieces WHERE tipo='R2';
-- SELECT * FROM game_pieces;

-- DELETE FROM game_pieces WHERE tipo IN ('L1', 'L2');
-- DELETE FROM game_pieces WHERE id IN ('ea6a5243', 'c0290446', '5a2c2984', 'edc218bc', '1b17e53c', '86c2cf80');

-- SELECT * FROM game_pieces ORDER BY RANDOM();

-- SELECT * FROM game_data;
-- SELECT * FROM game_pieces;
-- SELECT * FROM game_pieces WHERE partida="4a99f6db03a2d0b0" LIMIT 8;
-- SELECT * FROM game_pieces WHERE partida="95fdb914949f4332";

-- DROP TABLE game_data;
-- DROP TABLE game_pieces;

-- DELETE FROM game_data;
-- DELETE FROM game_pieces;

-- SELECT * FROM game_pieces WHERE partida="4a99f6db03a2d0b0" ORDER BY RANDOM() LIMIT 16;
-- UPDATE game_pieces SET owner='player1' WHERE partida='4a99f6db03a2d0b0' AND piece_id='1b17e53c';
-- UPDATE game_pieces SET owner='player1' WHERE partida='4a99f6db03a2d0b0' AND piece_id IN ('6e22cc56', '8ec5cd51', 'c254de16');
-- SELECT * FROM game_pieces WHERE piece_id='1b17e53c';

-- SELECT * FROM game_pieces WHERE partida="cb77963a762775ff" AND owner="board";
-- UPDATE game_pieces SET owner='deck' WHERE partida='cb77963a762775ff';
-- SELECT * FROM game_pieces WHERE partida="cb77963a762775ff" ORDER BY owner;
-- SELECT id, piece_id, tipo, valores, owner FROM game_pieces WHERE owner='player1' and partida='cb77963a762775ff';


-- DELETE FROM game_pieces WHERE partida="8e146a7ba30f8921";
-- DELETE FROM game_data WHERE game_id="55d2dd97bee64051";
-- SELECT * FROM game_data;
SELECT * FROM game_pieces WHERE partida="e770acf931f3fc18";
-- SELECT * FROM game_pieces;
-- SELECT DISTINCT partida FROM game_pieces;

-- fea37cac30051752
-- c520376a1e0b51c8
-- e770acf931f3fc18

-- DELETE FROM game_pieces WHERE partida="ccc650eb399197f1";
-- DELETE FROM game_data WHERE game_id="ccc650eb399197f1";