let a = 10;
let b = 15;
const temp = a;
a = b;
b = temp;
console.log(a,b);

let x = 5;
let y = 10;
console.log(x,y);
[x, y] = [y ,x];
console.log(x,y);


for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  });
}