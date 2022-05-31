function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
console.log("Hello Mbk");
console.log(addUpTo(8));

var time1 = performance.now();
addUpTo(100000000);
var time2 = performance.now();
console.log(time2);
console.log(time1);

console.log(`Time elapsed was : ${(time2 - time1) / 1000}  seconds`);
