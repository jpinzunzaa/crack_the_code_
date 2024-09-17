const { find_min_max } = require('./index');

describe('Encuentra el número mayor y el número menor', () => {
  test('Debe encontrar correctamente el número mayor y menor en un conjunto de números', () => {
    const result = find_min_max([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]);
    expect(result.min).toBe(1);
    expect(result.max).toBe(9);
  });

  test('Debe funcionar con un conjunto de un solo número', () => {
    const result = find_min_max([42]);
    expect(result.min).toBe(42);
    expect(result.max).toBe(42);
  });

  test('Debe lanzar un error si el conjunto está vacío', () => {
    expect(() => find_min_max([])).toThrow('El conjunto debe contener al menos un número');
  });

  test('Debe lanzar un error si no se pasa un arreglo', () => {
    expect(() => find_min_max('not an array')).toThrow('El conjunto debe contener al menos un número');
  });
});