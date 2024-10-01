exports.decimal_to_binary = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error('Ingrese un número entero no negativo.');
  }

  let R = [];
  
  if (n === 0) {
    return [0];
  }

  while (n > 0) {
    R.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return R;
}