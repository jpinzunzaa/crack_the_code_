const { nicomaco_cube } = require('./index');

describe('Cálculo de los cubos de Nicómaco de Gerasa', () => {
  test('Debe devolver el cubo de 1 con los números impares', () => {
    expect(nicomaco_cube(1)).toEqual({ sum: 1, oddNumbers: [1] });
  });

  test('Debe devolver el cubo de 2 con los números impares', () => {
    expect(nicomaco_cube(2)).toEqual({ sum: 8, oddNumbers: [3, 5] });
  });

  test('Debe devolver el cubo de 3 con los números impares', () => {
    expect(nicomaco_cube(3)).toEqual({ sum: 27, oddNumbers: [7, 9, 11] });
  });

  test('Debe lanzar un error para entradas no válidas', () => {
    expect(() => nicomaco_cube(-3)).toThrow('Ingrese un número entero positivo.');
    expect(() => nicomaco_cube(0)).toThrow('Ingrese un número entero positivo.');
    expect(() => nicomaco_cube(2.5)).toThrow('Ingrese un número entero positivo.');
  });
});