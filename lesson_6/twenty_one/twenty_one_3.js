// constant and variable declaration
let readline = require('readline-sync');

// card deck - each card is an array containing a value and a type
const DECK = [
  ['2', 'Hearts'], ['2', 'Spades'], ['2', 'Clubs'], ['2', 'Diamonds'],
  ['3', 'Hearts'], ['3', 'Spades'], ['3', 'Clubs'], ['3', 'Diamonds'],
  ['4', 'Hearts'], ['4', 'Spades'], ['4', 'Clubs'], ['4', 'Diamonds'],
  ['5', 'Hearts'], ['5', 'Spades'], ['5', 'Clubs'], ['5', 'Diamonds'],
  ['6', 'Hearts'], ['6', 'Spades'], ['6', 'Clubs'], ['6', 'Diamonds'],
  ['7', 'Hearts'], ['7', 'Spades'], ['7', 'Clubs'], ['7', 'Diamonds'],
  ['8', 'Hearts'], ['8', 'Spades'], ['8', 'Clubs'], ['8', 'Diamonds'],
  ['9', 'Hearts'], ['9', 'Spades'], ['9', 'Clubs'], ['9', 'Diamonds'],
  ['10', 'Hearts'], ['10', 'Spades'], ['10', 'Clubs'], ['10', 'Diamonds'],
  ['Jack', 'Hearts'], ['Jack', 'Spades'], ['Jack', 'Clubs'],
  ['Jack', 'Diamonds'],
  ['Queen', 'Hearts'], ['Queen', 'Spades'], ['Queen', 'Clubs'],
  ['Queen', 'Diamonds'],
  ['King', 'Hearts'], ['King', 'Spades'], ['King', 'Clubs'],
  ['King', 'Diamonds'],
  ['Ace', 'Hearts'], ['Ace', 'Spades'], ['Ace', 'Clubs'], ['Ace', 'Diamonds']
];

// arrays to store player and dealer hands
const PLAYERCARDS = [];
const DEALERCARDS = [];

// Helper Functions
function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle deck (Fisher-Yates shuffle)
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

// deal card
function deal(DECK) {
  let card = DECK.pop();
  return card;
}

// initial deal
function initialDeal() {
  //  - initial deal (player)
  PLAYERCARDS.push(deal(DECK));
  let playerCardOne = `${PLAYERCARDS[0][0]} of ${PLAYERCARDS[0][1]}`;
  PLAYERCARDS.push(deal(DECK));
  let playerCardTwo = `${PLAYERCARDS[1][0]} of ${PLAYERCARDS[1][1]}`;

  //  - initial deal (dealer)
  DEALERCARDS.push(deal(DECK));
  let dealerCardOne = `${DEALERCARDS[0][0]} of ${DEALERCARDS[0][1]}`;
  DEALERCARDS.push(deal(DECK));

  //  - statement of inital hands for both player and dealer
  prompt(`Dealer's hand: ${dealerCardOne} and unknown card`);
  prompt(`Your hand: ${playerCardOne} and ${playerCardTwo}`);
}

// calculating card total
function total(cards) {
  // card[0] represents value of each card, as suit is assigned to card[1]
  let values = cards.map(card => card[0]);

  // delcare variable to total sum of cards
  let sum = 0;

  // determine each card value for assignment to sum
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (value === 'Jack' || value === 'Queen' || value === 'King') {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // additional value computation for Aces
  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > 21) {
      sum -= 10;
    }
  });

  return sum;
}

function winner() {
  if (total(PLAYERCARDS) > total(DEALERCARDS)) {
    prompt('You win!');
  } else if (total(PLAYERCARDS) < total(DEALERCARDS)) {
    prompt('You lose!');
  } else {
    prompt('Tie game');
  }
}

// Game Implementation
// 1. INITIALIZE DECK
prompt('Welome to 21!');

// standard deck is shuffled
shuffle(DECK);

// 2. DEAL CARDS TO PLAYER AND DEALER
initialDeal();

// 3. PLAYER TURN: HIT OR STAY

// ask player to hit or stay.
prompt('Would you like to hit or stay?');e
let answer = readline.question().toLowerCase();

// validate answer
if (answer.trim() !== 'hit' && answer.trim() !== 'stay') {
  prompt("That is not a valid answer, please enter 'hit' or 'stay'");
  answer = readline.question().toLowerCase();
}

// prompt for player choosing to stay
if (answer === 'stay') {
  prompt(`Your total is ${total(PLAYERCARDS)}`);
}

if (answer === 'hit') {
  PLAYERCARDS.push(deal(DECK));
  prompt(`${PLAYERCARDS[PLAYERCARDS.length - 1][0]} of ${PLAYERCARDS[PLAYERCARDS.length - 1][1]}`);
  prompt(`Your total is ${total(PLAYERCARDS)}`);
  if (total(PLAYERCARDS) < 21) {

  }
}

// 4. IF PLAYER BUSTS, DEALER WINS
if (total(PLAYERCARDS) > 21) {
  prompt('Busted! You lose.');
}

// 5. DEALER TURN: HIT OR STAY
//    - repeat until total >= 17
while (total(DEALERCARDS) <= 17) {
  DEALERCARDS.push(deal(DECK));
}
if (total(DEALERCARDS) > 17 && total(DEALERCARDS) < 21) {
  prompt(`Dealer total is ${total(DEALERCARDS)}`);
} else if (total(DEALERCARDS) === 21) {
  prompt('21!');
} else {
// 6. If dealer busts, player wins.
  prompt('Dealer busted!');
}

// 7. Compare cards and declare winner.
winner();