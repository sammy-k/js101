// Finding Nemo
// Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

let idx = 0;
while (fish[idx]) {
  console.log(fish[idx]);
  idx += 1;
  if (fish[idx] === 'Nemo') {
    break;
  }
}