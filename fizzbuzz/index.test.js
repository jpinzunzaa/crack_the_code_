const {
  fizz_buzz_simple,
  fizz_buzz_no_modulus,
} = require('./index');

describe('FizzBuzz Tests', () => {
  const expected_result = [
    1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
    11, 'Fizz', 13, 14, 'FizzBuzz'
  ];

  test('FizzBuzz simple debe generar la secuencia correcta', () => {
    expect(fizz_buzz_simple(15)).toEqual(expected_result);
  });

  test('FizzBuzz sin usar el operador % debe generar la secuencia correcta', () => {
    expect(fizz_buzz_no_modulus(15)).toEqual(expected_result);
  });
});