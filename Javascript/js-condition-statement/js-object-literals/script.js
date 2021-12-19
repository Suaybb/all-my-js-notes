// Object Literals

let val;

let person = {
    fname: 'Suayb',
    lname: 'Kiris',
    age: 7,
    hobbies: ['music', 'book'],
    address: {
        city: 'Kastamonu',
        country: 'Turkey'
    },
    getBirthYear: function () {
        return 2018 - this.age;
    }
};

val = person.getBirthYear();

console.log(val);


var people = [
    {fname: 'Suayb', lname: 'Kiris'},
    {fname: 'Kubra', lname: 'Kiris'}
]