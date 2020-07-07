myStr = 'The quick brown fox jumps over the lazy dog.';

// const penultimate = (str) => {
//   let arr = str.split(' ');
//   return arr[arr.length - 2];
// };

// console.log(penultimate(myStr) === 'lazy');


// further exploration
const penultimate = (str) => {
  let arr = str.split(' ');
  //console.log(Math.floor(arr.length / 2));
  return arr[Math.floor(arr.length / 2)];
};

console.log(penultimate(myStr));
