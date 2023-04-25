
  const valueCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "A", "J"],
    typeCards = ["C", "D", "H", "S"];

    let deck = [];

  for (let i = 0; i < valueCards.length; i++) {
    for (let j = 0; j < typeCards.length; j++) {
      deck.push(valueCards[i] + typeCards[j]);
    }
  }

  deck = [...deck].sort(() => Math.random() - 0.5);

  export default deck;