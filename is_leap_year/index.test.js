const { is_leap_year } = require('./index');

describe('Determinación de si un año es bisiesto', () => {
  test('Debe devolver true para años divisibles por 400', () => {
    expect(is_leap_year(2000)).toBe(true);
    expect(is_leap_year(1600)).toBe(true);
  });

  test('Debe devolver true para años divisibles por 4 pero no por 100', () => {
    expect(is_leap_year(2024)).toBe(true);
    expect(is_leap_year(1996)).toBe(true);
  });

  test('Debe devolver false para años divisibles por 100 pero no por 400', () => {
    expect(is_leap_year(1900)).toBe(false);
    expect(is_leap_year(1800)).toBe(false);
  });

  test('Debe devolver false para años no divisibles por 4', () => {
    expect(is_leap_year(2021)).toBe(false);
    expect(is_leap_year(2019)).toBe(false);
  });

  test('Debe lanzar un error si el año no es un número positivo', () => {
    expect(() => is_leap_year('2024')).toThrow("Ingrese un año válido como número positivo.");
    expect(() => is_leap_year(-2024)).toThrow("Ingrese un año válido como número positivo.");
  });
});