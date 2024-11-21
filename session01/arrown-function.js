//
function sum(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
console.log("Sum: ", sum(10, 20));

//JSDoc
/**
 * Hàm nối họ và tên
 * @param {*} firstName Họ và tên đêm
 * @param {*} lastName  Tên
 * @returns Tên đầy đủ
 * author: PVH(19/11/2024)
 * ModifiedAt: PVH(19/11/2025)
 */

// const mergeName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

//Khi hàm đơn giản thì k cần dùng return
const mergeName = (firstName, lastName) => `${firstName} ${lastName}`;
const rs = mergeName("Nguyễn Thị", " Yến");
console.log("Result: ", rs);

// Không có arguments
