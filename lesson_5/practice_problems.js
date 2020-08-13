// Practice Problem 1
// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a));



// Practice Problem 2
// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// let sortedBooks = books.sort((a, b) => {
//   return Number(a.published) - Number(b.published);
// });
// console.log(sortedBooks);

// Practice Problem 3
// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1])

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// console.log(Object.keys(obj2.third)[0])



// Practice Problem 4
// For each of these collection objects, demonstrate how you would change the value 3 to 4.

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
// console.log(obj2);



// Practice Problem 5

// Consider the following nested object:

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };
// // Compute and display the total age of the male members of the family.

// let malesAges = 0;
// Object.entries(munsters).forEach(member => {
//   if (member[1].gender === 'male') {
//     malesAges += member[1].age;
//   }
// });
// console.log(malesAges);



// Practice Problem 6

// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };
// // Each output line should follow this pattern:
// // (Name) is a (age)-year-old (male or female).

// Object.entries(munsters).forEach(member => console.log(`${member[0]} is a ${member[1].age}-year-old ${member[1].gender}.`));


// Practice Problem 7
// Given the following code, what will the final values of a and b be? Try to answer without running the code.

// let a = 2;
// let b = [5, 8];
// let arr = [a, b];
// // arr = [2, [5, 8]]

// arr[0] += 2;
// // arr = [4, [5, 8]]

// arr[1][0] -= a;
// // arr = [4, [3, 8]]

// console.log(arr);


// Practice Problem 8
// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// let vowels = 'AEIOUaeiou';
// let result = '';
// Object.values(obj).forEach((subArr) => {
//   subArr.forEach((word) => {
//     word.split('').forEach((letter) => {
//       if (vowels.includes(letter)) {
//         result += letter;
//       }
//     });
//   });
// });
// console.log(result);


// Practice Problem 9
// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// arr.forEach((subArr) => {
//   subArr.sort();
// });
// console.log(arr);

// Practice Problem 10
// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// function reverseArrs(arr) {
//   arr.map(subArr => {
//     return subArr.slice().sort((a, b) => {
//       if (typeof a === 'number') {
//         return b - a;
//       }
//       if (a < b) {
//         return 1;
//       } else if (a > b) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });
//   });
// }

// reverseArrs(arr);

// Practice Problem 11
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each the number incremented by 1. Do not modify the original data structure.

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// Practice Problem 12
// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let sortedArr = arr.map((subArr) => {
//   return subArr.filter(num => num % 3 === 0);
// });

// console.log(sortedArr);

// Practice Problem 13
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// // Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// // [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// arr.sort((a, b) => {

// })


// Practice Problem 14
// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };
// // The return value should look like this:

// // [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// Object.values(obj).map(entry => {
//   return entry.colors;
// });


// Practice Problem 16
// Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let myObj = {};
arr.forEach((subArr) => {
  myObj[subArr[0]] = subArr[1];
});
console.log(myObj);