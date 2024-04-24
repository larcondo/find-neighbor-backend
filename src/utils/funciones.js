const nuevoTablero = () => {
  const tablero = [];
  let i;

  for(i = 0; i < 100; i++) {
    tablero.push(i);
  }

  return tablero;
};

const nuevaPieza = ( tipo, n ) => {
  if (isNaN(n)) return null; // cambiar por throw err
  
  switch(tipo) {
    case 'R1':
      return [n, n+1, n+2];
    case 'R2':
      return [n, n+10, n+20];
    case 'L1':
      return [n, n+10, n+11];
    case 'L2':
      return [n, n+1, n+11];
    case 'L3':
      return [n, n+9, n+10];
    case 'L4':
      return [n, n+1, n+10];
    default:
      return null;
  }
};

const getZona = (n) => {
  if (isNaN(n) || n > 99 || n < 0) return null;

  if ([0, 9, 90, 99].includes(n)) return 'ESQUINAS';
  if (n > 0 && n < 9) return 'SUPERIOR';
  if (n > 90 && n < 99) return 'INFERIOR';
  if (n%10 === 0) return 'IZQUIERDA';
  if (n%10 === 9) return 'DERECHA';
  return 'CENTRO';
};

const addPiezaIsPossible = (tablero, piezaPosArray) => {
  if (tablero.length === 0) return true;

  let vecinos = [];
  piezaPosArray.forEach(n => {
    switch(true) {
      case (n === 0):
        vecinos = [...vecinos, n+1, n+10];
        break;
      case (n === 9): vecinos = [...vecinos, n-1, n+10]; break;
      case (n === 90): vecinos = [...vecinos, n+1, n-10]; break;
      case (n === 99): vecinos = [...vecinos, n-1, n-10]; break;
      case (n > 0 && n < 9): vecinos = [...vecinos, n-1, n+1, n+10]; break;
      case (n > 90 && n < 99): vecinos = [...vecinos, n-1, n+1, n-10]; break;
      case (n%10 === 0): vecinos = [...vecinos, n+1, n-10, n+10]; break;
      case (n%10 === 9): vecinos = [...vecinos, n-1, n-10, n+10]; break;
      default: vecinos = [...vecinos, n-10, n-1, n+1, n+10];
    } 
    // vecinos = [...vecinos, n-10, n-1, n+1, n+10];
  });

  return vecinos.some(n => tablero.includes(n));
};

const agregarPieza = (tablero, pieza) => {
  return tablero.concat(pieza);
}

module.exports = {
  nuevoTablero,
  nuevaPieza,
  getZona,
  addPiezaIsPossible,
  agregarPieza,
};