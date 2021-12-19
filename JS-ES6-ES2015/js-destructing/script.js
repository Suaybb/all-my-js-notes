// Destructuring 

// Destructuring Assignment

var a, b, rest;

[a, b] = [10, 20];
console.log(a, b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(a, b, rest);

({ a, b } = { a: 10, b: 20 });
console.log(a, b);

({ a, b, ...rest } = { a: 10, b: 20, c: 1, d: 2, e: 3 });
console.log(a, b, rest);


// Array Destructuring

const arrConfig = ['localhost', '8080', '900'];

// // ES5 

// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeout = arrConfig[2];

// // ES6

// const [server1, port1, timeout1] = arrConfig;

// console.log(server1, port1, timeout1);


// Object Destructuring

const objConfig = {
    s: 'localhost',
    p: '8080',
    t: 900
}

// ES5
var s1 = objConfig.s;
var p1 = objConfig.p;
var t1 = objConfig.t;

// ES6
// Be must same variable name 
const { s, p, t } = objConfig;

console.log(s, p, t);


// If we want to get one element

let { timeout: time } = objConfig;

console.log(time);


// We can define a new variable if doesnt exist in obj

const objConfig1 = {
    server: 'localhost',
    port: '8080',
}

const { server, port, timeout = 1000 } = objConfig1;

console.log(server, port, timeout);


// If we want to match variable and array variable

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const [, , wed, , fri] = days;


console.log(wed, fri);





