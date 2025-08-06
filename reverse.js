const sentance = "I am learning web dev."

for(const letter of sentance){
    console.log(letter);

}

let reverse ="";
for(const letter of sentance){
    reverse = letter + reverse;
    

}
console.log(reverse)

const sen = "this is a fucking country";

let rev ='';
for(i=0; i < sen.length; i++){
    // console.log(i)
    // console.log(sen[i])
    rev =sen[i] +rev;
   
}
 console.log(rev);