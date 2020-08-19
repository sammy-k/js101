// Clean up the words

// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).


// Understand the Problem
// input: string
// output: string with all non-alphabetic characters replaced by spaces
// Rules:
// - if one or more non-alpha characters occur in a row, only one space should appear in result


// Algorithm
// 1. create an empty string variable to store and return our result
// 2. split the passed in string into an array so that we can loop through and evaluate each character
// 3. evaluate each character and replace each non alpha character with a space
// 4. evaluate the result for consecutive spaces - if consecutive spaces occur, reduce to just one space
// 5. return the result

function cleanUp(str) {
  let charArray = [];
  str.split('').forEach((char) => {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      charArray.push(char);
    } else {
      charArray.push(' ');
    }
  });
  let result = '';
  for (let idx = 0; idx < charArray.length; idx += 1) {
    let currentChar = charArray[idx];
    if (currentChar === ' ' && charArray[idx -1] === ' ') {
      continue;
    } else {
      result += currentChar;
    }
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "