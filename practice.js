let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let obj = {};
nestedArray.forEach(subArr => obj[subArr[0]] = subArr[1]);
console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

