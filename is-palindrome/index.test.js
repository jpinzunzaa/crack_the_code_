const { is_palindrome } = require('./index');

describe('Función is_palindrome', () => {
  test('Debe devolver true para una cadena palíndroma', () => {
    expect(is_palindrome('madam')).toBe(true);
    expect(is_palindrome('racecar')).toBe(true);
    expect(is_palindrome('level')).toBe(true);
  });

  test('Debe devolver false para una cadena que no es palíndroma', () => {
    expect(is_palindrome('hello')).toBe(false);
    expect(is_palindrome('world')).toBe(false);
  });

  test('Debe manejar cadenas vacías como palíndromas', () => {
    expect(is_palindrome('')).toBe(true);
  });

  test('Debe ser insensible a mayúsculas y minúsculas', () => {
    expect(is_palindrome('Madam')).toBe(false);
  });
});