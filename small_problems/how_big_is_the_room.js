// COMPLETED - NO FURTHER REVIEW NEEDED
// How big is the room?

// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// Example:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

const readline = require('readline-sync');

// let roomLengthMeters = readline.question('Enter the length of the room in meters: ');
// let roomWidthMeters = readline.question('Enter the width of the room in meters: ');
// let roomAreaMeters = (roomLengthMeters * roomWidthMeters).toFixed(2);
// let roomAreaFeet = (roomAreaMeters * 10.7639).toFixed(2);

// console.log(`The area of the room is ${roomAreaMeters} square meters (${roomAreaFeet} square feet).`);

// Further Exploration
// Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

let measurementType = readline.question("Enter '1' if you will measure in meters or '2' if you will measure in feet");

if (measurementType === '1') {
  let roomLengthMeters = readline.question('Enter the length of the room: ');
  let roomWidthMeters = readline.question('Enter the width of the room: ');
  let roomAreaMeters = (roomLengthMeters * roomWidthMeters).toFixed(2);
  let roomAreaFeet = (roomAreaMeters * 10.7639).toFixed(2);
  console.log(`The area of the room is ${roomAreaMeters} square meters (${roomAreaFeet} square feet).`);
} else if (measurementType === '2') {
  let roomLengthFeet = readline.question('Enter the length of the room: ');
  let roomWidthFeet = readline.question('Enter the width of the room: ');
  let roomAreaFeet = (roomLengthFeet * roomWidthFeet).toFixed(2);
  let roomAreaMeters = (roomAreaFeet / 10.7639).toFixed(2);
  console.log(`The area of the room is ${roomAreaFeet} square feet (${roomAreaMeters} square meters).`);
}
