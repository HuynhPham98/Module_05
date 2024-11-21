function insertArrayAtPosition(arr1, arr2, position) {
  if (position < 0 || position > arr1.length) {
    console.error("Vị trí không phù hợp");
    return;
  }

  arr1.splice(position, 0, ...arr2);
  console.log(arr1);
}

insertArrayAtPosition([1, 2, 3, 7, 8], [4, 5, 6], 3);

insertArrayAtPosition(["a", "b", "c", "g"], ["d", "e", "f"], 3);
