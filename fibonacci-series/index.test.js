const { fibonacci_series } = require('./index');

describe('Generación de la serie de Fibonacci y su suma', () => {
  test('Debe generar correctamente la serie de Fibonacci hasta 5', () => {
    const result = fibonacci_series(5);
    expect(result.series).toEqual([0, 1, 1, 2, 3, 5]);
    expect(result.sum).toBe(12);
  });

  test('Debe generar correctamente la serie de Fibonacci hasta 0', () => {
    const result = fibonacci_series(0);
    expect(result.series).toEqual([0]);
    expect(result.sum).toBe(1);
  });

  test('Debe lanzar un error si el número es negativo', () => {
    expect(() => fibonacci_series(-3)).toThrow('El número debe ser un entero positivo');
  });

  test('Debe lanzar un error si el número no es entero', () => {
    expect(() => fibonacci_series(3.5)).toThrow('El número debe ser un entero positivo');
  });
});