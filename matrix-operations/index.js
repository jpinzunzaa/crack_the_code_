exports.matrix_addition = (A, B) => {
  const n = A.length;
  const C = [];

  for (let i = 0; i < n; i++) {
    C[i] = [];
    for (let j = 0; j < n; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  return C;
}

exports.matrix_substration = (A, B) => {
  const n = A.length;
  const D = [];

  for (let i = 0; i < n; i++) {
    D[i] = [];
    for (let j = 0; j < n; j++) {
      D[i][j] = A[i][j] - B[i][j];
    }
  }

  return D;
}

exports.matrix_multiplication = (A, B) => {
  const n = A.length;
  const E = [];

  for (let i = 0; i < n; i++) {
    E[i] = [];
    for (let j = 0; j < n; j++) {
      E[i][j] = 0;
      for (let k = 0; k < n; k++) {
        E[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return E;
}