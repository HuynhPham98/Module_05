function sumArrays(...arrays) {
  return arrays.map((arr) => arr.reduce((sum, num) => sum + num, 0));
}

const output = sumArrays([1, 2], [6, 7, 8], [12, 8]);
console.log(output);

