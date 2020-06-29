const READLINE = require('readline-sync');

// prompt for a bill amount
console.log('How much was your bill?');
let billAmount = parseFloat(READLINE.question(), 10);

// prompt for a tip rate
console.log('What percentage are you tipping?');
let tipRate = (READLINE.question() / 100);

// calculate tip amount
let tipAmount = (billAmount * tipRate);
tipAmount = parseFloat(tipAmount, 10);

//calculate total
let total = billAmount + tipAmount;

// print tip
console.log(`The tip is $${tipAmount.toFixed(2)}`);

// print total
console.log(`The total is $${total.toFixed(2)}`);