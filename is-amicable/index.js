const sum_of_divisors = (n) => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

exports.is_amicable = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Ambos números deben ser enteros positivos.');
  }

  const sum_a = sum_of_divisors(a);
  const sum_b = sum_of_divisors(b);

  return sum_a === b && sum_b === a;
}