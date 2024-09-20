exports.is_perfect_number = (n) => {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero positivo.');
  }

  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}