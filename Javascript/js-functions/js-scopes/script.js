// Scopes

// Global Scopes

var number = 10;// Global scope variable
var num = 22;

function logNumber() {
    console.log(number);
}


function logNumber2() {
    var num = 12;
    console.log(num);
}

if (true) { 
    num = 32; 
}

//logNumber();
console.log(num);
logNumber2();
console.log(num);
console.log(number);

//console.log(window);

// Local Scopes


