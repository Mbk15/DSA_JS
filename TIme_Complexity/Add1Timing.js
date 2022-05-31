function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(8));
const t1 = performance.now();
addUpTo(100000000);
const t2 = performance.now();

console.log(`Time elapsed was : ${(t2 - t1) / 1000}  seconds`);
