// Sum Of Digits
// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// INPUT: one positive integer
// OUTPUT: sum of each individual digit in integer
// - do not use loops

function sum(num) {
  let nums = num.toString().split('');
  nums = nums.map(Number);
  nums = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
  return nums;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45