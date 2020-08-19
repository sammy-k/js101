// How Many?
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let obj = {};
  let total = 0;
  arr.forEach(item => obj[item] = 0);
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentElem = arr[idx];
    for (let j = 0; j < arr.length; j += 1) {
      if (currentElem === arr[j]) {
        total += 1;
      }
      obj[currentElem] = total;
    }
  }
  return (`${Object.keys(obj)[0]} => ${obj}\n`);
}

console.log(countOccurrences(vehicles));
// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2