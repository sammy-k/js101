// COMPLETED - NO FURTHER REVIEW
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
  let gradeMean = (num1 + num2 + num3) / 3;
  if ((90 <= gradeMean) && (gradeMean <= 100)) {
    return 'A';
  } else if ((80 <= gradeMean) && (gradeMean < 90)) {
    return 'B';
  } else if ((70 <= gradeMean) && (gradeMean < 80)) {
    return 'C';
  } else if ((60 <= gradeMean) && (gradeMean < 70)) {
    return 'D';
  } else {
    return 'F';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"