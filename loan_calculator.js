// Mortgage / Car Loan Calculator
const readlineSync = require('readline-sync');

// Need 3 pieces of data: 1) loan amount; 2) APR; 3) loan duration (years)
console.log();
let loanAmount = readlineSync.question("What is your loan amount?\n");
console.log(loanAmount);

let apr = readlineSync.question("What is your Annual Percentage Rate (APR)?\n") / 100;
console.log(apr);

let loanDurationYears = readlineSync.question("What is the duration of your loan in years?\n");
console.log(loanDurationYears);

// Calculate the following: 1) monthly interest rate; 2) loan duration in months
let monthlyInterestRate = apr / 12;
let loanDurationMonths = loanDurationYears * 12;

// Monthly payment calculation: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
console.log(monthlyPayment);

// Return payment amount in dollar format ($xxx.xx)
console.log(`Your monthly payment is $${monthlyPayment}.`);