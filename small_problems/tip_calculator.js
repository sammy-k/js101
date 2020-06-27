const READLINE = require('readline-sync');

// prompt for a bill amount
console.log('How much was your bill?');
let billAmount = READLINE.question();

// prompt for a tip rate
console.log('What percentage are you tipping?');
let tipRate = READLINE.question();
tipRate = parseFloat(tipRate);
console.log(tipRate);


// calculate tip amount
//let tipAmount =
