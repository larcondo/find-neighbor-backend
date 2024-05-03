const { addPiezaIsPossible } = require('../src/utils/funciones');
const { TOTAL_PIECES } = require('../src/utils/constants');

describe('es posible agregar pieza', () => {
  it('con tablero vacío', () => {
    const board = [];
    const pieza = TOTAL_PIECES[2].valores;

    expect(addPiezaIsPossible(board, pieza)).toBe(true);
  });

  it('con una pieza - posible', () => {
    const board = [...TOTAL_PIECES[2].valores];
    const pieza = TOTAL_PIECES[10].valores;

    expect(addPiezaIsPossible(board, pieza)).toBe(true);
  });

  it('con una pieza - no posible', () => {
    const board = [...TOTAL_PIECES[2].valores];
    const pieza = TOTAL_PIECES[11].valores;

    expect(addPiezaIsPossible(board, pieza)).toBe(false);
  });

  it('pieza 4 en tablero - tipo R1', () => {
    const pieceNumber = 4;
    const neighbors = [0, 22, 6, 1];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 9 en tablero - tipo R1', () => {
    const pieceNumber = 9;
    const neighbors = [1, 2, 8];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 15 en tablero - tipo R1', () => {
    const pieceNumber = 15;
    const neighbors = [11, 22, 5, 7, 18, 20, 12];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 21 en tablero - tipo R1', () => {
    const pieceNumber = 21;
    const neighbors = [18, 27, 28, 24, 26];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 27 en tablero - tipo R1', () => {
    const pieceNumber = 27;
    const neighbors = [7, 10, 28, 21, 18];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 16 en tablero - tipo R2', () => {
    const pieceNumber = 16;
    const neighbors = [0, 11, 13];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 22 en tablero - tipo R2', () => {
    const pieceNumber = 22;
    const neighbors = [0, 4, 6, 5, 15, 11];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 28 en tablero - tipo R2', () => {
    const pieceNumber = 28;
    const neighbors = [3, 10, 27, 21, 24];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 14 en tablero - tipo SP', () => {
    const pieceNumber = 14;
    const neighbors = [12, 20, 19, 32];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 0 en tablero - tipo L1', () => {
    const pieceNumber = 0;
    const neighbors = [16, 4, 22, 11];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 5 en tablero - tipo L1', () => {
    const pieceNumber = 5;
    const neighbors = [6, 7, 15, 22];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 10 en tablero - tipo L1', () => {
    const pieceNumber = 10;
    const neighbors = [2, 3, 28, 27, 7];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 17 en tablero - tipo L1', () => {
    const pieceNumber = 17;
    const neighbors = [18, 26, 30, 19];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 23 en tablero - tipo L1', () => {
    const pieceNumber = 23;
    const neighbors = [19, 30, 25];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 29 en tablero - tipo L1', () => {
    const pieceNumber = 29;
    const neighbors = [24, 31];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 1 en tablero - tipo L2', () => {
    const pieceNumber = 1;
    const neighbors = [4, 6, 2, 9];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 6 en tablero - tipo L2', () => {
    const pieceNumber = 6;
    const neighbors = [1, 4, 22, 5, 2];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 11 en tablero - tipo L2', () => {
    const pieceNumber = 11;
    const neighbors = [0, 16, 22, 13, 15];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 18 en tablero - tipo L2', () => {
    const pieceNumber = 18;
    const neighbors = [7, 15, 17, 20, 21, 27];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 24 en tablero - tipo L2', () => {
    const pieceNumber = 24;
    const neighbors = [21, 28, 26, 29];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 30 en tablero - tipo L2', () => {
    const pieceNumber = 30;
    const neighbors = [17, 23, 26, 31];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 2 en tablero - tipo L3', () => {
    const pieceNumber = 2;
    const neighbors = [1, 6, 7, 8, 9, 10];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 3 en tablero - tipo L3', () => {
    const pieceNumber = 3;
    const neighbors = [8, 10, 28];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 7 en tablero - tipo L3', () => {
    const pieceNumber = 7;
    const neighbors = [2, 5, 10, 15, 18, 27];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 12 en tablero - tipo L3', () => {
    const pieceNumber = 12;
    const neighbors = [13, 14, 15, 20];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 19 en tablero - tipo L3', () => {
    const pieceNumber = 19;
    const neighbors = [14, 20, 17, 23, 25];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 25 en tablero - tipo L3', () => {
    const pieceNumber = 25;
    const neighbors = [19, 23, 32];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 31 en tablero - tipo L3', () => {
    const pieceNumber = 31;
    const neighbors = [26, 29, 30];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 8 en tablero - tipo L4', () => {
    const pieceNumber = 8;
    const neighbors = [2, 3, 9];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 13 en tablero - tipo L4', () => {
    const pieceNumber = 13;
    const neighbors = [11, 12, 16];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 20 en tablero - tipo L4', () => {
    const pieceNumber = 20;
    const neighbors = [12, 14, 15, 18, 19];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 26 en tablero - tipo L4', () => {
    const pieceNumber = 26;
    const neighbors = [17, 21, 24, 30, 31];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

  it('pieza 32 en tablero - tipo L4', () => {
    const pieceNumber = 32;
    const neighbors = [14, 25];
    const board = [...TOTAL_PIECES[pieceNumber].valores];

    const posibles = TOTAL_PIECES.filter((p, i) => neighbors.includes(i)).map(p => p.valores);
    const noPosibles = TOTAL_PIECES.filter((p, i) => ![pieceNumber, ...neighbors].includes(i)).map(p => p.valores);

    posibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(true);
    });

    noPosibles.forEach(p => {
      const res = addPiezaIsPossible(board, p);
      expect(res).toBe(false);
    });
  });

});