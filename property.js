const person = {
    name: "John",
    age: 30,
    salary:25000,
    occupation: "Engineer",
    country: "USA",
    hobbies: ["reading", "traveling", "gaming"],
    favoriteColor: "blue",
    pets: null,
    'PRESONAL address': {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
}
console.log(person.occupation)
console.log(person.country)
console.log(person.city)
console.log(person.isEmployed)

const income = person.salary;
console.log(income);
console.log(person['PRESONAL address'])
console.log(person['favoriteColor'])
const pet = person['pets']
console.log(pet)


// value change


person['occupation'] = 'Devops'
console.log(person)

// dot diye access kora jay tobe [] diye kora ucit

person.salary = 300000

console.log(person)