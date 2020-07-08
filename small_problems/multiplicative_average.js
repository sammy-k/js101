function multiplicativeAverage(arr) {
  let total = 1;
  for (let idx = 0; idx < arr.length; idx += 1) {
    total *= arr[idx];
  }
  return (total / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"