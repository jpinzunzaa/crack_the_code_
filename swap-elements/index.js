exports.swap_array_elements = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Ingrese un array válido.');
  }

  const len = arr.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  }

  return arr;
}