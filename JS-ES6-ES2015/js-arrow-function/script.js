// Arrow Function


// ES5

let welcomeES5 = function () {
    console.log('Hello from ES5');
}

welcomeES5();

// ES6 

let welcomeES6 = () => {
    console.log('Hello from ES6');
};

// If exist one line code
let welcomEs6 = () => console.log('Another way');

welcomeES6();
welcomEs6();

let splitES6 = text => text.split(' ');

console.log(splitES6('Hello friend how are you?'));


let getProductES5 = function (id, name) {
    return {
        id: id,
        name: name
    }
}


let getProductES6 = (id, name) => (
    {
        id: id,
        name: name
    }
);

console.log(getProductES6('1', 'IPhone'));

const phones = [
    { name: 'Iphone 8', price: 3000 },
    { name: 'Iphone 6', price: 2000 },
    { name: 'Iphone 7', price: 1000 },
    { name: 'Iphone 5', price: 4000 },
]

// ES5
let getPriceES5 = phones.map(function (phone) {
    return phone.price;
});

console.log(getPriceES5);

// ES 6
let getNameES6 = phones.map(phone => phone.name);

console.log(getNameES6);

// ES5 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let getEvenES5 = arr.filter(function (a) {
    return a % 2 == 0;
});

console.log(getEvenES5);


// ES6

let getEvenES6 = arr.filter(a => a % 2 === 0);

console.log(getEvenES6);