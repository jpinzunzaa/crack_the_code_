exports.count_patterns = (V, P) => {
  let count = 0;

  if (!Array.isArray(V) || !Array.isArray(P)) {
    throw new Error('Ambos argumentos deben ser arrays.');
  }

  for (let i = 0; i <= V.length - P.length; i++) {
    let match = true;
    for (let j = 0; j < P.length; j++) {
      if (V[i + j] !== P[j]) {
        match = false;
        break;
      } 
    }
    if (match) {
      count++;
    }
  }

  return count;
}
