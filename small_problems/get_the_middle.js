// Get The Middle Character
// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Understanding the Problem
// Input: string argument (never empty)
// output: middle one or two characters from the string argument
// Rules:
// - if the string length is odd, return the one middle character
// - if the string length is even, return the two middle characters

// Data Structure / Algorithm
// 1. measure the length of the string and determine if it is even or odd
// 2. retrieve and return the middle character(s)

function centerOf(str) {
  if (str.length % 2 === 0) {
    return str.slice((str.length / 2) - 1, (str.length / 2) + 1);
  } else {
    return str.slice(str.length / 2, (str.length / 2) + 1);
  }
}

// Examples:
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"