function groupAnagrams(strs) {
  const map = {}; // Để lưu trữ các nhóm anagram (chuỗi có các ký tự giống nhau)

  // Duyệt qua tất cả các chuỗi trong mảng
  strs.forEach((str) => {
    // Sắp xếp các ký tự trong chuỗi để tạo thành "mã" chung cho các chuỗi giống nhau
    const sortedStr = str.split("").sort().join("");

    // Nếu chưa có nhóm với mã này, tạo mới nhóm
    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }

    // Đẩy chuỗi vào nhóm có mã đã tính toán
    map[sortedStr].push(str);
  });

  // Trả về tất cả các nhóm chuỗi
  return Object.values(map);
}

// Ví dụ sử dụng hàm
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);

console.log(result);
// Kết quả: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
