// Combining Arrays
// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

function union(arr1, arr2) {
  let combinedArray = arr1.concat(arr2).sort();
  let finalArray = [];
  for (let idx = 0; idx < combinedArray.length; idx += 1) {
    if (combinedArray[idx] === combinedArray[idx - 1]) {
      continue;
    } else {
      finalArray.push(combinedArray[idx]);
    }
  }
  return finalArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]