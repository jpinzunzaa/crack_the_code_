exports.power = (x, n) => {
  if (n <= 1) {
    throw new Error('El valor de n debe ser mayor que 1');
  }

  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }

  return res;
}