function findMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else if(num1 == num2){
        return "equal";
    }
    else{
    return num2;
    }
}
console.log(findMax(35,35))

function FindMax(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num1){
        return num2

    }
    else if(num1 == num2 && num2 == num3){
        return "equal";
    }
    return num3;
}


console.log(FindMax(17,17,17))


function findMaxMath(x,y,z){
    return Math.max(x,y,z);
}
console.log(findMaxMath(7,-1,10));