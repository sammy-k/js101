function stringy(num) {
  let newString = '';
  let idx = 1;
  for (idx; idx <= num; idx += 1) {
    if (idx % 2 !== 0) {
      newString += '1';
    } else {
      newString += '0';
    }
  }
  return newString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101");


