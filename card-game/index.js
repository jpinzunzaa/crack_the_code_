exports.card_ame = () => {
  const get_random_card = () => Math.floor(Math.random() * 13) + 1;

  let player_1_consecutive_wins = 0;
  let player_2_consecutive_wins = 0;
  let rounds = 0;

  while (player_1_consecutive_wins < 3 && player_2_consecutive_wins < 3) {
    const player_1_Card = get_random_card();
    const player_2_card = get_random_card();
    rounds++;

    if (player_1_Card > player_2_card) {
      player_1_consecutive_wins++;
      player_2_consecutive_wins = 0;
    } else if (player_2_card > player_1_Card) {
      player_2_consecutive_wins++;
      player_1_consecutive_wins = 0;
    } else {
      player_1_consecutive_wins = 0;
      player_2_consecutive_wins = 0;
    }
  }

  return player_1_consecutive_wins === 3
    ? `Jugador 1 gana después de ${rounds} rondas.`
    : `Jugador 2 gana después de ${rounds} rondas.`;
}