// COMPLETE - NO FURTHER REVIEW
// List of Digits
// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// input: positive integer
// output: array of numbers

function digitList(num) {
  let numString = num.toString().split('');
  let numbers = [];
  numString.forEach(number => numbers.push(Number(number)));
  return numbers;
}

// FURTHER EXPLORATION

function digitList(num) {
  let numString = num.toString().split('');
  return numString.map(number => (Number(number)));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]