// Halvsies
// Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

// Problem
// Input: array of integers
// Output: new two-dimensional array containing the same integers
// Rules:
// - if even, first half of original array go to first element of return array
// - if odd, first half plus the middle integer of original array go to first element of return array
// - input will always be an array, but if its empty still return two dimension array

// Data Structure / Algorithm
// 1. create two dimensional array that will be returned
// 2. evaluate length of array argument
// 3. return two dimensional array

function halvsies(arr) {
  let resultArray = [];
  if (arr.length % 2 === 0) {
    resultArray.push(arr.slice(0, (arr.length / 2)));
    resultArray.push(arr.slice(arr.length / 2));
  } else {
    resultArray.push(arr.slice(0, ((arr.length / 2)) + 1));
    resultArray.push(arr.slice((arr.length / 2) + 1));
  }
  return resultArray;
}

//Examples:
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]