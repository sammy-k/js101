// let str = 'The grass is green';
// let grass = str.slice(4, 9);
// console.log(grass);

// A method that is very similar to slice, but differs from it in some respects, is String.prototype.substring. It also takes a start index and an end index and returns a substring from the start index up to, but not including, the end index.

// let str = 'The grass is green';
// str.substring(4, 9); // => 'grass'
// slice and substring differ in the following ways:

// When the start index is greater than the end index, substring swaps the two arguments while slice returns an empty string:

// 'abcdef'.substring(3, 1); // => 'bc'
// 'abcdef'.slice(3, 1);     // => ''
// When either argument is negative, substring treats them as 0, while, as we saw above, slice treats them as length - index:

// 'abcdef'.substring(-2); // => 'abcdef'
// 'abcdef'.slice(-2);     // => 'ef'
// We recommend using String.prototype.slice. Its behavior is more natural and predictable when dealing with these edge cases.

// You'll often see another method, String.prototype.substr, used in some old code. This method isn't strictly deprecated, but it is now defined as a legacy function. Eventual deprecation seems likely, which means it may be removed from future implementations of JavaScript. We don't recommend using it, but it's worth knowing about since you may come across it in the wild. See the documentation here.

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(arr.slice(2, 5)[0]);