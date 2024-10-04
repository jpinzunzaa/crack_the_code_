exports.magic_square = (matrix) => {
  const n = matrix.length;

  if (!matrix.every(row => Array.isArray(row) && row.length === n)) {
    throw new Error('La matriz debe ser cuadrada.');
  }

  const magic_sum = matrix[0].reduce((acc, num) => acc + num, 0);

  for (let i = 1; i < n; i++) {
    const row_sum = matrix[i].reduce((acc, num) => acc + num, 0);
    if (row_sum !== magic_sum) return false;
  }

  for (let j = 0; j < n; j++) {
    let col_sum = 0;
    for (let i = 0; i < n; i++) {
      col_sum += matrix[i][j];
    }
    if (col_sum !== magic_sum) return false;
  }

  let diag_1_sum = 0;
  for (let i = 0; i < n; i++) {
    diag_1_sum += matrix[i][i];
  }
  if (diag_1_sum !== magic_sum) return false;

  let diag_2_sum = 0;
  for (let i = 0; i < n; i++) {
    diag_2_sum += matrix[i][n - 1 - i];
  }
  if (diag_2_sum !== magic_sum) return false;

  return true;
}