// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

const negative = (num) => Math.abs(num) * -1;

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// Further Exploration
// https://medium.com/coding-at-dawn/is-negative-zero-0-a-number-in-javascript-c62739f80114