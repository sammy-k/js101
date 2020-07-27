// COMPLETED - NO FURTHER REVIEW REQUIRED

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 10));
console.log(multiply(2, -2));

/////////////////////////////////////

function squareNum(num) {
  return multiply(num, num);
}

console.log(squareNum(5));
console.log(squareNum(-10));


///////////////////////////////////

function cubedNum(num) {
  return num * multiply(num, num);
}

console.log(cubedNum(5));