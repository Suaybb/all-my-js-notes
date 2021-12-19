// Arrays in ES6

const boxes = document.querySelectorAll('.box');

// We want convert an array this boxes
// cause these are nodelist

let boxesES5 = Array.prototype.slice.call(boxes);

boxesES5.forEach(function (item) {
    item.style.backgroundColor = 'green';
});

console.log(boxesES5);

// But in ES6

Array.from(boxes).forEach(item => item.style.backgroundColor = 'purple');



// ES5

for (let i = 0; i < boxesES5.length; i++) {
    if (boxesES5[i].className == 'box blue') {
        continue;
    }
    boxesES5[i].textContent = 'I\'m changed';
    boxesES5[i].style.backgroundColor = 'blue';
}

// ES6

let boxesES6 = Array.from(boxes);

for (let box of boxesES6) {
    if (box.className == 'box blue') {
        continue;
    }
    box.textContent = 'Change';
    box.style.backgroundColor = 'Red';
}

// From 

// String will be convert an array
let char_arr = Array.from('Hello Friend');

const products = [
    { name: 'Samsung S8', price: 3000 },
    { name: 'Samsung S6', price: 1000 },
    { name: 'Samsung S7', price: 2000 },
    { name: 'Samsung S6', price: 2000 },
]

// Is there a value like that? 
console.log(Array.from(products, prd => prd.name == 'Samsung S8'));

// Only find one value what are you looking?
console.log(products.find(prd => prd.name == 'Samsung S7'));

// Find all value what are you searching?
console.log(products.filter(prd => prd.name == 'Samsung S6'))

// Find index number
// If exist return index, doesnt exist return -1
console.log(products.findIndex(prd => prd.price == 3000));


// Entries

let numbers = ['a', 'b', 'c'];

let entries_numbers = numbers.entries();

for(let i of entries_numbers){
    console.log(i);
}

// If you want only keys

let entries_key = numbers.keys();

for(let i of entries_key){
    console.log(i);
}

// Or value

let entries_value = numbers.values();

for (let i of entries_value) {
    console.log(i);
}

