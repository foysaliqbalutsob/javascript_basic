const  price = [2000,4000,2500,2700,3100,1200,8000];

function getMin(numbers){
    let min = numbers[0]
    
    for(const number of numbers){
        if(number<min){
            min = number;

        }
    }
    return min;
}


const cheap = getMin(price);
console.log("cheapest number is: ",cheap);
