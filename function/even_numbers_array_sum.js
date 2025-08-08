function evenNumbersOnly(numbers){
    const evenNumbers = [];
    for(const number of numbers){

        if(number % 2 === 0){
            evenNumbers.push(number)
        }

    }
    console.log(evenNumbers);
    
}
evenNumbersOnly([1, 2, 3, 4, 5, 6]);

function evenNumbersArraySum(numbers){
    let sum = 0;
    let evenNumbers = [];

    for (const number of numbers){
        if(number%2 ===0){
            sum += number;
            evenNumbers.push(number);

        }
        
    }
    console.log(evenNumbers);
    console.log(sum);

}

evenNumbersArraySum([4,5,6,7,8,9,10]);