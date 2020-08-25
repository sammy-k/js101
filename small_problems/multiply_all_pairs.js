// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.
// You may assume that neither argument will be an empty array.

// understanding the problem
// input: two array arguments, each a list of integers
// output: array containing the products of all combinations between the two arrays

// Rules
//  - neither argument will be an empty array
//  - the returned array should be sorted in ascending numerical order

// Data Strcture / Algorithm
//  1. create an empty result array to store the products of our multiplication
//  2. loop through the first array
//    - for each integer in the first array, loop through the second array and push the product of each pair to the result array
//    - repeat for each element in the first array
//  3. sort the result array in ascending order
//  4. return the result array

// Code
function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    let currentNum = arr1[idx];
    for (let j = 0; j < arr2.length; j += 1) {
      let currentNum2 = arr2[j];
      result.push(currentNum * currentNum2);
    }
  }
  return result.sort((a, b) => a - b);
}

// examples:
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]