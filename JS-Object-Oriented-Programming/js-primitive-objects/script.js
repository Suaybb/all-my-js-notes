// Primitive & Object

// Actually mentioned call by value call by reference

var a = 10;
var b = a;

console.log(a);
console.log(b);


var obj1 = {
    name: 'Suayb',
    age: 25
}

var obj2 = obj1;
obj1.age = 12;

console.log(obj1.age);
console.log(obj2.age);
