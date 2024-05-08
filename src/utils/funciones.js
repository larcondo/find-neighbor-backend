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

module.exports = {
  addPiezaIsPossible,
};