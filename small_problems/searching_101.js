const READLINE = require('readline-sync');

let numArray = [];
// prompt for five numbers
console.log('Enter the first number');
let number1 = Number(READLINE.question());
numArray.push(number1);

console.log('Enter the second number');
let number2 = Number(READLINE.question());
numArray.push(number2);

console.log('Enter the third number');
let number3 = Number(READLINE.question());
numArray.push(number3);

console.log('Enter the fourth number');
let number4 = Number(READLINE.question());
numArray.push(number4);

console.log('Enter the fifth number');
let number5 = Number(READLINE.question());
numArray.push(number5);

// prompt for last number
console.log('Enter the last number');
let lastNumber = Number(READLINE.question());

// compare last number to other five numbers
if (numArray.indexOf(lastNumber) !== -1) {
  console.log( `The number ${lastNumber} appears in ${numArray.join()}.`);
} else {
  console.log( `The number ${lastNumber} does not appear in ${numArray.join()}.`);
}