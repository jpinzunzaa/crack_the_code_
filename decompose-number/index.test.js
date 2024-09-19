const { decompose_number } = require('./index');

describe('Función de descomposición de número', () => {
  test('Debe descomponer correctamente un número de tres dígitos', () => {
    expect(decompose_number(789)).toBe('7 centenas, 8 decenas, 9 unidades');
  });

  test('Debe descomponer correctamente un número de un dígito', () => {
    expect(decompose_number(5)).toBe('5 unidades');
  });

  test('Debe descomponer correctamente un número de cuatro dígitos', () => {
    expect(decompose_number(1234)).toBe('1 1000enas, 2 centenas, 3 decenas, 4 unidades');
  });

  test('Debe lanzar un error si el número no es un entero positivo', () => {
    expect(() => decompose_number(-1)).toThrow("El número debe ser un entero positivo.");
    expect(() => decompose_number(0)).toThrow("El número debe ser un entero positivo.");
  });
});