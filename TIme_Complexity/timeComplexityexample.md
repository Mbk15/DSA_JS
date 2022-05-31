# Calculating Time Complexity

Instead of counting time possibly through invoking the Javascript performance.now() method , we simply can count the number of simple operations the computer has to perform to execute the given algorithm.

## Example

function addUpTo(n) {
let total = 0; // 1 assignment which amounts to a constant time 0(1)
for (let i = 0; i <=n; //O(n) comparison i++ //O(n) asignment and O(n) additions) {
total += i; // O(n) assignment and O(n) additions
}
return total;
}

Evaluating the whole operations the computer would be performing as expressed in the algorithim breakdown

we have O(n) in 5 places and O(1) in two places say in other words , we have 5 linear operations and 2 constant operations which al together using the big O notation gives 5n + 2 and evaluating it will give an algorithim of time complexity of O(n) i.e linear which the time taken to execute it grows in proportion to the size of the input (n)
