// Double Char (Part 2)
// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

let consonants = 'bcdfghjklmnpqrstvwxyz';
function doubleConsonants(str) {
  let result = '';
  str.split('').forEach((letter) => {
    if (consonants.includes(letter.toLowerCase())) {
      result += letter;
      result += letter;
    } else {
      result += letter;
    }
  });
  return result;
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""