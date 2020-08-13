// let munstersDescription = "The Munsters are creepy and spooky.";
// let newDescription = '';
// for (let idx = 0; idx < munstersDescription.length; idx += 1) {
//   if (munstersDescription[idx].toUpperCase() === munstersDescription[idx]) {
//     newDescription += munstersDescription[idx].toLowerCase();
//   } else {
//     newDescription += munstersDescription[idx].toUpperCase();
//   }
// }
// console.log(newDescription);


// USING forEach

function swapCase(str) {
  let reverseCase = '';
  str.split('').forEach((letter) => {
    if (letter === letter.toLowerCase()) {
      reverseCase += letter.toUpperCase();
    } else if (letter === letter.toUpperCase()) {
      reverseCase += letter.toLowerCase();
    }
  });
  return reverseCase;
}

swapCase(munstersDescription);