const employees = [
    {name :"ashik",deignation :"junior developer",salary: 30000},
    {name :"azizur",deignation :"developer",salary: 35000},
    {name :"Emon",deignation :"Ux/UI designer",salary: 20000},
    {name :"sajid",deignation :"Tester",salary: 50000},
    {name :"Anik Das",deignation :"senior developer",salary: 55000},
]

employees[0].name = "Foysal";
const first_employees_name = employees[0].name;
console.log(first_employees_name);

for(const employee of employees){
    console.log(employee);
    console.log(employee.salary)
}


for(const emp of employees){
    const person = emp.name
    emp.name[0] = "a"
    const position =emp.deignation;
    const salary = emp.salary;
    console.log(person);
    console.log("Mr. " + person + " is a " + position + " and his salary is " + salary);
    console.log("--------------------------------------------------");
}