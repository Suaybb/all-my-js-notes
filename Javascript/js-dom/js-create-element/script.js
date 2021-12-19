// Create element


const li = document.createElement('li');


// Add class

li.className = 'list-group-item';
li.classList.add('list-group-item-primary');
li.classList.add('text-capitalize');

// Add attribute

li.setAttribute('title', 'new to do list');

// Text node

const text = document.createTextNode('new todo list');
li.appendChild(text);

// Create element that name a
const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item float-right';

// Create i tag to a element
const i = document.createElement('i');
i.className = 'fas fa-times';

// Append i element to li tag
a.appendChild(i);

// Append a element to li tag
li.appendChild(a);


// Append li element to ul tag
let val = document.querySelector('#task-list').appendChild(li);



console.log(val);

console.log(li);