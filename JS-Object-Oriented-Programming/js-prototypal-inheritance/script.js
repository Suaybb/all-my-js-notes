// Prototypal Inheritance


let Person = function (name, year, job) {
    
    if(!(this instanceof Person || this instanceof Teacher)){
        return new Person(name, year, job);
    }

    this.name = name;
    this.year = year;    
    this.job = job;
}


Person.prototype.ageCalculator = function() {
    return 2021 - this.year;
}

let suayb = new Person('Suayb', 1996, 'Engineer');


let Teacher = function (name, year, job, subject){

    if(!(this instanceof Teacher)){
        return new Teacher(name, year, job, subject);
    }
    // Now we inherit common area from person object
    Person.call(this, name, year, job);

    // This variable is only belong to teacher object
    this.subject = subject;
}

// Now we inherit common area from Person object 
// and this areas avaiable and useful
// But We didnt inherit prototype method our Person Object
// So We dont use any fucntions or things in the Person prototype
// For example
// console.log(kubra.ageCalculator); 
// This code parts will generate a exceptions

Teacher.prototype = Object.create(Person.prototype);

// Set Teacher constructor
Teacher.prototype.constructor = Teacher;


// Now we create a fucntions teacher in prototype

Teacher.prototype.greetings = function(){
    return `Hello my name is ${this.name}`;
}

let kubra = new Teacher('Kubra', 2006, 'Teacher', 'History');


console.log(kubra.greetings()); 
