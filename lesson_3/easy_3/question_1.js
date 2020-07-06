// Question 1
// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// METHOD 1
//numbers.length = 0;

// METHOD 2
//numbers.splice(0, numbers.length);

// METHOD 3
while (numbers.length) {
  numbers.pop();
  //console.log(numbers);
  //console.log(!(!numbers.length));
}

console.log(numbers);
