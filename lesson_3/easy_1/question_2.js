// Question 2
// How can you determine whether a given string ends with an (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// OPTION 1
// function containsBang(str) {
//   //console.log(str[str.length - 1]);
//   return str.indexOf('!') === str.length - 1;
// }

// console.log(containsBang(str1));
// console.log(containsBang(str2));

// OPTION 2
console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));
