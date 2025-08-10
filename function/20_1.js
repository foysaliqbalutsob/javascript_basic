function inchToFeet(inches) {
  let feet = inches / 12;
  let inch = inches % 12;
  let feetint = parseInt(feet);
//   console.log( feetint + " feet" + " Inches: " + inch );
result =( feetint + " feet" + " Inches: " + inch );
return result
}

inchToFeet(75);


function mileToKilo(miles){
    let kilometer = miles * 1.60934;
    return kilometer;
}

console.log(mileToKilo(5));


function leapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    return false;
}
console.log(leapYear(2016));
