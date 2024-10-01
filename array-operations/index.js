exports.array_operations = (A, B) => {
  const n = A.length;
  const m = B.length;
  
  let common_count = 0;
  let different_count = 0;
  const C = [];
  const D = [];

  let i = 0, j = 0;

  while (i < n && j < m) {
    if (A[i] === B[j]) {
      common_count++;
      i++;
      j++;
    } else if (A[i] < B[j]) {
      C.push(A[i]);
      i++;
    } else {
      D.push(B[j]);
      different_count++;
      j++;
    }
  }

  while (i < n) {
    C.push(A[i]);
    i++;
  }

  while (j < m) {
    D.push(B[j]);
    different_count++;
    j++;
  }

  return {
    common_count,
    different_count,
    C,
    D
  }
}
