const { is_perfect_number } = require('./index');

describe('Verificación de si un número es perfecto', () => {
  test('Debe devolver true para números perfectos', () => {
    expect(is_perfect_number(6)).toBe(true);
    expect(is_perfect_number(28)).toBe(true);
  });

  test('Debe devolver false para números no perfectos', () => {
    expect(is_perfect_number(5)).toBe(false);
    expect(is_perfect_number(12)).toBe(false);
  });

  test('Debe lanzar un error para entradas no válidas', () => {
    expect(() => is_perfect_number(-6)).toThrow('Ingrese un número entero positivo.');
    expect(() => is_perfect_number(0)).toThrow('Ingrese un número entero positivo.');
    expect(() => is_perfect_number(6.5)).toThrow('Ingrese un número entero positivo.');
  });
});