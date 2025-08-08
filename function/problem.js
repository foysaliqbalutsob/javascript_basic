console.log("-------------------------------------------------problem-1-------------------------------------------------------------")
console.log("Take four parameters. Multiply the four numbers and then return the result")
console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````````")
function multiplicationFourNumbers(a, b, c, d) {
    return a* b* c* d;
}
let result = multiplicationFourNumbers(4,5,6,7);
console.log(result);
console.log("----------------------------------------------------problem-2---------------------------------------------------------")
console.log("Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result")

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````````")

function evenOrOdd(n){
    if(n%2 === 0){
        return n /2 ;
    }
    else{
        return n * 2;
    }
}

let multiplyOrDivide = evenOrOdd(5);


console.log(multiplyOrDivide);

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.");
console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````````");

function arrayAvg(array){
    let sum = 0;
    console.log(array.length);
    for(number of array){
        sum = number + sum;
        
    }
    return sum / array.length;


}

let resultAvg = arrayAvg([1,2,3,100,5,6,7,8,9,10]);
console.log(resultAvg);





console.log("-------------------------------------------------------------------------------------------------------------")
console.log("Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.")
console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````````")

function  count_zero(binaryString){
    let count = 0;
    for(let i = 0; i < binaryString.length; i++){
        if(binaryString[i] === '0'){
            count++;
        }
        console.log(count);

    }
    console.log("Total number of 0's in the binary string: " + count);
}

count_zero("1010101000");








console.log("-------------------------------------------------------------------------------------------------------------")

console.log("Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd")
console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````````")

function odd_even(value){
    if(value % 2 ===0){
        return "even"
    }
    return "odd";
}

let resultOddEven = odd_even(5);
console.log(resultOddEven);





console.log("-------------------------------------------------------------------------------------------------------------")
console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````````")