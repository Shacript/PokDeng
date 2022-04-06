const deck = {
  generateDeckAndShuffle() {
    let resultDeck = [];
    const suit = ["Diamonds", "Clubs", "Hearts", "Spades"];
    const rank = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    // insert card to deck
    for (const s of suit) {
      // s mean suit value
      for (const r of rank) {
        // r mean rank value
        resultDeck.push(`${s}-${r}`);
      }
    }

    //shuffle deck
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = resultDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [resultDeck[i], resultDeck[j]] = [resultDeck[j], resultDeck[i]];
    }

    return resultDeck;
  },
  drawCard(array, num = 2) {
    let hand = [];
    for (let i = 0; i < num; i++) {
      hand.push(array.pop());
    }
    return hand;
  },
  getScoreCard(card) {
    let cardSplit = card.split("-");
    let [suit, rank] = cardSplit;
    const scoreZero = ["King", "Queen", "Jack", "10"];
    if (scoreZero.includes(rank)) return 0;
    if (rank === "Ace") return 1;
    return Number(rank);
  },
  calculateTotalScore(array_card) {
    let totalScore = 0;
    for (let card of array_card) {
      totalScore += this.getScoreCard(card);
    }
    return totalScore;
  },
};

module.exports = { deck };
