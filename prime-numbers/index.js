const is_prime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

exports.primer_numbers = (k) => {
  if (typeof k !== 'number' || !Number.isInteger(k) || k <= 0) {
    throw new Error('Ingrese un número entero positivo.');
  }

  const primes = [];
  let num = 2;

  while (primes.length < k) {
    if (is_prime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}