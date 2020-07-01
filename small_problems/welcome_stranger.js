let arr = ["John", "Q", "Doe"];
let obj = {
  title: "Master",
  occupation: "Plumber"
};

function greetings(arr, obj) {
  console.log(`Hello, ${arr.join(' ')}! Nice to have a ${Object.values(obj).join(' ')} around.`);
}

greetings(arr, obj);