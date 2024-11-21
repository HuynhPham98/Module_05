const arr = [
  { id: 1, name: "huỳnh" },
  { id: 2, name: "minh" },
  { id: 3, name: "yến" },
];

const arr1 = arr.map((arr) => `Xin chào ${arr.name}!`);
arr1.forEach((item) => console.log(item));
