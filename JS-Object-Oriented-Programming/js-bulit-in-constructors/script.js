// Built in Constructor

// String

// Literal
var str1 = 'Suayb';
// String constructor
var str2 = new String('Suayb');

console.log(str1);// Generate a string typeof string
console.log(str2);// Generate a string but type of object

console.log(typeof str1);
console.log(typeof str2);

if (str1 == str2) {
    console.log('Values are equal');
}

if (!(str1 === str2)) {
    console.log('But types are different');
}

String.prototype.doubleLetter = function () {
    let dblString = this;
    let temp_string='';
    for (let i = 0; i<dblString.length; i++){
        temp_string += dblString[i];
        temp_string += dblString[i];
    }
    return temp_string;
}


String.prototype.repeat = String.prototype.repeat || function(){
    console.log('Flow is go on here');
}

console.log('Suayb'.doubleLetter(this));
console.log('Suayb'.repeat(3));



// Number 
var num = 10;
var num1 = new Number(10);

// Boolean

var bool = true;
var bool1 = new Boolean(true);

// Object
// These are object but the others are primitive 
var obj = {
    name: 'Suayb'
}

var obj1 = new Object({
    name: 'Suayb'
});

// Array

var arr = ['suayb', 'elif', 'kubra'];
var arr1 = new Array('suayb', 'elif', 'kubra');




