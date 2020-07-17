// SOLVED - UNDERSTOOD BUT CAN TAKE ANOTHER LOOKtouch
// Array Average
// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

// input: array (integers)
// output: iteger
// output is average of all integers in array
// output integer is rounded down
// input will never be empty
// input will always be positive integers

const average = (arr) => Math.floor(arr.reduce((accumulator, num) => (accumulator + num)) / arr.length);

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40