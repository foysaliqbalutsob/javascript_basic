function cubeNumber(number) {
}


function sortMaker(Array){
    
        if(Array[0] < 0 || Array[1] < 0){
            console.log("Invalid");
        }
        else if(Array[0] === Array[1]){
            console.log("Equal");
        }
        else{
            const sort = Array.sort(function(a,b){ return a-b;})
            console.log(Array);
        }
    }



sortMaker([100, 4])