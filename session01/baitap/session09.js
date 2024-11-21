function mergeArrays(...arrays) {
  const length = arrays[0].length;
  if (!arrays.every((arr) => arr.length === length)) {
    console.error("Các mảng không có độ dài bằng nhau.");
    return;
  }

  let result = [];
  for (let i = 0; i < length; i++) {
    let merge = arrays.map((arr) => arr[i]);
    result.push(merge);
  }
  return result;
}

const output = mergeArrays([1, 2, 3], ["a", "b", "c"], [true, false, true]);
console.log(output);
