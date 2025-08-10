function noDuplicate(Array){
    
    let newArray =[];

    for(const name of Array){
        if(newArray.includes(name) === false){
            newArray.push(name);
        }

    }
return newArray;
}
console.log(noDuplicate(['foysal','Aziz','Emon','asik','Aziz','asik','masud','foysal','Emon']))