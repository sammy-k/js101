function isOdd(num) {
  //this returns true or false based on passed in number
  //(method) Math.abs(x: number): number
  // Returns the absolute value of a number   (the  value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
  return Math.abs(num) % 2 !== 0;
}