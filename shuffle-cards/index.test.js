const { shuffle_array } = require('./index');

describe('Función para barajear cartas', () => {
  test('Debe cambiar el orden del array', () => {
    const deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const originalDeck = [...deck];
    const shuffledDeck = shuffle_array(deck);

    // El array no debe ser el mismo (probabilístico)
    expect(shuffledDeck).not.toEqual(originalDeck);

    // Los mismos elementos deben estar presentes
    expect(shuffledDeck.sort()).toEqual(originalDeck.sort());
  });

  test('Debe barajar correctamente un array vacío', () => {
    const deck = [];
    expect(shuffle_array(deck)).toEqual([]);
  });

  test('Debe barajar correctamente un array con un solo elemento', () => {
    const deck = ['A'];
    expect(shuffle_array(deck)).toEqual(['A']);
  });
});