// Delete Vowels
// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

function removeVowels(arr) {
  let vowels = 'AEIOUaeiou';
  let noVowels = [];
  
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]