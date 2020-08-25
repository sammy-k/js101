// Understanding the Problem:

// Data Structure:
//  1. Display the initial empty 3x3 board.
//  2. Ask the user to mark a square.
//  3. Computer marks a square.
//  4. Display the updated board state.
//  5. If it's a winning board, display the winner.
//  6. If the board is full, display tie.
//  7. If neither player won and the board is not full, go to #2
//  8. Play again?
//  9. If yes, go to #1
//  10. Goodbye!

// Code:
// constant declaration:
const readline = require('readline-sync');

// function declaration:
function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = ' ';
  }
  return board;
}

function playerChoosesSquare(board) {
  prompt('Choose a square (1-9):');
  let square = readline.question();
  board[square] = 'X';

}

let board = initializeBoard();
displayBoard(board);


playerChoosesSquare(board);
displayBoard(board);
