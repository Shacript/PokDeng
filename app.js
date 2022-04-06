const prompt = require("prompt-sync")();
const { deck } = require("./utils.js");

let totalBet = 0;

while (true) {
  const currentBet = Number(prompt("Please put your bet : "));

  const cards = deck.generateDeckAndShuffle();

  const playerHand = deck.drawCard(cards, 2);
  const playerScore = deck.calculateTotalScore(playerHand);
  console.log(`You got ${playerHand.join(", ")}`);

  const dealerHand = deck.drawCard(cards, 2);
  const dealerScore = deck.calculateTotalScore(dealerHand);
  console.log(`The dealer got ${dealerHand.join(", ")}`);

  if (playerScore > dealerScore) {
    totalBet += currentBet;
    console.log(`You won!!!, received ${currentBet} chips`);
  } else if (playerScore === dealerScore) {
    console.log("You tie, received nothing");
  } else {
    console.log("You lose, you lost your bet :(");
  }

  const command = prompt(
    "Wanna play more (Yes/No)? [Default:Yes]: "
  ).toLocaleLowerCase();
  switch (command) {
    case "yes":
      break;
    case "no":
      console.log(`You got total ${totalBet} chips`);
      process.exit(1);
  }
}
