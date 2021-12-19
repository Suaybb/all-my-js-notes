// Constructor


// Object Literals
// let person = {
//     name: 'Suayb',
//     age: '25',
//     job: 'engineer'
// }

// console.log(person);

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculate = function () {
//         return 2021 - this.yearOfBirth;
//     }
// }

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculate = function () {
        return 2021 - this.yearOfBirth;
    }

}


// Create instances
let suayb = new Person('Suayb', 1996, 'Engineer');
let kubra = new Person('Kubra', 2006, 'Student');

console.log(suayb.name);
console.log(kubra.name);

console.log(suayb.calculate());
console.log(kubra.calculate());