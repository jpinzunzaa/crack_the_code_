const { swap_array_elements } = require('./index');

describe('Intercambio de elementos en un array', () => {
  test('Debe intercambiar los elementos correctamente en un array de tamaño par', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const swapped_arr = [6, 5, 4, 3, 2, 1];
    expect(swap_array_elements(arr)).toEqual(swapped_arr);
  });

  test('Debe intercambiar los elementos correctamente en un array de tamaño impar', () => {
    const arr = [1, 2, 3, 4, 5];
    const swapped_arr = [5, 4, 3, 2, 1];
    expect(swap_array_elements(arr)).toEqual(swapped_arr);
  });

  test('Debe retornar el mismo array si tiene un solo elemento', () => {
    const arr = [1];
    expect(swap_array_elements(arr)).toEqual([1]);
  });

  test('Debe lanzar un error si no se ingresa un array', () => {
    expect(() => swap_array_elements('no array')).toThrow('Ingrese un array válido.');
  });
});