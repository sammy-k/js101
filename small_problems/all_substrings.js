// All Substrings
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.
// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

// Understanding the problem
// input: string
// output: array of all substrings of the string argument
// rules:
//  - order returned list by where substring begins in string argument
//    - substrings that start at [0] come first, then those that start at [1], etc.
//  - order substrings at each position from shortest to longest

// Data Structure / Algorithm
//  1. create an empty result array to store substrings
//  2. 

// Code
function substrings(str) {
  let result = [];
  
}


// Example:
// substrings('abcde');
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]