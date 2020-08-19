// Lettercase Percentage Ratio
// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

function letterPercentages(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  let lowerCaseTotal = 0;
  let upperCaseTotal = 0;
  let neitherTotal = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];
    if ('a' <= currentChar && currentChar <= 'z') {
      lowerCaseTotal += 1;
    } else if ('A' <= currentChar && currentChar <= 'Z') {
      upperCaseTotal += 1;
    } else {
      neitherTotal += 1;
    }
  }
  obj.lowercase = ((lowerCaseTotal / str.length) * 100).toFixed(2);
  obj.uppercase = ((upperCaseTotal / str.length) * 100).toFixed(2);
  obj.neither = ((neitherTotal / str.length) * 100).toFixed(2);
  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }