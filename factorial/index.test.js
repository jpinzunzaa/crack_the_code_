const { factorial } = require('./index');

describe('Cálculo del factorial', () => {
  test('Debe calcular correctamente el factorial de 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Debe calcular correctamente el factorial de 0 (0! = 1)', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Debe lanzar un error si el número es negativo', () => {
    expect(() => factorial(-3)).toThrow('El número debe ser un entero positivo');
  });

  test('Debe lanzar un error si el número no es entero', () => {
    expect(() => factorial(4.5)).toThrow('El número debe ser un entero positivo');
  });
});