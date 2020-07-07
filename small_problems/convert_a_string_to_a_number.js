function stringToInteger(str) {
  return str - 0;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("4321")); // logs 4321

console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("570")); // logs 570