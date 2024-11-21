const arr = [1, 2, 3];
const element = 4;

const newArr = [...arr, element];
const newArr1 = [element, ...arr];
const newArr2 = [...arr.slice(0, 1), element, ...arr.slice(1)];

console.log("Mảng cũ: ", arr);

console.log("Mảng mới: ", newArr);
console.log("Mảng mới: ", newArr1);
console.log("Mảng mới: ", newArr2);
