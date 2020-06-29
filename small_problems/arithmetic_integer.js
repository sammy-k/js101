const readLineSync = require('readline-sync');

let firstNumber = Number(readLineSync.question(`==> Enter the first number:\n`));
let secondNumber = Number(readLineSync.question(`==> Enter the second number:\n`));
console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n==> ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}\n==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}\n==> ${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);