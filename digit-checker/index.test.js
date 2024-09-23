const { digit_checker } = require('./index');

describe('Verificación de si un número contiene un dígito', () => {
  const testCases = [
    { n: 12345, d: 3, expected: true },
    { n: 67890, d: 3, expected: false },
    { n: 112233, d: 2, expected: true },
    { n: 12345, d: 9, expected: false },
  ];

  testCases.forEach(({ n, d, expected }) => {
    test(`Verificando si el número ${n} contiene el dígito ${d} (Division)`, () => {
      expect(digit_checker(n, d)).toBe(expected);
    });
  });
});