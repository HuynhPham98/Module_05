function sortArrays(arr1, arr2) {
  let merge = arr1.concat(arr2);
  merge.sort((a, b) => a - b);
  return merge;
}

// Ví dụ sử dụng hàm:
const arr1 = [1, 2, 3, 5, 9];
const arr2 = [4, 6, 7, 8];
const mergedArray = sortArrays(arr1, arr2);

console.log(mergedArray);
