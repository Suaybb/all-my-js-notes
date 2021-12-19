// Add Todo Items


const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

// Load items when page open or refresh

loadItems();

function loadItems() {
    items = getItemsFromLS();

    items.forEach(item => {
        createElement(item);
    });
}

function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    return items;
}

function setItemsToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItemFromLS(text) {
    items = getItemsFromLS();
    if (items.length === 1) {
        items.pop();
    } else {
        items.forEach(function (item, index) {
            if (item === text) {
                items.splice(item, 1);
            }
        });
    }

    localStorage.setItem('items', JSON.stringify(items));
}

// Call event listener
eventListener();

function eventListener() {
    // Submit event
    form.addEventListener('submit', addNewItem);

    // Click event
    taskList.addEventListener('click', deleteItem);

    // Click event
    btnDeleteAll.addEventListener('click', deleteAllItem);
}


// Add new item
function addNewItem(e) {

    if (input.value === '') {
        alert('Field must be fill..');
    }

    createElement(input.value);

    // Save to local storage
    setItemsToLS(input.value);

    input.value = '';
    e.preventDefault();
}


function createElement(input_text) {
    // Create li element
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input_text));

    // Create a element

    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');

    // Create i element

    const i = document.createElement('i');
    i.className = 'fas fa-times';

    // Add tag 
    a.appendChild(i);
    li.appendChild(a);
    taskList.appendChild(li);


    console.log(taskList);
}


// Delete an item

function deleteItem(event) {
    let deletedText;
    if (event.target.className === 'fas fa-times') {
        event.target.parentElement.parentElement.remove();

        // Delete item from LS
        deleteItemFromLS(event.target.parentElement.parentElement.textContent);
    }

    event.preventDefault();
}

// Delete All Item

function deleteAllItem(event) {


    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();


    // taskList.innerHTML = '';

    // taskList.remove();

    // taskList.childNodes.forEach(item => {
    //     if (item.nodeType === 1) {
    //         item.remove();
    //     }
    // });

    event.preventDefault();
}





