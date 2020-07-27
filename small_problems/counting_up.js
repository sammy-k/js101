// COMPLETE - NO FURTHER REVIEW
// Counting Up
// Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.
// You may assume that the argument will always be a positive integer.

// function sequence(num) {
//   let sequenceArray = [];
//   for (let count = 1; count <= num; count += 1) {
//     sequenceArray.push(count);
//   }
//   return sequenceArray;
// }

// Further Exploration
// Can you use forEach or map in your solution? Why or why not?
// I dont believe you can, since you arent calling on another array

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

