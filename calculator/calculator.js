
// constant and variable declaration
const readline = require('readline-sync');
const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json');

// function declaration
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// program start
prompt('welcome');

while (true) {
  // Ask the user for the first number.
  let number1 = readline.question(prompt('number1'));

  while (invalidNumber(number1)) {
    number1 = readline.question(prompt('invalidNumber'));
  }

  // Ask the user for the second number.
  let number2 = readline.question(prompt('number2'));

  while (invalidNumber(number2)) {
    number2 = readline.question(prompt('invalidNumber'));
  }
  // Print the numbers to the terminal
  console.log(`Your numbers are ${number1} and ${number2}`);

  // Ask the user for an operation to perform.
  let operation = readline.question(prompt('operation'));

  while (number2 === '0' && operation === '4') {
    operation = readline.question(prompt('invalidDivision'));
  }

  while (!['1', '2', '3', '4'].includes(operation)) {
    operation = readline.question(prompt('invalidOperation'));
  }

  // Perform the operation on the two numbers.
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

  // Print the result to the terminal.
  console.log(`The result is ${output}`);

  // Prompt the user for another possible calculation
  let answer = readline.question(prompt('keepUsing'));

  while ((answer.trim().toLowerCase() !== 'y' &&
          answer.trim().toLowerCase() !== 'n') || answer.trim() === '') {
    answer = readline.question(prompt('invalidResponse'));
  }

  if (answer.trim().toLowerCase() === 'n') {
    console.log('Thank you for using the calculator!');
    break;
  }
}


// Source code
// Code on lines 22-25 can be extracted into retrieveInput function which you can reuse for both numbers.

// const retrieveInput = (inputType) => {
//   let input = readLineSync.question(prompt(inputType));
//   while (invalidNumber(input)) {
//     input = readLineSync.question(prompt(`invalid${inputType}`));
//   }
//   return input;
// }
// Also there is an option to make this function even more reusable as you can pass validation function as the argument as well.

// const retrieveInput = (inputType, isInvalidInput) => {
//   let input = readLineSync.question(prompt(inputType));
//   while (isInvalidInput(input)) {
//     input = readLineSync.question(prompt(`invalid${inputType}`));
//   }
//   return input;
// }
// You could now reuse this function for retriving operation, just the code on line 37 needs to be extracted into a separate function.

// Code on lines 42-56 can be extracted to calculateResult function.

// You can reuse retrieveInput function for retriving the input for the answer for new calculation.
