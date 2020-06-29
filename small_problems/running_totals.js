function runningTotal(arr) {
  let improvedArray = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    total += arr[i];
    if (currentElement !== arr[0]) {
      improvedArray.push(currentElement + total);
    } else {
      improvedArray.push(currentElement);
    }
  }
  return improvedArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []