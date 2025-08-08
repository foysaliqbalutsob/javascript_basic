function add(a, b) {
  const total = a + b;
  return total;

}

const bill = add(100, 150);
console.log("The total bill is: " + bill);

function add2(a, b){
    return a + b;
}

const total = add2(200, 300);
console.log("The total is: " + total);


function doMath(num1, num2){
    const sum = add(num1, num2);
    const multiply  = sum * sum;
    const result = multiply - 10;
    return result;
    
}
const result = doMath(10, 20);
console.log("The final result is: " + result);


function isOdd(number){
    if(number% 2 ===1){
        return true;
    }
    return false;

}

console.log(isOdd(5)); // true
console.log(isOdd(10)); // false