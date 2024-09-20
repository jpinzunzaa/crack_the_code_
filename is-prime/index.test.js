const { is_prime } = require('./index');

describe('Verificación de si un número es primo', () => {
  test('Debe devolver true para números primos', () => {
    expect(is_prime(2)).toBe(true);
    expect(is_prime(3)).toBe(true);
    expect(is_prime(17)).toBe(true);
    expect(is_prime(29)).toBe(true);
  });

  test('Debe devolver false para números no primos', () => {
    expect(is_prime(4)).toBe(false);
    expect(is_prime(10)).toBe(false);
    expect(is_prime(20)).toBe(false);
  });

  test('Debe lanzar un error para números menores que 1 o no enteros', () => {
    expect(() => is_prime(0)).toThrow('Ingrese un número entero mayor que 1.');
    expect(() => is_prime(-5)).toThrow('Ingrese un número entero mayor que 1.');
    expect(() => is_prime(3.5)).toThrow('Ingrese un número entero mayor que 1.');
  });
});