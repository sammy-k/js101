// COMPLETED
// Capitalize Words
// Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.
// You may assume that a word is any sequence of non-whitespace characters.

function wordCap(str) {
  let words = str.split(' ');
  let capsArray = [];
  for (let idx = 0; idx < words.length; idx += 1) {
    let currentWord = words[idx];
    capsArray.push(currentWord.slice(0, 1).toUpperCase() + currentWord.slice(1).toLowerCase());
  }
  return capsArray.join(' ');
}


console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'