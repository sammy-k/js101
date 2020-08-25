// Triangle Sides
// A triangle is classified as follows:
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Understanding the Problem:
// input: three integers, each representing a side of a triangle
// output: string, representing type of triangle
// rules:
//  - if any side has a length of 0 or less, it is not a valid triangle
//  - sum of the lengths of two shortest sides must be greater than the length
//    of the longest side, if not it is not a valid triangle

// Data Structure / Algorithm
//

// Code:
function triangle(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return 'invalid';
  } else if ((num1 + num2 < num3) || (num1 + num3 < num2) ||
  (num2 + num2 < num1)) {
    return 'invalid';
  } else if (num1 === num2 && num1 === num3 && num2 === num3) {
    return 'Equilateral'; // Equilateral: All three sides are of equal length.
  } else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    return 'Scalene'; // Scalene: All three sides are of different lengths.
  } else if (((num1 === num2) && (num1 !== num3 && num2 !== num3)) ||
             ((num1 === num3) && (num1 !== num2 && num3 !== num2)) ||
             ((num2 === num3) && (num2 !== num1 && num3 !== num1))) {
    return 'Isosceles'; // Isosceles: Two sides are of equal length, while the third is different.
  }
}

// Examples:
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"