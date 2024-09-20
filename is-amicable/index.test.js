const { is_amicable } = require('./index');

describe('Verificación de si dos números son amigos', () => {
  test('Debe devolver true para números amigos', () => {
    expect(is_amicable(220, 284)).toBe(true);
    expect(is_amicable(1184, 1210)).toBe(true);
  });

  test('Debe devolver false para números no amigos', () => {
    expect(is_amicable(220, 100)).toBe(false);
    expect(is_amicable(284, 300)).toBe(false);
  });

  test('Debe lanzar un error para entradas inválidas', () => {
    expect(() => is_amicable(-220, 284)).toThrow('Ambos números deben ser enteros positivos.');
    expect(() => is_amicable(220, '284')).toThrow('Ambos números deben ser enteros positivos.');
    expect(() => is_amicable(220.5, 284)).toThrow('Ambos números deben ser enteros positivos.');
  });
});