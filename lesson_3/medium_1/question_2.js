let munstersDescription = "The Munsters are creepy and spooky.";
let newDescription = '';
for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  if (munstersDescription[idx].toUpperCase() === munstersDescription[idx]) {
    newDescription += munstersDescription[idx].toLowerCase();
  } else {
    newDescription += munstersDescription[idx].toUpperCase();
  }
}
console.log(newDescription);