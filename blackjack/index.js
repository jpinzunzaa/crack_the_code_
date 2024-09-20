exports.calculate_hand_value = (card1, card2, card3) => {
  const card_values = {
    2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
    J: 10, Q: 10, K: 10, A: 11
  }

  const cards = [card1, card2, card3];
  let total_value = 0;
  let aces_count = 0;

  cards.forEach(card => {
    const card_value = card_values[card];
    total_value += card_value;
    if (card === 'A') {
      aces_count++;
    }
  });

  while (total_value > 21 && aces_count > 0) {
    total_value -= 10;
    aces_count--;
  }

  return total_value;
}

exports.display_hand_value = (card1, card2, card3) => {
  const total_value = calculate_hand_value(card1, card2, card3);
  console.log(`Las cartas ${card1}, ${card2}, y ${card3} tienen un valor total de ${total_value}`);
  return total_value;
}