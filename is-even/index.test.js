const { is_even } = require('./index');

describe('Verificación de número par', () => {
  test('Debe retornar true para un número par', () => {
    expect(is_even(4)).toBe(true);
  });

  test('Debe retornar false para un número impar', () => {
    expect(is_even(3)).toBe(false);
  });
});