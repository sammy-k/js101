// Delete Vowels
// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

function removeVowels(arr) {
  let newArray = [];
  let vowels = 'AEIOUaeiou';
}
 

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]