//Mở rộng mảng hoặc đối tượng

//Đối với mảng
const array1 = [1, 2, 3, 4, 5];

const array2 = [6, 7, 8, 9];

// const array3 = array1.concat(array2);

const array3 = [...array1, ...array2, 10, 11, 12];

console.log("Array3: ", array3);

//Đối với đối tượng
const userInfor = {
  id: 1,
  userName: "PV Huỳnh",
  age: 18,
};

const newUserInfor = {
  ...userInfor,
  address: "Hà Nội",
  email: "email@gmail.com",
};

console.log("UserInfor: ", userInfor);
console.log("NewUserInfor: ", newUserInfor);
