const { convert_time } = require('./index');

describe('Conversión de formato 24 horas a 12 horas', () => {
  test('Debe convertir correctamente la hora 13:45 a 1:45 PM', () => {
    expect(convert_time(13, 45)).toBe('1:45 PM');
  });

  test('Debe convertir correctamente la hora 00:15 a 12:15 AM', () => {
    expect(convert_time(0, 15)).toBe('12:15 AM');
  });

  test('Debe lanzar un error si la hora es inválida', () => {
    expect(() => convert_time(25, 15)).toThrow('Hora o minutos inválidos.');
  });

  test('Debe lanzar un error si los minutos son inválidos', () => {
    expect(() => convert_time(10, 65)).toThrow('Hora o minutos inválidos.');
  });
});