const READLINE = require('readline-sync');

// prompt for five numbers
console.log('Enter the first number');
let number1 = Number(READLINE.question());

console.log('Enter the second number');
let number2 = Number(READLINE.question());

console.log('Enter the third number');
let number3 = Number(READLINE.question());

console.log('Enter the fourth number');
let number4 = Number(READLINE.question());

console.log('Enter the fifth number');
let number5 = Number(READLINE.question());

// prompt for last number
console.log('Enter the last number');
let lastNumber = Number(READLINE.question());

// compare last number to other five numbers
switch (lastNumber) {
  case (lastNumber === number1) :
    console.log()
}