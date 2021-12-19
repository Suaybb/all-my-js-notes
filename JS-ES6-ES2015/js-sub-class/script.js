// Sub class

// In ES5

var PersonES5 = function (name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;

}


PersonES5.prototype.ageCalculate = function () {
    console.log(2021 - this.age);
}


var p1 = new PersonES5('suayb', 'kiris', 1997);

console.log(p1);
p1.ageCalculate();


// Sub Class ES5

function CustomerES5(name, surname, age, username) {

    PersonES5.call(this, name, surname, age);
    this.username = username;

}


CustomerES5.prototype = Object.create(PersonES5.prototype);
CustomerES5.prototype.constructor = CustomerES5;

var c1 = new CustomerES5('Elif', 'Kiris', 2009, 'elifkiris');

c1.ageCalculate();

console.log(c1);

// But more efficient way in ES6

class PersonES6 {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    sayHi() {
        console.log(`Hello I'm ${this.name} ${this.surname}`);
    }

}


class CustomerES6 extends PersonES6 {

    constructor(name, surname, age) {
        super(name, surname);
        this.age = age;
    }

}

let c2 = new CustomerES6('Suayb', 'Kiris', 25);

c2.sayHi();
console.log(c2);


