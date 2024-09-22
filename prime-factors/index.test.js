const { prime_factors } = require('./index');

describe('Cálculo de factores primos de un número', () => {
  test('Debe devolver los factores primos de un número compuesto', () => {
    expect(prime_factors(28)).toEqual([2, 2, 7]);
    expect(prime_factors(45)).toEqual([3, 3, 5]);
  });

  test('Debe devolver el propio número si es primo', () => {
    expect(prime_factors(13)).toEqual([13]);
    expect(prime_factors(29)).toEqual([29]);
  });

  test('Debe lanzar un error para números no válidos', () => {
    expect(() => prime_factors(-5)).toThrow('Ingrese un número entero positivo mayor que 1.');
    expect(() => prime_factors(1)).toThrow('Ingrese un número entero positivo mayor que 1.');
    expect(() => prime_factors(2.5)).toThrow('Ingrese un número entero positivo mayor que 1.');
  });
});