const { sort_identity_matrix } = require('./index');

describe('Ordenar elementos de una matriz identidad en orden descendente', () => {
  test('Debe ordenar correctamente los elementos de una matriz identidad 3x3', () => {
    const A = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
    const sorted_matrix = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0]
    ];
    expect(sort_identity_matrix(A)).toEqual(sorted_matrix);
  });

  test('Debe lanzar un error si no es una matriz identidad', () => {
    const not_identity = [
      [1, 0, 0],
      [0, 0, 1],
      [0, 1, 0]
    ];
    expect(() => sort_identity_matrix(not_identity)).toThrow('La matriz no es una matriz identidad válida.');
  });
});