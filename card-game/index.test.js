const { card_ame } = require('./index');

describe('Simulación de juego de cartas', () => {
  test('Debe retornar un mensaje que indique qué jugador ganó', () => {
    const result = card_ame();
    expect(result).toMatch(/Jugador [1-2] gana después de \d+ rondas\./);
  });

  test('Debe terminar el juego cuando un jugador gana 3 veces consecutivas', () => {
    const result = card_ame();
    expect(result).toContain('gana después de');
  });
});