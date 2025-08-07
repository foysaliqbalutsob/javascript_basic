const numbers = [1, 2, 3, 4, 5];
const copyArray = numbers;
console.log(copyArray);

copyArray[0] = 151;
copyArray.push(51);
console.log(copyArray);
copyArray.pop();
console.log(copyArray);


console.log("---------------------------------------");
const marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,  160, 170, 180, 190, 200];
console.log(marks);
const copyMarks = [];
for(const i of marks){
    copyMarks.push(i);

}
console.log(copyMarks)
array = [];
console.log(array.concat(marks));