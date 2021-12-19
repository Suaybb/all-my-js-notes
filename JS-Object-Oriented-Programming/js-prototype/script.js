// Prototype

// Inheritance 


let Person = function (name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}


Person.prototype.calculate = function () {
    return 2021 - this.yearOfBirth;
}

Person.prototype.lastName = 'Kiris';

let suayb = new Person('Suayb', 1996, 'Engineer');
let kubra = new Person('Kubra', 2006, 'Student');


console.log(Person);
console.log(Person.prototype);

console.log(suayb.hasOwnProperty('name'));
console.log(kubra.calculate());


// Examples

let Employee = function (name, salary) {

    if (!(this instanceof Employee)) {
        return new Employee(name, salary);
    }

    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function () {

    if (this.salary * 12 <= 20000) {
        this.salary = Math.floor(((this.salary * 12) * 20) / 100);
    } else if (this.salary * 12 <= 30000) {
        this.salary = Math.floor(((this.salary * 12) * 25) / 100);
    } else {
        this.salary = Math.floor(((this.salary * 12) * 27) / 100);
    }
}


var employee1 = new Employee('Suayb', 2000);
var employee2 = new Employee('Kubra', 3000);
var employee3 = new Employee('Elif', 1000);

employee1.calculateSalary();
employee2.calculateSalary();
employee3.calculateSalary();

console.log(`Suayb's tags: ${employee1.salary}`);
console.log(`Kubra's tags: ${employee2.salary}`);
console.log(`Elif's tags: ${employee3.salary}`);