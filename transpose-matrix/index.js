exports.transpose_matrix = (B) => {
  const n = B.length;

  if (!Array.isArray(B) || !B.every(row => Array.isArray(row) && row.length === n)) {
    throw new Error('Ingrese una matriz cuadrada válida de tamaño n * n.');
  }

  const transposed = [];
  for (let i = 0; i < n; i++) {
    transposed[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = B[i][j];
    }
  }

  return transposed;
}