// Declarations & Expressions


// Function  Declarations
function sum(a, b) {
    var c = a + b;
    return c;
}

console.log(sum(10, 20));


// Function Expressions

const sumNumber = function (a, b) {
    var c = a + b;
    return c;
}

console.log(sumNumber(20, 30));

const minus = function (a, b) {
    if (typeof a === 'undefined') { a = 0; }
    if (typeof b === "undefined") { b = 0; }

    var c = a + b;
    return c;
}

console.log(minus(10));


// Instead of Es6

const func = function (a = 0, b = 0) {
    var c = a + b;
    return c;
}

console.log(func(321));

// If we send a out of parameters for our function

function args() {
    var total = 0;
    for (let i = 0; i < 4; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(args(10, 20, 30, 40));














