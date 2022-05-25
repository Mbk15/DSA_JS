function AddUpandDown(n) {
  console.log("Adding Up ");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("Now Going down");

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Done down . Goodbye");
}

AddUpandDown(10);
