// PEDAC

// Understanding the Problem
// Rules:
//  - Deck: 52-card deck consisting of 4 suits (Hearts, Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).
//  - Goal: get as close to 21 without going over, if you go over you 'bust' and lose
//  - Setup: two players: player(user) and dealer(computer)

// constant and variable declaration:
const readline = require('readline-sync');
const deck = [
  ['2', 'Hearts'], ['2', 'Spades'], ['2', 'Clubs'], ['2', 'Diamonds'],
  ['3', 'Hearts'], ['3', 'Spades'], ['3', 'Clubs'], ['3', 'Diamonds'],         ['4', 'Hearts'], ['4', 'Spades'], ['4', 'Clubs'], ['4', 'Diamonds'],
  ['5', 'Hearts'], ['5', 'Spades'], ['5', 'Clubs'], ['5', 'Diamonds'],
  ['6', 'Hearts'], ['6', 'Spades'], ['6', 'Clubs'], ['6', 'Diamonds'],
  ['7', 'Hearts'], ['7', 'Spades'], ['7', 'Clubs'], ['7', 'Diamonds'],
  ['8', 'Hearts'], ['8', 'Spades'], ['8', 'Clubs'], ['8', 'Diamonds'],
  ['9', 'Hearts'], ['9', 'Spades'], ['9', 'Clubs'], ['9', 'Diamonds'],
  ['10', 'Hearts'], ['10', 'Spades'], ['10', 'Clubs'], ['10', 'Diamonds'],
  ['J', 'Hearts'], ['J', 'Spades'], ['J', 'Clubs'], ['J', 'Diamonds'],
  ['Q', 'Hearts'], ['Q', 'Spades'], ['Q', 'Clubs'], ['Q', 'Diamonds'],
  ['K', 'Hearts'], ['K', 'Spades'], ['K', 'Clubs'], ['K', 'Diamonds'],
  ['A', 'Hearts'], ['A', 'Spades'], ['A', 'Clubs'], ['A', 'Diamonds'],
];
const playerCards = [];
const dealerCards = [];

// helper functions:

// wrapper for messages
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
function deal(deck) {
  let card = deck.pop();
  return card;
}

// calculating card total
function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  // card[0] represents value of each card, as suit is assigned to card[1]
  let values = cards.map(card => card[0]);

  // delcare variable to total sum of cards
  let sum = 0;

  // determine each card value for assignment to sum
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // additional value computation for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

// determine if player busted
function busted(cards) {
  return (cards > 21);
}


// 1. Initialize deck
prompt('Welome to 21!');
// standard deck is shuffled
shuffle(deck);

// 2. Deal cards to player and dealer
//  - initial deal (player)
playerCards.push(deal(deck));
let playerCardOne = `${playerCards[0][0]} of ${playerCards[0][1]}`;
playerCards.push(deal(deck));
let playerCardTwo = `${playerCards[1][0]} of ${playerCards[1][1]}`;

//  - initial deal (dealer)
dealerCards.push(deal(deck));
let dealerCardOne = `${dealerCards[0][0]} of ${dealerCards[0][1]}`;
dealerCards.push(deal(deck));

//  - calculation of player and dealer totals
let playerTotal = total(playerCards);
let dealerTotal = total(dealerCards);

//  - statement of inital hands for both player and dealer
prompt(`Dealer's hand: ${dealerCardOne} and unknown card`);
prompt(`Your hand: ${playerCardOne} and ${playerCardTwo}`);

// 3. Player turn: hit or stay
//    a. Ask player to hit or stay.

while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted(playerTotal)) break;
  else if (answer === 'hit') {
    playerCards.push(deal(deck));
  }
}
if (busted()) {
  console.log('You busted! Do you want to play again? (y or n)');
} else {
  console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
}
//    b. If stay, stop asking.
//    c. Otherwise, go to a.



// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.