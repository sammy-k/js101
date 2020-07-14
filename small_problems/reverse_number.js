// Reverse Number
// Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

function reverseNumber(num) {
  let newNum = '';
  num = num.toString().split('');
  for (let idx = (num.length - 1); idx >= 0; idx -= 1) {
    newNum += num[idx];
  }
  return Number(newNum);
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1