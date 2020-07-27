// Running Totals
// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

// input: array of numbers
// output: array
// each element of return array is running total from original array

function runningTotal(arr) {
  let result = [];
  let total = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    total += arr[idx];
    result.push(total);
  }
  return result;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []



// Further Exploration
// Can you rewrite the solution using the Array.prototype.map method? What types of problems do you think are well-suited for the Array.prototype.map method?