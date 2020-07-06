// The following function unnecessarily uses two return statements to return boolean values. How can you eliminate the unnecessary duplication?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// Try to come up with at least two different solutions.

// solution 1
// function isColorValid(color) {
//   return (color === "blue" || color === "green");
// }

// solution 2
const isColorValid = color => color === "blue" || color === "green";


console.log(isColorValid('green'));
console.log(isColorValid('blue'));
console.log(isColorValid('red'));
console.log(isColorValid(''));