const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

// Ask the user for the first number
prompt("What's the first number?");
let number1 = READLINE.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = READLINE.question();
}
console.log(number1);

// Ask the user for the second number
prompt("What's the second number?");
let number2 = READLINE.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = READLINE.question();
}
console.log(`${number1} ${number2}`);

// Ask the user for an operation to perform
prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = READLINE.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = READLINE.question();
}

// Perform the operation on the two numbers
let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

// Print the result to the terminal
console.log(`The result is ${output}`)
console.log(`Would you like to perform a new calcuation?\n1) Yes 2) No`);
if ('Yes') {
  function prompt(message) {
    console.log(`=> ${message}`);
  };
}

