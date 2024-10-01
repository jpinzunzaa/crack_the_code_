const { count_patterns } = require('./index');

describe('Cuenta de ocurrencias de un patrón en un array base', () => {
  test('Debe contar correctamente cuántas veces aparece el patrón en el array base', () => {
    const V = [1, 2, 3, 1, 2, 3, 1, 2];
    const P = [1, 2];
    expect(count_patterns(V, P)).toBe(3);
  });

  test('Debe manejar patrones que no aparecen en el array base', () => {
    const V = [1, 2, 3, 4, 5];
    const P = [6, 7];
    expect(count_patterns(V, P)).toBe(0);
  });

  test('Debe manejar un patrón que es igual al array base', () => {
    const V = [1, 2, 3];
    const P = [1, 2, 3];
    expect(count_patterns(V, P)).toBe(1);
  });

  test('Debe lanzar un error si los argumentos no son arrays', () => {
    expect(() => count_patterns('no array', [1, 2])).toThrow('Ambos argumentos deben ser arrays.');
  });
});