// OPTION 1
// function logOdds() {
//   for (let i = 1; i <= 99; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }

// FURTHER EXPLORATION
// OPTION 2 (include number limiter)
function logOdds(num) {
  let idx = 1;
  while (idx <= num) {
    console.log(idx);
    idx += 2;
  }
}

console.log(logOdds(40));