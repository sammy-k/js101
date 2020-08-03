// Delete Vowels
// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

function removeVowels(arr) {
  let result = [];
  let vowels = 'AEIOUaeiou';
  for (let idx = 0; idx < arr.length; idx += 1) {
    let subArr = arr[idx];
    for (let j = 0; j < subArr.length; j += 1) {
      let currentLetter = subArr[j];
      if (vowels.includes(currentLetter)) {
        continue;
      } else {
        result.push(currentLetter);
      }
    }
    subArr.join('');
  }
  return result;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]