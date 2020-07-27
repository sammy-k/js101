// COMPLETED - NO FURTHER REVIEW REQUIRED

const readLineSync = require('readline-sync');

let name = readLineSync.question('What is your name?\n');
if (name.includes('!')) {
  console.log(`HELLO ${name.toUpperCase().slice(0, -1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
