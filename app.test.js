const { deck } = require("./utils.js");

test("Generate Card and Shuffle", () => {
  expect(deck.generateDeckAndShuffle().length).toBe(52);
});

test("King, Queen, Jack, and 10 must be 0 point", () => {
  const scoreZero = ["King", "Queen", "Jack", "10"];
  for (let rank of scoreZero) {
    expect(deck.getScoreCard(`Hearts-${rank}`)).toBe(0);
  }
});

test("Ace must be 1 point", () => {
  expect(deck.getScoreCard("Hearts-Ace")).toBe(1);
});

test("Draw 2 cards", () => {
  const cards = deck.generateDeckAndShuffle();
  const hands = deck.drawCard(cards, 2);
  expect(hands.length).toBe(2);
});
