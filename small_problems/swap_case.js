// Swap Case
// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// input: string
// return: string

// RULES
// non-alphabetic characters must reamin unchanged

function swapCase(str) {
  let swapStr = '';
  str.split('').forEach((char) => {
    if (char === char.toLowerCase()) {
      swapStr += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      swapStr += char.toLowerCase();
    }
  });
  return swapStr;
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"