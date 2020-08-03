// COMPLETED
// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

// input: number
// output: number

function twice(num) {
  // convert number to string for purpose of comparing digits
  let numString = num.toString();
  // return number * 2 for all numbers with odd number of digits
  if (numString.length % 2 === 1) {
    return num * 2;
  // return number provided for all numbers where left side digits = right side digits
  } else if (numString.slice(0, numString.length / 2) === numString.slice(numString.length / 2, numString.length)) {
    return num;
  // return number * 2 for all numbers with even number of digits, but without left side and right side digits matching
  } else if (numString.slice(0, numString.length / 2) !== numString.slice(numString.length / 2, numString.length)) {
    return num * 2;
  }
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676