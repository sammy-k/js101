// Question 1
// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

function asciiArt() {
  let indent = '';
  for (let idx = 0; idx < 10; idx += 1) {
    console.log(indent + 'The Flintstones Rock!');
    indent += ' ';
  }
}

console.log(asciiArt());