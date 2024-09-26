exports.gauss_sum = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    throw new Error('Ingrese un número entero positivo.');
  }
  return (n * (n + 1)) / 2;
}