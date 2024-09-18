const { multiplication_division_tables } = require('./index');

describe('Tabla de multiplicar y división', () => {
  test('Debe generar correctamente la tabla de multiplicar y la tabla de división para n=3 y k=5', () => {
    const result = multiplication_division_tables(3, 5);

    expect(result.multiplication_table).toEqual([
      '3 * 1 = 3',
      '3 * 2 = 6',
      '3 * 3 = 9',
      '3 * 4 = 12',
      '3 * 5 = 15'
    ]);

    expect(result.division_table).toEqual([
      '3 / 3 = 1',
      '6 / 3 = 2',
      '9 / 3 = 3',
      '12 / 3 = 4',
      '15 / 3 = 5'
    ]);
  });

  test('Debe lanzar un error si n o k no son enteros positivos', () => {
    expect(() => multiplication_division_tables(-3, 5)).toThrow('Los valores de n y k deben ser enteros positivos');
    expect(() => multiplication_division_tables(3, 0)).toThrow('Los valores de n y k deben ser enteros positivos');
  });
});