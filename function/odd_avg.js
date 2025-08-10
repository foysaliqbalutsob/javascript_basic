function oddAverage(numbers) {
    let sum = 0;
    let count =0;
    let average;
    const newOddArray = [];

    for(const number of numbers){
        
        if(number % 2 !==0){
        sum = sum + number;
        count++;
        newOddArray.push(number);
        

        }
    }
    average = sum / count;
    console.log("Odd numbers: " + newOddArray);    
    console.log("sum: " + sum);
    console.log("count: " + count);
    console.log("avg: " + average);
    

   
}
oddAverage([10,15,1,6,7,3])