// Getter Setter

const person = {
    name: 'Suayb',
    lname: 'Kiris',
    // get fullname (){
    //     return `${this.name} ${this.lname}`;
    // },
    // set fullname(fullname){
    //     let name = fullname.split(' ');
    //     this.name = name[0];
    //     this.lname = name[1];
    // }
}

const student = {
    name: 'Suayb',
    lname: 'Kiris',
}

Object.defineProperty(student, 'fullname', {
    get() {
        return `${this.name} ${this.lname}`
    },
    set(value) {
        const parts = value.split(' ');
        this.name = parts[0];
        this.lname = parts[1];
    }
});

Object.defineProperty(student, 'age', {
    value : 50,
    writable : true// Set method will execute 
});

student.age = 55;

student.fullname = 'Suayb Kiris';
console.log(student.age);

console.log(student.fullname);
console.log(student.name);
console.log(student);
