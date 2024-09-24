const { gauss_sum } = require('./index');

describe('Cálculo de la suma de Gauss', () => {
  test('Debe calcular correctamente la suma de Gauss para un número positivo', () => {
    expect(gaussSum(5)).toBe(15);
    expect(gaussSum(10)).toBe(55);
  });

  test('Debe lanzar un error para números no válidos', () => {
    expect(() => gaussSum(-5)).toThrow('Ingrese un número entero positivo.');
    expect(() => gaussSum(0)).toThrow('Ingrese un número entero positivo.');
    expect(() => gaussSum(3.5)).toThrow('Ingrese un número entero positivo.');
  });
});