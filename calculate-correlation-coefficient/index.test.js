const { calculate_correlation_coefficient } = require('./index');

describe('Coeficiente de correlación de Pearson', () => {
  test('Debe calcular correctamente el coeficiente de correlación para dos conjuntos de datos', () => {
    const x = [1, 2, 3, 4, 5];
    const y = [2, 4, 6, 8, 10];
    const result = calculate_correlation_coefficient(x, y);
    expect(result).toBeCloseTo(1, 5);
  });

  test('Debe lanzar un error si los conjuntos no tienen la misma longitud', () => {
    const x = [1, 2, 3];
    const y = [2, 4];
    expect(() => calculate_correlation_coefficient(x, y)).toThrow('Los conjuntos de datos deben tener la misma longitud');
  });

  test('Debe lanzar un error si se intenta dividir por cero', () => {
    const x = [1, 1, 1];
    const y = [2, 2, 2];
    expect(() => calculate_correlation_coefficient(x, y)).toThrow('La división por cero es indefinida');
  });
});