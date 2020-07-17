// Reverse It (Part 2)
// Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

// Input: string containing one or more words, each separated by a single space
// Output: new string containing all words from input string
//  -all words with five or more letters will be reversed

function reverseWords(str) {
  let newStr = [];
  let wordsArray = str.split(' ');
  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let currentWord = wordsArray[idx];
    if (currentWord.length >= 5) {
      newStr.push(currentWord.split('').reverse().join(''));
    } else {
      newStr.push(currentWord);
    }
  }
  return newStr.join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"