function doubleArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(2 * arr[i]);
  }
  return newArray;
}

console.log(doubleArray([2, 4, 6]));
