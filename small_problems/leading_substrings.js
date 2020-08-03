// COMPLETE
// Leading Substrings
// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

function leadingSubstrings(str) {
  let subStrings = [];
  for (let idx = 1; idx <= str.length; idx += 1) {
    subStrings.push(str.substring(0, idx));
  }
  return subStrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]