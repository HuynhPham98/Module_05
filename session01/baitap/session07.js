const objects = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }];
let merged = {};
objects.forEach((obj) => (merged = { ...merged, ...obj }));
console.log(merged);

// console.log(objects);
