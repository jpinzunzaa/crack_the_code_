exports.bubble_sort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Ingrese un array válido de números reales.');
  }

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}