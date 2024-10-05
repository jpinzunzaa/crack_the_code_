exports.nicomaco_cube = (n) => {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero positivo.');
  }

  const result = [];
  let odd = n * (n - 1) + 1;

  for (let i = 0; i < n; i++) {
    result.push(odd);
    odd += 2;
  }

  return {
    sum: result.reduce((acc, curr) => acc + curr, 0),
    odd_numbers: result
  }
}