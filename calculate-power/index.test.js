const { calculate_power } = require('./index');

describe('Cálculo de b^e (potencia)', () => {
  test('Debe devolver el valor de una base elevada a un exponente positivo', () => {
    expect(calculate_power(2, 3)).toBe(8);
    expect(calculate_power(5, 4)).toBe(625);
  });

  test('Debe devolver 1 para cualquier número elevado a la potencia 0', () => {
    expect(calculate_power(2, 0)).toBe(1);
    expect(calculate_power(10, 0)).toBe(1);
  });

  test('Debe devolver el valor correcto para exponentes negativos', () => {
    expect(calculate_power(2, -2)).toBe(0.25);
    expect(calculate_power(5, -1)).toBe(0.2);
  });

  test('Debe lanzar un error para entradas no válidas', () => {
    expect(() => calculate_power(2, '3')).toThrow('La base debe ser un número y el exponente un número entero.');
    expect(() => calculate_power(2, 3.5)).toThrow('La base debe ser un número y el exponente un número entero.');
  });
});