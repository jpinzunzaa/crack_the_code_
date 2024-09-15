const { temperature_converter } = require('./index');

describe('Conversión de temperatura', () => {
  test('Debe convertir correctamente una temperatura positiva de celsius a fahrenheit y kelvin', () => {
    const result = temperature_converter(25);
    expect(result).toEqual({
      fahrenheit: 77,
      kelvin: 298.15
    });
  });

  test('Debe retornar null si la temperatura es negativa', () => {
    const result = temperature_converter(-5);
    expect(result).toBeNull();
  });
});