// Object Create


let personProto = {
    calculateAge: function () {
        return 2021 - this.yearOfBirth;
    }
}

let elif = Object.create(personProto);

console.log(elif);

elif.name = 'Elif';
elif.yearOfBirth = 2009;
elif.job = 'Student';

console.log(elif);

console.log(elif.calculateAge());

// Another way for create a new object

let kubra = Object.create(personProto, {
    name: { value: 'Kubra' },
    yearOfBirth: { value: 2006 },
    job: { value: 'Student' }
}); 

console.log(kubra);