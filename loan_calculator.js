// Mortgage / Car Loan Calculator

const READLINE = require('readline-sync');

// Need 3 pieces of data: 1) loan amount; 2) APR; 3) loan duration

console.log("What is your loan amount?");
let loanAmount = Number(READLINE.question());
if (loanAmount === NaN) {
  console.log('Please enter a valid number');
}
//console.log(typeof loanAmount);
console.log(loanAmount);

// console.log("What is your Annual Percentage Rate (APR)?");
// let annualPercentageYield = READLINE.question();
// console.log(`Your APR is ${annualPercentageYield}`);

// console.log("What is the duration of your loan in months?");
// let loanDuration = Number(READLINE.question());
// // If not a number or blank, prompt again for a number
// if (loanDuration === '') {
//   console.log('Please enter a valid number');
// }
// console.log(`Your loan duration is ${loanDuration} months`);
// // Calculate the following: 1) monthly interest rate; 2) loan duration in months

// Monthly payment calculation: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

// Return payment amount in dollar format ($xxx.xx)