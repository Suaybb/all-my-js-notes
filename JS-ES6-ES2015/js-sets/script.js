// Sets (Collection - Unique value)
// We hold a unique information in sets

let val;

var mySet = new Set();

mySet.add(1);
mySet.add(2);
// If we add same value
mySet.add(2);
// collections doenst give an error but doesnt add a same value twice
mySet.add('two');
mySet.add({
    a: 1, b: 2,
});
mySet.add(3);
mySet.add(5);


var obj = { a: 1, b: 2 };
mySet.add(obj);
// But in this case acceptable from sets
// Because They has different references in ram 

// size, keys, values, has, delete, entries functions are same like maps

// Or we can convert array

console.log(Array.from(mySet));


// Intersect common value of two sets

var mySet2 = new Set([1, 2, 3, 4, 5]);

var intersect = new Set(Array.from(mySet).filter(item => mySet2.has(item)));

console.log(intersect);


// Difference

var difference = new Set([...mySet].filter(item => !mySet2.has(item)));

console.log(difference);