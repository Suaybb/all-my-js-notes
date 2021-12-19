// Maps : key/value pairs (collection)

let val;

const numbers = new Map();

numbers.set(1, 'one');
numbers.set('2', 2);
numbers.set(3, 3);
numbers.set('four', 'four');

val = numbers;

// Get map value
val = numbers.get(1);
val = numbers.get('four');

// Get sizeof map
val = numbers.size;

// Get has value return boolean
val = numbers.has('2');

// Remove an element
val = numbers.delete(3);

// Remove all element
// numbers.clear();

// Write in screen

for (var [k, v] of numbers) {
    console.log(`Key: ${k} Value: ${v}`);
}

for (var [k, v] of numbers.entries()) {
    console.log(`Key: ${k} Value: ${v}`);
}

for (var k of numbers.keys()) {
    console.log(`Key: ${k}`);
}

for (var v of numbers.values()) {
    console.log(`Value: ${v}`);
}

// Only write key
numbers.forEach(item1 => console.log(item1));

numbers.forEach((k, v) => {
    console.log(`Key: ${k} Value: ${v}`);
})


var first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

var second = new Map([
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
]);

var merged_map = new Map([...first, ...second]);

console.log(merged_map);

console.log(val);