const { pi_calculator } = require('./index');

describe('Cálculo de pi usando la serie de Leibniz', () => {
  test('Debe calcular pi con una precisión de 1 término', () => {
    expect(pi_calculator(1)).toBe(4);
  });

  test('Debe calcular pi con una precisión de 10 términos', () => {
    expect(pi_calculator(10)).toBeCloseTo(3.0418396189, 5);
  });

  test('Debe calcular pi con una precisión de 100 términos', () => {
    expect(pi_calculator(100)).toBeCloseTo(3.1315929036, 5);
  });

  test('Debe lanzar un error si se ingresa un número no válido', () => {
    expect(() => pi_calculator(-10)).toThrow('Ingrese un número entero positivo.');
    expect(() => pi_calculator(0)).toThrow('Ingrese un número entero positivo.');
    expect(() => pi_calculator(2.5)).toThrow('Ingrese un número entero positivo.');
  });
});