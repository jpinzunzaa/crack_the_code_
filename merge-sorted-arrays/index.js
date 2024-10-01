exports.merge_sorted_arrays = (A, B) => {
  let i = 0, j = 0;
  const C = [];

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      C.push(A[i]);
      i++;
    } else {
      C.push(B[j]);
      j++;
    }
  }

  while (i < A.length) {
    C.push(A[i]);
    i++;
  }

  while (j < B.length) {
    C.push(B[j]);
    j++;
  }

  return C;
}