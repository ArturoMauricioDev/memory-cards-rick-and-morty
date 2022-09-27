const TOTAL_CHARACTERS = 826;
const NUMBER_CARDS = 10;

export default () => {
  let cards = [];

  while (cards.length < NUMBER_CARDS) {
    let min = 1;
    let max = TOTAL_CHARACTERS + 1;

    const index = Math.floor(Math.random() * (max - min) + min);

    if (!cards.includes(index)) {
      cards.push(index);
    }
  }

  return cards;
};
