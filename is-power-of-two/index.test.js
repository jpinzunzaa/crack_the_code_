const { is_power_of_two } = require('./index');

describe('Función para verificar si un número es potencia de dos', () => {
  test('Debe devolver true para potencias de dos', () => {
    expect(is_power_of_two(2)).toBe(true);
    expect(is_power_of_two(4)).toBe(true);
    expect(is_power_of_two(16)).toBe(true);
    expect(is_power_of_two(64)).toBe(true);
  });

  test('Debe devolver false para números que no son potencias de dos', () => {
    expect(is_power_of_two(3)).toBe(false);
    expect(is_power_of_two(5)).toBe(false);
    expect(is_power_of_two(18)).toBe(false);
    expect(is_power_of_two(100)).toBe(false);
  });

  test('Debe devolver false para números negativos o cero', () => {
    expect(is_power_of_two(0)).toBe(false);
    expect(is_power_of_two(-2)).toBe(false);
    expect(is_power_of_two(-16)).toBe(false);
  });
});