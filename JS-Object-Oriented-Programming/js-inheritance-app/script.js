// Inheritance App 


function Person(name) {
    this.name = name;
}


Person.prototype.Introduce = function () {
    console.log(`Hello my name is ${this.name}`);
}


let p1 = new Person('Suayb');
p1.Introduce();

console.log(p1);

// Teacher constructor

function Teacher(name, branch) {

    Person.call(this, name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.Teach = function () {
    console.log(`I teach ${this.branch}`)
}

let t1 = new Teacher('Kubra', 'Math');

console.log(t1);


// Student constructor

function Student(name, number) {
    Person.call(this, name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.Study = function () {
    console.log(`I study javascript`);
}

let s1 = new Student('Elif', 100);

s1.Introduce();
s1.Study();

// Headmaster constructor

function HeadMaster(name, branch) { 
    Teacher.call(this, name, branch);
}

HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;

HeadMaster.prototype.ShareTask = function(){
    console.log('Shared all task');
}

let h1 = new HeadMaster('Recep', 'History');

h1.name;
h1.branch;
h1.Introduce();
h1.Teach();
h1.ShareTask();
console.log(h1);
