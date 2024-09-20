exports.is_prime = (n) => {
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero mayor que 1.');
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}