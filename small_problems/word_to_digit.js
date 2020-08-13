// Word to Digit
// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

let alphaNums = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

let keys = Object.keys(alphaNums);

function wordToDigit(str) {
  let result = [];
  str.split(' ').forEach((word) => {
    if (keys.includes(word)) {
      result.push(alphaNums[word]);
    } else {
      result.push(word);
    }
  });
  return result.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."