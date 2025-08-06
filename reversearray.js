numberArray = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17];
// for(let i = numberArray.length - 1; i >= 0; i--) {
//     console.log(numberArray[i]);
// }
let newArray = [];
for(let i = 0; i<numberArray.length; i++) {
    console.log(numberArray[i]);
    newArray.push(numberArray[i]);

}
console.log(newArray.reverse());