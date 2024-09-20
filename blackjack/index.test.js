const { calculate_hand_value } = require('./index');

describe('Cálculo del valor total de la mano en Blackjack', () => {
  test('Debe calcular correctamente el valor de una mano sin Ases', () => {
    expect(calculate_hand_value(10, 'J', 5)).toBe(25);
  });

  test('Debe calcular correctamente el valor de una mano con un As sin exceder 21', () => {
    expect(calculate_hand_value(10, 'A', 9)).toBe(20);
  });

  test('Debe calcular correctamente el valor de una mano con un As excediendo 21', () => {
    expect(calculate_hand_value('A', 9, 5)).toBe(15);
  });

  test('Debe calcular correctamente el valor de una mano con dos Ases', () => {
    expect(calculate_hand_value('A', 'A', 9)).toBe(21);
  });

  test('Debe calcular correctamente el valor de una mano con todas las figuras', () => {
    expect(calculate_hand_value('K', 'Q', 'J')).toBe(30);
  });
});