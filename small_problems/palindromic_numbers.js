// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

// input: integer
// output: Boolean

const isPalindromicNumber = (num) => {
  let result = (num.toString().split(''));
  let reverseResult = result.reverse();
  return (result !== reverseResult);
};


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true