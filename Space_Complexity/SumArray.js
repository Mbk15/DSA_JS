function sumArray(arr) {
  let total = 0; //O(1)
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total; //O(1)
}

console.log(sumArray([1, 3, 6, 7, 8, 9]));
