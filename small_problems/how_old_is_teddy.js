function howOldIsTeddy() {
  let min = 20;
  let max = 120;
  let age = Math.floor(Math.random() * (max - min + 1)) + min;
  return `Teddy is ${age} years old!`;
}

console.log(howOldIsTeddy());
