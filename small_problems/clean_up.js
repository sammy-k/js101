// Clean up the words

// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// input: string
// output: string 

function cleanUp(str) {
  let regex = /[a-z]/;
  let cleanString = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (regex.includes(str[idx])) {
      cleanString += str[idx];
    }
  }
  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "