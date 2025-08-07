console.log("Write a JavaScript code to reverse the array colors without using the reverse method.");
console.log("----------------------------------------1--------------------------------------------")



const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const newcolors =[];
for(let i = colors.length-1; i>=0; i--){
    

    newcolors.push(colors[i]);
 
}



console.log(newcolors);

console.log("-----------------------------------2--------------------------------------------------");


console.log("Write a JavaScript code to get the even numbers from an array using any looping technique.");

const numbers = [12, 98, 5, 41, 23, 78, 46];

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2==0){
        console.log("the even :",numbers[i]);
    }
}

console.log("----------------------------------3---------------------------------------------------");

console.log("Use a for...of loop to concatenate all the elements of an array into a single string.");


var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let string ='';
let rev= "";
for(const name of names){
    string = string+name;
    
    rev = name + rev;


}
console.log(string);
console.log(rev);

console.log("-----------------------------------------4--------------------------------------------");
console.log("Reverse the words of a sentence. Only the position of the word will be reversed. check out the output");

const statement = 'I am a hard working person';
let resultstate ='';
for(letter of statement){
    // console.log(letter);
    resultstate = letter + resultstate;
    // console.log(resultstate);
}

console.log(resultstate);


console.log("Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.");
console.log("-----------------------------------------5--------------------------------------------");
let numberArray = [1,2,3];
let newArray = numberArray;
console.log(newArray);

newArray[0] = 99;
console.log(newArray);


console.log("-----------------------------------------6--------------------------------------------");
twoDArray = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for(let name of twoDArray){
    console.log(name.name + " "  + "scored " + " " + name.marks);
}

console.log("-----------------------------------------7--------------------------------------------");
ArraytwoD =[
  [1, 2],
  [3, 4],
  [5, 6]
]
;
ArraytwoD[1][0] = 99;
console.log(ArraytwoD);
console.log("------------------------------------------Endf-------------------------------------------");

