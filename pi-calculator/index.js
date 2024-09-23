exports.pi_calculator = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    throw new Error('Ingrese un número entero positivo.');
  }

  let pi = 0;
  let sign = 1;

  for (let i = 0; i < n; i++) {
    pi += sign * (4 / (2 * i + 1));
    sign *= -1;
  }

  return pi;
}