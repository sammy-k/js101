// Alphabetical Numbers
// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:
// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Understand the Problem
// input: array of integers
// output: array of integers, sorted based on the English word for each number

// Data Structure / Algorithm
// 1. create an object for numbers 0 - 19
//    - object contains numbers as keys and language equivalents as values
// 2. evaluate each item in array argument and find its lang equivalent using object
// 3. sort new array based (alphabetical) based on obj values
// 4. return new array (keys) based on order established in step above

let numWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};



function alphabeticNumberSort(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentNum = arr[idx];
    console.log(numWords[currentNum]);
  }
}

// Examples
console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]