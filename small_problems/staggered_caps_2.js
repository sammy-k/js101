// Staggered Caps (Part 2)
// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// Understanding the problem
// input: string
// output: string
// - caps are staggered for each char (upper, lower, upper, lower, etc.)
// - non alphabetic characters should be returned as-is, and should be separate from toggling upper and lower for alphabetic characters

function staggeredCase(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];
    if (idx % 2 === 0) {
      result += currentChar.toUpperCase();
    } else if (idx % 2 === 1) {
      result += currentChar.toLowerCase();
    }
  }
  return result;
}

// Examples:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("I Love Launch School!"));

// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );