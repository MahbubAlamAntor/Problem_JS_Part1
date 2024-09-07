let a = 2;
let b = 5;
const temp = a;
console.log(a, b)
a = b;
b = temp;

console.log(a, b)

let x = 5;
let y = 9;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y)