const { merge_sorted_arrays } = require('./index');

describe('Mezcla de arrays ordenados A y B en un array C', () => {
  test('Debe mezclar correctamente dos arrays de tamaño n y m', () => {
    const A = [1, 3, 5, 7];
    const B = [2, 4, 6, 8];
    const result = merge_sorted_arrays(A, B);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('Debe manejar arrays de diferentes tamaños', () => {
    const A = [1, 2, 3];
    const B = [4, 5, 6, 7, 8];
    const result = merge_sorted_arrays(A, B);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('Debe manejar arrays con un solo elemento', () => {
    const A = [5];
    const B = [1];
    const result = merge_sorted_arrays(A, B);
    expect(result).toEqual([1, 5]);
  });

  test('Debe manejar arrays vacíos', () => {
    const A = [];
    const B = [1, 2, 3];
    const result = merge_sorted_arrays(A, B);
    expect(result).toEqual([1, 2, 3]);
  });
});