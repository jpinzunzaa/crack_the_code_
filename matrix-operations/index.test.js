const { matrix_addition, matrix_substration, matrix_multiplication } = require('./index');

describe('Operaciones de matrices cuadradas', () => {
  const A = [
    [1, 2],
    [3, 4]
  ];
  const B = [
    [5, 6],
    [7, 8]
  ];

  test('Suma de matrices debe generar la matriz C (C = A + B)', () => {
    const C = [
      [6, 8],
      [10, 12]
    ];
    expect(matrix_addition(A, B)).toEqual(C);
  });

  test('Resta de matrices debe generar la matriz D (D = A - B)', () => {
    const D = [
      [-4, -4],
      [-4, -4]
    ];
    expect(matrix_substration(A, B)).toEqual(D);
  });

  test('Multiplicación de matrices debe generar la matriz E (E = A * B)', () => {
    const E = [
      [19, 22],
      [43, 50]
    ];
    expect(matrix_multiplication(A, B)).toEqual(E);
  });
});