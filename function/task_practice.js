console.log("Write a function to convert temperature from Celsius to Fahrenheit");

function convertCelsius (celsius){
     const result = (celsius * 9/5) + 32;
     return result;

}
console.log(convertCelsius(38));

console.log("----------------------------------------------------------");
console.log("You are given an array of numbers. Count how many times the a number is repeated in the array");
const numbers = [5,6,11,12,98, 5];

function ArrayCheck(numbers ,find){
    let count = 0; 
    for (const number of numbers){
        
        if(number===find)
            count++;
    }

    console.log(count)

}

ArrayCheck([5,6,11,12,98, 5],11)

console.log("---------------------------------------------------------");
console.log("Write a function to count the number of vowels in a string.")


function vowelChecker(string){
    const vowel= ['a','e','i','o','u',];
    let count =0;
    const str= string.toLowerCase();
    for(const letter of str){
        if(vowel.includes(letter))
            count ++;
    }
    console.log(count)
}

vowelChecker('Ami ToMay BhAlObaShI')




function toFindLongestWord(str){
    const words =str.split(" ");
    let largestWord = "";
    
    for(const word of words){
        if(word.length>largestWord.length){
            largestWord = word;
        }
    
    }
    return largestWord;

}

console.log(toFindLongestWord("I am learning Programming to become a programmer"));