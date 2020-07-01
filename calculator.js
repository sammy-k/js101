// constant and variable declaration and initialization
const LANGUAGE = 'en';
const readLineSync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

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

// initial user input
prompt('welcome');

while (true) {
  // Ask the user for the first number
  let number1 = readLineSync.question(prompt('number1'));
  while (invalidNumber(number1)) {
    number1 = readLineSync.question(prompt('invalidNumber'));
  }

  // Ask the user for the second number
  let number2 = readLineSync.question(prompt('number2'));
  while (invalidNumber(number2)) {
    number2 = readLineSync.question(prompt('invalidNumber'));
  }

  console.log(`${number1} ${number2}`);

  // Ask the user for an operation to perform
  let operation = readLineSync.question(prompt('operation'));
  while (!['1', '2', '3', '4'].includes(operation)) {
    operation = readLineSync.question(prompt('invalidOperation'));
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
  console.log(`The result is ${output}`);

  // Prompt the user for another calculation
  let answer = readLineSync.question(prompt('keepUsing')).toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    answer = readLineSync.question(prompt('invalidResponse')).toLowerCase();
  }

  if (answer !== 'y') break;
}

