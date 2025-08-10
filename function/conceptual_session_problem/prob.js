

/** Problem -03 ( Medicine Planner ) */

var lastDay = 11;

//write your code here

for(var i =1; i<=lastDay; i++){

if(i%3 === 0){

console.log(i + " - " + "medicine");


}

else{

console.log(i + " - " + "rest");


}

}

/** Problem 04 - (Delete / Store) */

var fileName= "pdfData.jpg";

//write your code here

if(fileName.includes(".pdf") || fileName.includes(".docx") ||fileName.startsWith("#")){

console.log("Store File");

}

else{

console.log("Delete");

}
