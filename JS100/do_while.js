// Do...While
// What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);