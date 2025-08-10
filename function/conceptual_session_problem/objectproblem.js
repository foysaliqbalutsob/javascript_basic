function findAddress(obj){
    let street, house, society;

    if(obj.street !== undefined){
        street = obj.street;
    }
    else if(obj.street === undefined){
        street = "__"
    }
    
    if(obj.house === undefined){
        house = "__"
    }

    else if(obj.house !== undefined){
        house = obj.house;

    }
    if(obj.society !== undefined){
        society = obj.society
    }
    else if (obj.society === undefined){
        society = "_"
    }
    console.log(`${street},${house},${society}`)
}

findAddress({street: 10 ,society:"Earth Perfect"});