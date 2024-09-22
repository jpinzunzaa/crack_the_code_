const { find_divisors } = require('./index');

describe('Cálculo de divisores de un número entero', () => {
  test('Debe devolver los divisores de un número entero positivo', () => {
    expect(find_divisors(6)).toEqual([1, 2, 3, 6]);
    expect(find_divisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
  });

  test('Debe devolver 1 y el propio número si es primo', () => {
    expect(find_divisors(7)).toEqual([1, 7]);
    expect(find_divisors(13)).toEqual([1, 13]);
  });

  test('Debe lanzar un error para números no válidos', () => {
    expect(() => find_divisors(-6)).toThrow('Ingrese un número entero positivo.');
    expect(() => find_divisors(0)).toThrow('Ingrese un número entero positivo.');
    expect(() => find_divisors(5.5)).toThrow('Ingrese un número entero positivo.');
  });
});