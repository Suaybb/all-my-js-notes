// Remove and Changing Nodes

const taskList = document.querySelector('#task-list');

// Removing element

// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);


// Removing attribute

// taskList.children[0].removeAttribute('class');

// Replacing element

const card_header = document.querySelector('.card-header');

const h2 = document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('My Fucking List'));

const parent = card_header.parentElement;

parent.replaceChild(h2, card_header);

console.log(parent);

console.log(card_header);