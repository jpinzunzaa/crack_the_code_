const { calculate_variance } = require('./index');

describe('Cálculo de varianza', () => {
  test('Debe calcular correctamente la varianza de un conjunto de números', () => {
    const numbers = [2, 4, 4, 4, 5, 5, 7, 9];
    const result = calculate_variance(numbers);
    expect(result).toBe(4);
  });

  test('Debe lanzar un error si el conjunto está vacío', () => {
    expect(() => calculate_variance([])).toThrow('Debe proporcionar un conjunto de números');
  });

  test('Debe lanzar un error si no se proporciona un arreglo', () => {
    expect(() => calculate_variance('not an array')).toThrow('Debe proporcionar un conjunto de números');
  });
});