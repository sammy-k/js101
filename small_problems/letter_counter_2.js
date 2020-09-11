// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Code:
function wordSizes(str) {
  let result = {};
  let words = str.split(' ');
  for (let idx = 0; idx < words.length; idx += 1) {
    let currentWord = str[idx];
    for (let j = 0; j < currentWord.length; j += 1) {
      let currentChar = currentWord[j];
      if (!(currentChar >= 'a' && currentChar <= 'z')) {
        currentChar = '';
      }
    }
  }
  console.log(words);
}

// Examples:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}