function isPalindrome(string) {
  let backwardsString = '';
  for (let idx = string.length - 1; idx >= 0; idx -= 1) {
    backwardsString += string[idx];
  }
  //console.log(backwardsString);
  return (string === backwardsString);
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true