// Question 1
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newStr = advice.replace('important', 'urgent');

// Option 2: replace multiple occurances
//let newStr = advice.replace(/important/gi, 'urgent');

console.log(newStr);