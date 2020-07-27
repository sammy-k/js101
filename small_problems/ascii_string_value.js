// COMPLETED - NO FURTHER REVIEW REQUIRED

function asciiValue(string) {
  let totalValue = 0;
  for (let i = 0; i < string.length; i++) {
    totalValue += string.charCodeAt([i]);
  }
  return totalValue;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0