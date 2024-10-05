exports.sort_identity_matrix = (A) => {
  const n = A.length;

  if (!A.every((row, i) => row[i] === 1 && row.filter(x => x === 1).length === 1)) {
    throw new Error('La matriz no es una matriz identidad válida.');
  }

  const flat_array = A.flat();

  flat_array.sort((a, b) => b - a);

  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      A[i][j] = flat_array[index++];
    }
  }

  return A;
}