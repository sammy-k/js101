// Palindromic Strings (Part 2)
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// helper function to determine if character is alphanumeric
function isAlphaNumberic(char) {
  return (((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) ||
          (char >= '0' && char <= 9));
}

function isRealPalindrome(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];
    if (isAlphaNumberic(currentChar)) {
      result += currentChar;
    } else {
      continue;
    }
  }
  return result.toLowerCase() === result.toLowerCase().split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false