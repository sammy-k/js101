// Lettercase Counter
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

let obj = {
  lowercase: 0,
  uppercase: 0,
  neither: 0
};

function letterCaseCount(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  console.log(str.split('').forEach((char) => {
    if (char === char.toLowerCase()) {
      console.log(char);
    }
  }));
  return obj;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }