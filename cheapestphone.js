const phones =[
    {brand: "Samsung", model: "Galaxy S24",price: 200000,color: "Black",storage: "256GB",is5G: true},
    { brand: "Iphone", model: "15-pro", price: 120000, color: "Gold", storage: "256GB", is5G: true },
    { brand: "Apple", model: "iPhone 15 Pro", price: 180000, color: "White", storage: "512GB", is5G: true },
    { brand: "Xiaomi", model: "Mi 13 Ultra", price: 9000, color: "Green", storage: "256GB", is5G: true },
    { brand: "OnePlus", model: "12 Pro", price: 95000, color: "Blue", storage: "256GB", is5G: true }
]

function getCheapestPhones(){
    let min = phones[0];
    
    for(const phone of phones){
        if(phone.price<min.price){
            min = phone;
        }  
    }
    return min;
    }

const cheapPhone  =  getCheapestPhones();
console.log(cheapPhone);