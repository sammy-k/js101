
const readlineSync = require('readline-sync');

// Note: 1 square meter == 10.7639 square feet

// let roomLengthMeters = readlineSync.question("Enter the length of the room in meters: ");
// let roomWidthMeters = readlineSync.question("Enter the width of the room in meters: ");
// let roomSizeSqFt = ((roomLengthMeters * roomWidthMeters) * 10.7639);

// console.log(`The area of the room is ${roomLengthMeters * roomWidthMeters} square meters (${(roomSizeSqFt.toFixed(2))} square feet).`);


// //            ******FURTHER EXPLORATION******
// // Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

// const READLINE = require('readline-sync');

// //Note: 1 square meter == 10.7639 square feet
// const SQ_METER_IN_FEET = 10.7639;
// const SQ_FOOT_IN_METERS = 0.092903;

// console.log('Enter the length of the room:');
// let roomLength = READLINE.question();
// roomLength = parseInt(roomLength, 10);

// console.log('Enter the width of the room:');
// let roomWidth = READLINE.question();
// roomWidth = parseInt(roomWidth, 10);

// let area = (roomLength * roomWidth);

// console.log('Did you enter your measurements in meters or feet?');
// let feetOrMeters = READLINE.question();

// if (feetOrMeters === 'meters') {
//   console.log(`The area of the room is ${area} square meters (${(area * SQ_METER_IN_FEET).toFixed(2)} square feet).`);
// } else if (feetOrMeters === 'feet') {
//   console.log(`The area of the room is ${area} square feet (${(area * SQ_FOOT_IN_METERS).toFixed(2)} square meters).`);
// }


