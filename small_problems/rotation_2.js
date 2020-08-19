// Rotation (Part 2)
// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

function rotateRightmostDigits(num, count) {
  let numString = String(num);
  let countNum = numString.slice(numString.length - count, numString.length - count + 1);
  return Number(numString.slice(0, numString.length - count) + numString.slice(numString.length - count + 1) + countNum);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917