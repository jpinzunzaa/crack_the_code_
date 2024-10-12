exports.factorial = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('El número debe ser un entero positivo');
  }

  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }

  return res;
}
