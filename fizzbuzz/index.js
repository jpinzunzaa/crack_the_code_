exports.fizz_buzz_simple = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

exports.fizz_buzz_no_modulus = (n) => {
  const result = [];
  let fizz = 0, buzz = 0;

  for (let i = 1; i <= n; i++) {
    fizz++;
    buzz++;

    if (fizz === 3 && buzz === 5) {
      result.push('FizzBuzz');
      fizz = 0;
      buzz = 0;
    } else if (fizz === 3) {
      result.push('Fizz');
      fizz = 0;
    } else if (buzz === 5) {
      result.push('Buzz');
      buzz = 0;
    } else {
      result.push(i);
    }
  }
  return result;
}