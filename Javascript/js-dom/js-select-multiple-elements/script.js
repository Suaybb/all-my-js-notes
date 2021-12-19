// Select Multiple Element

// We can use classname feature for choose multiple element
// I mean document.getElementsByClassName()

let value;

value = document.getElementsByClassName('list-group-item');

value = document.getElementsByClassName('list-group-item')[0];
// value = value[1];

// console.log(value.style.color = 'blue'); 

// Other way for accessing

let new_value = document.getElementsByTagName('li');

// new_value = document.getElementsByTagName('a');
//new_value = document.getElementsByTagName('li');
new_value = document.getElementById('task-list').getElementsByTagName('li');

console.log(new_value);

// Best way for all fucking things

var new_val;

new_val = document.querySelectorAll('li');

new_val.forEach(element => {  
    console.log(element.style.fontStyle = 'italic');
});
