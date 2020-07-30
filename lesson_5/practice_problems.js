// Practice Problem 1
// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

// let arr = ['10', '11', '9', '7', '8'];
// let sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr);


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

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(Object.entries(arr2[1][1]));

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}