// List of Digits
// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

function digitList(num) {
  let result = String(num).split('');
  for (let idx = 0; idx < result.length; idx += 1) {
    Number(result[idx]);
  }
  return result;
}


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]