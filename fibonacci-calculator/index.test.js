const { fibonacci } = require('./index');

describe('Cálculo del enésimo término de la serie Fibonacci', () => {
  test('Debe devolver el primer término de la serie Fibonacci (0)', () => {
    expect(fibonacci(1)).toBe(0);
  });

  test('Debe devolver el segundo término de la serie Fibonacci (1)', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('Debe devolver el enésimo término de la serie Fibonacci', () => {
    expect(fibonacci(6)).toBe(5);
    expect(fibonacci(10)).toBe(34);
  });

  test('Debe lanzar un error para entradas no válidas', () => {
    expect(() => fibonacci(-5)).toThrow('Ingrese un número entero positivo mayor que 0.');
    expect(() => fibonacci(0)).toThrow('Ingrese un número entero positivo mayor que 0.');
    expect(() => fibonacci(5.5)).toThrow('Ingrese un número entero positivo mayor que 0.');
  });
});