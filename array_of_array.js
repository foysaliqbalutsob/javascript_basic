const numbers = [1, 5, 8, 9, 3, 4, 11, 21,10];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]); 

console.log("-------------------------------------");

console.log("now we cxan try by for loop");

console.log("-------------------------------------");

for(const num of numbers){
    console.log(num);
}


console.log("Done");
console.log("-------------------------------------");

console.log("now push pop dekhbo");


numbers.pop();
console.log(numbers);

console.log("done 10 pop hpyeche ");
console.log("-------------------------------------");
 console.log("ekhn pop korbo");
 console.log("-------------------------------------");
 numbers.push(44);
 console.log(numbers);
 console.log("done 44 push hpyeche ");
console.log("-------------------------------------");
console.log("ekhn shift unshift dekhbo ");
console.log("Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.");
numbers.shift();
console.log(numbers);
console.log("done 1 shift hpyeche ");
console.log("-------------------------------------");
console.log("ekhn unshift korbo");
console.log("Adds one or more elements to the beginning of an array and returns the new length of the array.");
numbers.unshift(0);
console.log(numbers);
console.log("done 0 unshift hpyeche ");
console.log("-------------------------------------");
console.log("ulto kore dekhbo mane reverse korbo");
numbers.reverse();
console.log(numbers);
console.log("done reverse hpyeche ");   
console.log("-------------------------------------");
console.log("2D array dekhbo");
const twoDArray = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 10],
    [11, 12, 13, 14]    
];
console.log(twoDArray);
console.log(twoDArray[0]);
console.log(twoDArray[1]);
console.log(twoDArray[2]);
console.log(twoDArray[3]);
console.log(twoDArray[0][2]);
console.log("done 2D array dekhte peyeche");
console.log("-------------------------------------");
twoDArray.push([15, 16, 17, 18]);
console.log("after push 15, 16, 17, 18");
console.log(twoDArray);
console.log("done 2D array push dekhte peyeche");
console.log("-------------------------------------");
for( const num of twoDArray){
    for(const m of num){
        console.log(m);
    }

}
console.log("done 2D array for loop dekhte peyeche");       
console.log("-------------------------------------");
