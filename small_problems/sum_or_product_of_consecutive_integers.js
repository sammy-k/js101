const readlineSync = require('readline-sync');

let num = readlineSync.question('Please enter an interger greater than 0:\n');
let sumOrProduct = readlineSync.question(`Enter 's' to compute the sum, or 'p' to compute the product.\n`);
let sumTotal = 0;
let productTotal = 1;

for (let i = 1; i <= num; i++) {
  if (sumOrProduct === 's') {
    sumTotal += i;
  } else if (sumOrProduct === 'p') {
    productTotal *= i;
  }
}

if (sumOrProduct === 's') {
  console.log(`The sum of the integers between 1 and ${num} is ${sumTotal}.`);
} else if (sumOrProduct === 'p') {
  console.log(`The product of the integers between 1 and ${num} is ${productTotal}.`);
}
