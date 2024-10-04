const { magic_square } = require('./index');

describe('Verificación de cuadrado mágico', () => {
  test('Debe devolver true para un cuadrado mágico', () => {
    const matrix = [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8]
    ];
    expect(magic_square(matrix)).toBe(true);
  });

  test('Debe devolver false para una matriz que no es un cuadrado mágico', () => {
    const not_matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(magic_square(not_matrix)).toBe(false);
  });

  test('Debe lanzar un error si la matriz no es cuadrada', () => {
    const not_square = [
      [1, 2],
      [3, 4, 5]
    ];
    expect(() => magic_square(not_square)).toThrow('La matriz debe ser cuadrada.');
  });
});