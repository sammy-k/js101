// After Midnight (Part 1)
// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

// You may not use javascript's Date class methods.
// Disregard Daylight Savings and Standard Time and other complications.

// input: number representing minutes until midnight
// output: string representing time of day (hh:mm) format




//console.log(timeOfDay(0) === "00:00");
//console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
// The tests above should log true.

