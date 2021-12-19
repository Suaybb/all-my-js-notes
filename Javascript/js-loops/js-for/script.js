// For Loop

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// For-in

let cars = ['Bmw', 'Mercedes', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//Foreach

cars.forEach(function (element) {
    console.log(element);
});

var people = [
    { fname: 'Suayb', lname: 'Kiris' },
    { fname: 'Kubra', lname: 'Kiris' },
    { fname: 'Elif', lname: 'Kiris' }
];

// Map 

var val = people.map(function (element) {
    return element.fname.concat(' ', element.lname);
});

console.log(val);