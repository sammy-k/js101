// COMPLETED - NO FURTHER REVIEW

// Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

function stringy(num) {
  let newString = '';
  let idx = 1;
  for (idx; idx <= num; idx += 1) {
    if (idx % 2 !== 0) {
      newString += '1';
    } else {
      newString += '0';
    }
  }
  return newString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101");


