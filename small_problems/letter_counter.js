// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.
// Words consist of any sequence of non-space characters.

// Understanding the Problem:
// Input: string, consisting of zero or more words
// Output: object (shows number of words of different sizes)

// Rules:
//  - all words in string are separated by a space
//  - words consist of any sequence of non-space characters
//  - if input is empty string, return empty object

// Data Structure / Algorithm
//  1. delcare an empty object variable
//  2. split the string into words
//  3. measure length of each word and assign lengths as Object keys
//  4. total number of words of each length & assign as values to respective key

// Code
function wordSizes(str) {
  let result = {};
  if (str.trim().length === 0) {
    return result;
  } else {
    let words = str.split(' ');
    for (let idx = 0; idx < words.length; idx += 1) {
      let currentWord = words[idx];
      if (result[currentWord.length] >= 1) {
        result[currentWord.length] += 1;
      } else {
        result[currentWord.length] = 1;
      }
    }
    return result;
  }
}


// Examples:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

