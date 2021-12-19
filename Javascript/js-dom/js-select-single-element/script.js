// Select Single Element

var value;

value = document.getElementById('header');// Select item getElById
value = document.getElementById('header').id;
value = document.getElementById('header').className;

value = document.getElementById('header');// You can choose one time and then use 
//val = val.className;

// You can change header element style features
value.style.fontSize = '30px';
value.style.color = 'blue';
value.style.fontStyle = 'italic';

var new_header_text = 'My Todo App';// Add new header text
value.innerText = new_header_text;

value.innerHTML = '<h5>My Todo App</b>';// Add new html element

// Alternative usage instead of getElementById()

// document.querySelector()

var new_value;

// This function choose the firts header(etc.) element it found in html collections.

new_value = document.querySelector('#header');
new_value = document.querySelector('.card-header');
new_value = document.querySelector('div');// Choose first div element in htmlCollection.

// This function returning all element what you write in parameter
new_value = document.querySelectorAll('div');

new_value = document.querySelector('li');
// If you use className variable, you can create a new class
// but this variable will remove all class which before existing code
document.querySelector('li').className ='list-group-item list-group-item-primary';

// You can add new class
document.querySelector('li').classList.add('active');

console.log(new_value);