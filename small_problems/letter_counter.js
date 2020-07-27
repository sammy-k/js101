// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

// - Words consist of any sequence of non-space characters.
// - takes a string
// - returns an object
// - object keys are word sizes, values are number of words that size
// - per test cases, punctuation is included in word size

function wordSizes(str) {
  let wordArray = str.split(' ');
  let wordObj = {};
  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let currentWord = wordArray[idx];
    wordObj[idx] = currentWord.length;
  }
  console.log(wordObj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}