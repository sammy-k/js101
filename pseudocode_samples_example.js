// EXAMPLE
// Given a collection of numbers.

// Iterate through the collection one by one.
//   - save the first value as the starting value.
//   - for each iteration, compare the saved value with the current value.
//   - if the current number is greater
//     - reassign the saved value as the current value
//   - otherwise, if the current value smaller or equal
//     - move to the next value in the collection
// After iterating through the collection, return the saved value.

// EXAMPLE - FORMAL
// START

// # Given a collection of integers called "numbers"

// SET iterator = 1
// SET savedNumber = value within numbers collection at space 1

// WHILE iterator <= length of numbers
//   SET currentNumber = value within numbers collection at space "iterator"
//   IF currentNumber > savedNumber
//     savedNumber = currentNumber
//   ELSE
//     skip to the next iteration

//   iterator = iterator + 1

// PRINT savedNumber

// END

