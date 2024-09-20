const { count_digits_string, count_digits_division, count_digits_logarithm } = require('./index');

describe('Cálculo del número de dígitos usando diferentes algoritmos', () => {
  test('Debe contar los dígitos de un número usando conversión a string', () => {
    expect(count_digits_string(12345)).toBe(5);
    expect(count_digits_string(7)).toBe(1);
    expect(count_digits_string(987654321)).toBe(9);
  });

  test('Debe contar los dígitos de un número usando división repetida por 10', () => {
    expect(count_digits_division(12345)).toBe(5);
    expect(count_digits_division(7)).toBe(1);
    expect(count_digits_division(987654321)).toBe(9);
  });

  test('Debe contar los dígitos de un número usando logaritmo en base 10', () => {
    expect(count_digits_logarithm(12345)).toBe(5);
    expect(count_digits_logarithm(7)).toBe(1);
    expect(count_digits_logarithm(987654321)).toBe(9);
  });

  test('Debe lanzar un error para entradas inválidas', () => {
    expect(() => count_digits_string(-123)).toThrow('Ingrese un número entero positivo.');
    expect(() => count_digits_division('123')).toThrow('Ingrese un número entero positivo.');
    expect(() => count_digits_logarithm(12.34)).toThrow('Ingrese un número entero positivo.');
  });
});