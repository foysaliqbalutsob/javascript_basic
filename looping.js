let fruit = ["apple", "banana", "cherry", "date"];
for(let i = 0; i<fruit.length; i++){
    console.log(fruit[i]);
}

num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let i = 0;
while(i<num.length){
//     console.log(num[i]);
//     i++;
//
if(num[i] % 2 ==0 ){
    console.log("This is an even number: " + num[i]);
}
else{
    console.log("This is an odd number: " + num[i]);
}
i++;

}