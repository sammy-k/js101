// COMPLETED

const readlineSync = require('readline-sync');

// let num = readlineSync.question('Please enter an interger greater than 0:\n');
// let sumOrProduct = readlineSync.question(`Enter 's' to compute the sum, or 'p' to compute the product.\n`).toLowerCase();
// let sumTotal = 0;
// let productTotal = 1;

// for (let i = 1; i <= num; i++) {
//   if (sumOrProduct === 's') {
//     sumTotal += i;
//   } else if (sumOrProduct === 'p') {
//     productTotal *= i;
//   }
// }

// if (sumOrProduct === 's') {
//   console.log(`The sum of the integers between 1 and ${num} is ${sumTotal}.`);
// } else if (sumOrProduct === 'p') {
//   console.log(`The product of the integers between 1 and ${num} is ${productTotal}.`);
// }

// FURTHER EXPLORATION
// What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the Array.prototype.reduce() method?

let nums = readlineSync.question('Please enter an array of positive integers separated by commas:\n');

nums = nums.split(' ');
let lastNum = Number(nums[nums.length - 1]);
nums = nums.map(num => Number(num.slice(0, -1)));
nums.pop();
nums.push(lastNum);

let sumOrProduct = readlineSync.question(`Enter 's' to compute the sum, or 'p' to compute the product.\n`).toLowerCase();

if (sumOrProduct === 's') {
  let sumTotal = nums.reduce((accumulator, num) => num + num);
  console.log(`The sum of the integers is ${sumTotal}.`);
} else if (sumOrProduct === 'p') {
  let productTotal = nums.reduce((accumulator, num) => num * num);
  console.log(`The product of the integers is ${productTotal}.`);
}
