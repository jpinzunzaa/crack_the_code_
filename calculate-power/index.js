exports.calculate_power = (b, e) => {
  if (typeof b !== 'number' || typeof e !== 'number' || !Number.isInteger(e)) {
    throw new Error('La base debe ser un número y el exponente un número entero.');
  }

  let result = 1;

  if (e < 0) {
    b = 1 / b;
    e = -e;
  }

  for (let i = 0; i < e; i++) {
    result *= b;
  }

  return result;
}