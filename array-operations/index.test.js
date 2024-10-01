const { array_operations } = require('./index');

describe('Operaciones con dos arrays ordenados', () => {
  test('Debe realizar correctamente todas las operaciones entre los arrays A y B', () => {
    const A = [1, 2, 3, 5, 7, 9];
    const B = [2, 4, 6, 7, 10];
    
    const result = array_operations(A, B);
    expect(result.common_count).toBe(2);
    expect(result.different_count).toBe(3);
    expect(result.C).toEqual([1, 3, 5, 9]);
    expect(result.D).toEqual([4, 6, 10]);
  });

  test('Debe manejar arrays sin elementos en común', () => {
    const A = [1, 3, 5];
    const B = [2, 4, 6];
    
    const result = array_operations(A, B);
    expect(result.common_count).toBe(0);
    expect(result.different_count).toBe(3);
    expect(result.C).toEqual([1, 3, 5]);
    expect(result.D).toEqual([2, 4, 6]);
  });

  test('Debe manejar arrays completamente iguales', () => {
    const A = [1, 2, 3];
    const B = [1, 2, 3];
    
    const result = array_operations(A, B);
    expect(result.common_count).toBe(3);
    expect(result.different_count).toBe(0);
    expect(result.C).toEqual([]);
    expect(result.D).toEqual([]);
  });
});