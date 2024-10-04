const { transpose_matrix } = require('./index');

describe('Cálculo de la transpuesta de una matriz cuadrada', () => {
  test('Debe calcular correctamente la transpuesta de una matriz 3x3', () => {
    const B = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const transposed = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ];
    expect(transpose_matrix(B)).toEqual(transposed);
  });

  test('Debe calcular correctamente la transpuesta de una matriz 2x2', () => {
    const B = [
      [1, 2],
      [3, 4]
    ];
    const transposed = [
      [1, 3],
      [2, 4]
    ];
    expect(transpose_matrix(B)).toEqual(transposed);
  });

  test('Debe lanzar un error si no es una matriz cuadrada', () => {
    const B = [
      [1, 2],
      [3]
    ];
    expect(() => transpose_matrix(B)).toThrow('Ingrese una matriz cuadrada válida de tamaño n * n.');
  });
});