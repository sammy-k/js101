// Sum of Sums
// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// Understanding the Problem:
// input: number array
// output: number (sum of the sums of each leading subsequence for input array)
// Rules:
//  - array will always contain at least one number

// Data Structure / Algorithm:
//  1. declare empty result variable
//  2. loop through array and identify each leading substring
//  3. sum each leading substring
//  4. return sum of sums of each substring

// Code:
function sumOfSums(arr) {
  let result = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentNum = arr[idx];
    for (let j)
  }
}

// Examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35