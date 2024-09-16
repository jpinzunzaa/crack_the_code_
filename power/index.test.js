const { power } = require('./index');

describe('Cálculo de la potencia', () => {
  test('Debe calcular correctamente 2^3', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('Debe calcular correctamente 5^4', () => {
    expect(power(5, 4)).toBe(625);
  });

  test('Debe lanzar un error si n es menor o igual a 1', () => {
    expect(() => power(3, 1)).toThrow('El valor de n debe ser mayor que 1');
  });
});