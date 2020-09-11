// How Many?
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// Understanding the Problem:
// input: array
// output: log of each array element, along with number of occurances for each
// RULES:
//  - array elements are case sensitive

// Code:

function countOccurrences(arr) {
  let result = {};
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentElem = arr[idx];
    if (result[currentElem] >= 1) {
      result[currentElem] += 1;
    } else {
      result[currentElem] = 1;
    }
  }
  Object.entries(result).forEach((arr) => {
    console.log(`${arr[0]} => ${arr[1]}`);
  });
}

// Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2