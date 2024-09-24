const { gauss_sum } = require('./index');

describe('Cálculo de la suma de Gauss', () => {
  test('Debe calcular correctamente la suma de Gauss para un número positivo', () => {
    expect(gauss_sum(5)).toBe(15);
    expect(gauss_sum(10)).toBe(55);
  });

  test('Debe lanzar un error para números no válidos', () => {
    expect(() => gauss_sum(-5)).toThrow('Ingrese un número entero positivo.');
    expect(() => gauss_sum(0)).toThrow('Ingrese un número entero positivo.');
    expect(() => gauss_sum(3.5)).toThrow('Ingrese un número entero positivo.');
  });
});