const num =  [8, 5, 7, 9, 2, 4, 7, 1, 4];
console.log(num.sort());


const friends = ['aohn', 'baane', 'aaakoack', 'maill'];
console.log(friends.sort());


const numbers = [152,255 ,40, 55, 16, 10, 45, 65, 78 ,12, 5 ,1, 9, 76, 15 ,17, 63,34];
const accending_sort_number = numbers.sort(function(a,b){return a-b});
console.log(accending_sort_number);

const decending_sort_number = numbers.sort(function(a,b){return b-a});

console.log(decending_sort_number);