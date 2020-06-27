const READLINE = require('readline-sync');

// prompt user for age
console.log('What is your age?');
let age = READLINE.question();
//console.log(age);

// prompt user for retirement year
console.log('At what age would you like to retire?');
let retirementAge = READLINE.question();
//console.log(retirementAge);

// determine years to retirement
let workYearsRemaining = retirementAge - age;
//console.log(workYearsRemaining);

// prompt system for current year
let today = new Date();
//console.log(today);
let year = today.getFullYear();
//console.log(year);

// final message to user
console.log(`It's ${year}. You will retire in ${year + workYearsRemaining}.\nYou have only ${workYearsRemaining} years to go!`);


// Further Exploration
// What would happen if the new keyword wasn't used in defining the today variable on line 8?

// eslint-disable-next-line max-len
// Answer: The only correct way to instantiate a new Date object is by using the new operator. If you simply call the Date object directly, such as now = Date(), the returned value is a string rather than a Date object.

// let properDateExample = new Date();
// let wrongDateExample = Date();

// console.log(properDateExample);
// console.log(wrongDateExample);