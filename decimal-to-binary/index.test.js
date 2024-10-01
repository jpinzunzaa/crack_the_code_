const { decimal_to_binary } = require('./index');

describe('Conversión de base 10 a base 2', () => {
  test('Debe convertir correctamente números enteros positivos a base 2', () => {
    expect(decimal_to_binary(10)).toEqual([1, 0, 1, 0]);
    expect(decimal_to_binary(7)).toEqual([1, 1, 1]);
    expect(decimal_to_binary(0)).toEqual([0]);
  });

  test('Debe lanzar un error para números no válidos', () => {
    expect(() => decimal_to_binary(-5)).toThrow('Ingrese un número entero no negativo.');
    expect(() => decimal_to_binary(2.5)).toThrow('Ingrese un número entero no negativo.');
    expect(() => decimal_to_binary('10')).toThrow('Ingrese un número entero no negativo.');
  });
});