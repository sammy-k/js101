// Name Swapping
// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// - function takes a string (first name, space, last name)
// - output is a new string with names reversed

// const swapName = (name) => {
//   let reverseName = name.split(' ').reverse().join(', ');
//   return reverseName;
// };

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration
// What if the person has one or more middle names? Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name:

const swapName = (name) => {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();
  return `${lastName}, ${nameArray.join(' ')}`;
};


console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"