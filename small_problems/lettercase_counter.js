// Lettercase Counter
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// understading the problem
// input: string
// output: object containing three properties:
//  1. number of lowercase letters in string
//  2. number of uppercase letters in string
//  3. number of characters that are neither


function letterCaseCount(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  str.split('').forEach((char) => {
    if (char >= 'a' && char <= 'z') {
      obj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });
  return obj;
}


// Examples
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }