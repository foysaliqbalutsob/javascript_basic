function tenTimes(x){
    const result = x * 10;
    return result;
}
function halfOf(number) {
    const result = number / 2;
    return result;
}

tenTimes(5);
halfOf(100);

const result = tenTimes(5);

console.log("The result is: " + result);

const half = halfOf(100);
console.log("Half of 100 is: " + half);