const height = [65,45,67,58,35,55,78,91,66,10];

function getMax(numbers){
    let max =numbers[0];
    for(const number of numbers){
        if(number>max){
            max = number;

        }
            
    }
    return max;

}

const max = getMax(height);
console.log(max)


