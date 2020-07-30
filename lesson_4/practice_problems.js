// Practice Problem 1
// What is the return value of the filter method call below? Why?

// [1, 2, 3].filter(num => 'hi');


// Practice Problem 4
// What is the return value of the following statement? Why?

// ['ant', 'bear', 'caterpillar'].pop().length
// // 11


// Practice Problem 5
// What is the callback's return value in the following code? Also, what is the return value of every in this code?

// [1, 2, 3].every(num => {
//   return num = num * 2;
// });


// Practice Problem 8
// Take a look at the following array.

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// // Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

// let obj = {};
// flintstones.forEach((name, index) => {
//   obj[name] = index;
// });
// console.log(obj);

//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// Practice Problem 9
// Add up all of the ages from the Munster family object:

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let nums = Object.values(ages);
// let total = 0;
// nums.forEach(age => {
//   total += age;
// });
// console.log(total);


// Practice Problem 10
// Pick out the minimum age from our current Munster family object:

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let sortedAges = Object.values(ages).sort((a, b) => {
//   return a - b;
// });
// console.log(sortedAges[0]);


// Practice Problem 11
// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);



// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
