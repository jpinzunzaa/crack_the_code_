exports.fibonacci = (n) => {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero positivo mayor que 0.');
  }

  let a = 0, b = 1, result = 0;
  
  if (n === 1) return 0;
  if (n === 2) return 1;

  for (let i = 3; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return b;
}