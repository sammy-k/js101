// Delete Vowels
// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

// Understand the Problem
// input: array of strings
// output: array with all vowels removed

function removeVowels(arr) {
  let noVowels = [];
  let vowels = 'AEIOUaeiou';
  arr.forEach((subArr) => {
    subArr.forEach((char) => {
      if(vowels.includes(char))
    })
  })
}

// Examples:
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]