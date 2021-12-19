// This keyword


// ES5

let list1 = {
    category: 'Phone',
    names: ['Iphone', 'Samsung', 'Xiaomi'],
    call: function () {
        this.names.map(function (name) {
            console.log(`${name}`);
        });
    }
}

list1.call();

// Here is, There are 2 function
// We can access any value in list2 with use call(first) function
// But  dont access second function cause this (second) function
// Create a new function context vice versa
let list2 = {
    category: 'Phone',
    names: ['Iphone', 'Samsung', 'Xiaomi'],
    call: function () {
        var self = this;
        this.names.map(function (name) {
            console.log(`${self.category} ${name}`);
        });
    }
}

list2.call();

// But in ES6
// Arrow function doesnt create a new function context
let list3 = {
    category: 'Phone',
    names: ['Iphone', 'Samsung', 'Xiaomi'],
    call: function () {
        this.names.map((name) => {
            console.log(`${this.category} ${name}`);
        });
    }
}

list3.call();