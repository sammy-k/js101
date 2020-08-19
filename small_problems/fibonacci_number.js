// Fibonacci Number Location By Length
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// Understand the Problem:
// Input: number representing number of digits
// Output: number representing an index
// Rules:
// - the first number in the sequence will always be 1
// - assume that the argument is always greater than or equal to 2

// Examples / Test Cases
// provided below

// Data Structure / Algorithm
// 1. create a data structure (array) to log Fibonnaci numbers
// 2. convert array elements to strings so length can be measured
// 3. loop through array and return index of first number that has the number of digits specificed by the passed in argument


// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion

function fibonaccis(num) {
  let numString = num.toString();
  let fArray = [1, 1];
  for (let idx = 2; idx < 20; idx += 1) {
    let currentNum = fArray[idx - 1] + fArray[idx - 2];
    console.log(currentNum, idx);
    fArray.push(currentNum);
  }
  return fArray;
}

console.log(fibonaccis(2));