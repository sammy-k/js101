// Letter Swap
// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// input: string
// output: string
// swap first and last letter for each word in string

function swap(str) {
  let wordArray = str.split(' ');
  let swapArray = [];
  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let currentWord = wordArray[idx].split('');
    if (currentWord.length >= 2) {
      let firstChar = currentWord.shift();
      let lastChar = currentWord.pop();
      currentWord = lastChar + currentWord.join('') + firstChar;
      swapArray.push(currentWord);
    } else {
      swapArray.push(currentWord);
    }
  }
  return swapArray.join(' ');
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"