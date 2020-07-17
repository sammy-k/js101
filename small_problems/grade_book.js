// Grade Book
// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

function getGrade(num1, num2, num3) {
  let grade = '';
  let gradeMean = (num1 + num2 + num3) / 3;
  if (90 <= gradeMean <= 100) {
    grade = 'A';
  } else if (80 <= gradeMean < 90) {
    grade = 'B';
  } else if (70 <= gradeMean < 80) {
    grade ='C';
  } else if (60 <= gradeMean < 70) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"