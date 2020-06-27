function howOldIsTeddy() {
  let min = Math.ceil(20);
  let max = Math.floor(120);
  let age = Math.floor(Math.random() * (max - min + 1)) + min;
  return `Teddy is ${age} years old!`;
}

console.log(howOldIsTeddy());
