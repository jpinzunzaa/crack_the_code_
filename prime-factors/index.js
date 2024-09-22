exports.prime_factors = (n) => {
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero positivo mayor que 1.');
  }

  const factors = [];
  let divisor = 2;

  while (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    }
    divisor++;
  }

  return factors;
}