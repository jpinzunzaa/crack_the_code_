const { primer_numbers } = require('./index');

describe('Llenar un array con los primeros k números primos', () => {
  test('Debe generar correctamente los primeros 5 números primos', () => {
    expect(primer_numbers(5)).toEqual([2, 3, 5, 7, 11]);
  });

  test('Debe generar correctamente los primeros 10 números primos', () => {
    expect(primer_numbers(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  test('Debe lanzar un error si el valor de k no es válido', () => {
    expect(() => primer_numbers(-5)).toThrow('Ingrese un número entero positivo.');
    expect(() => primer_numbers(0)).toThrow('Ingrese un número entero positivo.');
    expect(() => primer_numbers(2.5)).toThrow('Ingrese un número entero positivo.');
  });
});