exports.count_digits_string = (n) => {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero positivo.');
  }
  return n.toString().length;
}

exports.count_digits_division = (n) => {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero positivo.');
  }
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

exports.count_digits_logarithm = (n) => {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Ingrese un número entero positivo.');
  }
  return Math.floor(Math.log10(n)) + 1;
}