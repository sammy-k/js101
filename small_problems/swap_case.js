// Swap Case
// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// input: string
// return: string

// RULES
// non-alphabetic characters must reamin unchanged

function swapCase(str) {
  let result = '';
  str.split('').forEach((char) => {
    if (char.toLowerCase() === char) {
      result += char.toUpperCase();
    } else if (char.toUpperCase() === char) {
      result += char.toLowerCase();
    }
  });
  return result;
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"