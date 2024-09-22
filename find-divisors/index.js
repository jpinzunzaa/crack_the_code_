exports.find_divisors = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    throw new Error('Ingrese un número entero positivo.');
  }

  const divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}