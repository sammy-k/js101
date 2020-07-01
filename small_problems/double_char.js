const repeater = (str) => {
  let doubleStr = "";
  for (let idx = 0; idx < str.length; idx++) {
    doubleStr += str[idx];
    doubleStr += str[idx];
  }
  return doubleStr;
};

console.log(repeater('Hello'));        // "HHeelllloo";
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!";
console.log(repeater(''));             // "";