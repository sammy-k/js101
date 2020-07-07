// Question 1
// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

function asciiArt() {
  let idx = 0;
  while (idx < 10) {
    console.log(`The Flintstones Rock!\n The Flintstones Rock!\n  The Flintstones Rock!`);
    idx += 1;
  }
}

console.log(asciiArt());