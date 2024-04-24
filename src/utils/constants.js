const BoardArray = [...Array(100).keys()]

const TOTAL_PIECES = [
  { id: '19a321f9', tipo: 'L1', valores: [1,11,12] },
  { id: '6e22cc56', tipo: 'L2', valores: [5,6,16] },
  { id: '191f6602', tipo: 'L3', valores: [17,26,27] },
  { id: 'ecae9301', tipo: 'L3', valores: [29,38,39] },
  { id: '1b17e53c', tipo: 'R1', valores: [2,3,4] },
  { id: 'c254de16', tipo: 'L1', valores: [24,34,35] },
  { id: '8e4f34ca', tipo: 'L2', valores: [14,15,25] },
  { id: '8ec5cd51', tipo: 'L3', valores: [36,45,46] },
  { id: 'e51dfc04', tipo: 'L4', valores: [18,19,28] },
  { id: '86c2cf80', tipo: 'R1', valores: [7,8,9] },
  { id: '8665431f', tipo: 'L1', valores: [37,47,48] },
  { id: '39e8a4e7', tipo: 'L2', valores: [21,22,32] },
  { id: '0545e9d0', tipo: 'L3', valores: [41,50,51] },
  { id: '63fe4625', tipo: 'L4', valores: [30,31,40] },
  { id: 'ea6a5243', tipo: 'SP', valores: [60,61,70,71] },
  { id: 'edc218bc', tipo: 'R1', valores: [42,43,44] },
  { id: '2cf0fec1', tipo: 'R2', valores: [0,10,20] },
  { id: '227d1947', tipo: 'L1', valores: [64,74,75] },
  { id: 'd38b189f', tipo: 'L2', valores: [54,55,65] },
  { id: '2ce24135', tipo: 'L3', valores: [63,72,73] },
  { id: '03c6faa9', tipo: 'L4', valores: [52,53,62] },
  { id: '5a2c2984', tipo: 'R1', valores: [66,67,68] },
  { id: '7eec1011', tipo: 'R2', valores: [13,23,33] },
  { id: 'ee1851bc', tipo: 'L1', valores: [83,93,94] },
  { id: 'd92c0fde', tipo: 'L2', valores: [78,79,89] },
  { id: 'ad140c85', tipo: 'L3', valores: [82,91,92] },
  { id: 'a51ab665', tipo: 'L4', valores: [76,77,86] },
  { id: 'c0290446', tipo: 'R1', valores: [56,57,58] },
  { id: '3cb99505', tipo: 'R2', valores: [49,59,69] },
  { id: '898dd3b1', tipo: 'L1', valores: [88,98,99] },
  { id: '2d6bd662', tipo: 'L2', valores: [84,85,95] },
  { id: '8d5a1c8a', tipo: 'L3', valores: [87,96,97] },
  { id: '3011b8b5', tipo: 'L4', valores: [80,81,90] },
];

const TOTAL_PIECES_V2 = [
  { id: '46621c05', tipo: 'L4', valores: [0,1,10] },
  { id: 'b154e55c', tipo: 'L3', valores: [2,11,12] },
  { id: '8367c69b', tipo: 'L1', valores: [3,13,14] },
  { id: '31974c18', tipo: 'R1', valores: [4,5,6] },
  { id: '7950cb03', tipo: 'L2', valores: [7,8,18] },
  { id: 'c4ad6970', tipo: 'R2', valores: [9,19,29] },
  { id: '1f4d577d', tipo: 'R2', valores: [15,25,35] },
  { id: '31db9c8f', tipo: 'SP', valores: [16,17,26,27] },
  { id: '466e5e6e', tipo: 'R2', valores: [20,30,40] },
  { id: 'a0cec113', tipo: 'L4', valores: [21,22,31] },
  { id: '3c3a12eb', tipo: 'L2', valores: [23,24,34] },
  { id: '56432cb9', tipo: 'L1', valores: [28,38,39] },
  { id: '5cd408bb', tipo: 'L4', valores: [32,33,42] },
  { id: 'fbf5f704', tipo: 'L2', valores: [36,37,47] },
  { id: '959e9e20', tipo: 'L3', valores: [41,50,51] },
  { id: 'c47e76dc', tipo: 'R1', valores: [43,44,45] },
  { id: 'd7cbd035', tipo: 'L1', valores: [46,56,57] },
  { id: '97dd29d1', tipo: 'L4', valores: [48,49,58] },
  { id: 'd4477281', tipo: 'L2', valores: [52,53,63] },
  { id: '6295e6b3', tipo: 'L2', valores: [54,55,65] },
  { id: '94b56eba', tipo: 'L3', valores: [59,68,69] },
  { id: 'bcb466ca', tipo: 'L1', valores: [60,70,71] },
  { id: '6d6c2fe3', tipo: 'L2', valores: [61,62,72] },
  { id: '29889142', tipo: 'R2', valores: [64,74,84] },
  { id: 'a260cace', tipo: 'L3', valores: [66,75,76] },
  { id: '85536bcc', tipo: 'L1', valores: [67,77,78] },
  { id: '80d44d85', tipo: 'L3', valores: [73,82,83] },
  { id: '4907ac7e', tipo: 'L3', valores: [79,88,89] },
  { id: '174c9f84', tipo: 'L4', valores: [80,81,90] },
  { id: '3b12b108', tipo: 'L3', valores: [85,94,95] },
  { id: '5fb56adb', tipo: 'L4', valores: [86,87,96] },
  { id: 'cc281cf9', tipo: 'R1', valores: [91,92,93] },
  { id: '4336ee6c', tipo: 'R1', valores: [97,98,99] },
];

module.exports = {
  BoardArray,
  TOTAL_PIECES,
  TOTAL_PIECES_V2,
}

/**
 * BACKEND
 * 
 * - Tabla con fichas iniciales (ordenadas o no)
 * 
 * Iniciar Partida:
 * - Tabla de jugador con nombre y datos
 * - Tabla con piezas de cada jugador (puede ser 1 tabla donde cada ficha esté asociada a cada jugador)
 * - Tabla con deck (inicialmente completo con las fichas iniciales - no se pueden agregar fichas)
 * - Tabla con tablero actual (inicialmente vacio)
 * 
 * 
 * 
 */