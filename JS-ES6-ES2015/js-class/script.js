// Class

// ES5

// Constructor function
var PersonES5 = function (name, job, year) {
    this.name = name;
    this.job = job;
    this.year = year;
}


PersonES5.prototype.calculateAge = function () {
    return 2021 - this.year;
}


var suayb = new PersonES5('Suayb', 'Engineer', 1996);

console.log(suayb.calculateAge());


// ES6 

// Create class


class PersonES6 {
    constructor(name, job, year){
        this.name = name;
        this.job = job;
        this.year = year;
    }

    calculateAge(){
        return 2021 - this.year;
    }
}


var elif = new PersonES6('Elif', 'Student', 2009);



console.log(elif);
console.log(elif.calculateAge());





