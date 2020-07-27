// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let multipliedArray = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    let currentNum = arr1[idx];
    let currentNum2 = arr2[idx];
    console.log(currentNum2);
  }
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]