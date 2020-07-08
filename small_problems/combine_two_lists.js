function interleave(arr1, arr2) {
  let combinedArray = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    combinedArray.push(arr1[idx]);
    combinedArray.push(arr2[idx]);
  }
  return combinedArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]