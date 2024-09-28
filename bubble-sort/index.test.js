const { bubble_sort } = require('./index');

describe('Ordenamiento de elementos en un array de números reales', () => {
  test('Debe ordenar correctamente un array de números reales', () => {
    const arr = [3.2, 1.5, 4.6, 2.3, 0.9];
    const sorted_arr = [0.9, 1.5, 2.3, 3.2, 4.6];
    expect(bubble_sort(arr)).toEqual(sorted_arr);
  });

  test('Debe manejar un array ya ordenado', () => {
    const arr = [1.1, 2.2, 3.3, 4.4];
    expect(bubble_sort(arr)).toEqual(arr);
  });

  test('Debe manejar un array con un solo elemento', () => {
    const arr = [5.5];
    expect(bubble_sort(arr)).toEqual(arr);
  });

  test('Debe lanzar un error si no es un array', () => {
    expect(() => bubble_sort('no array')).toThrow('Ingrese un array válido de números reales.');
  });
});