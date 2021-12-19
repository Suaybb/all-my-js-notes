// Local & Session Storage


// Local Storage

// Set item
let fname = localStorage.setItem('fname', 'Suayb');
let lname = localStorage.setItem('lname', 'Kiris');
let hobbies = ['Books', 'Sporst', 'Software'];
localStorage.setItem('hobbies', JSON.stringify(hobbies));

// Get item

console.log(localStorage.getItem('fname'));
console.log(localStorage.getItem('lname'));
console.log(JSON.parse(localStorage.getItem('hobbies')));

// Remove item

localStorage.removeItem('fname');

// Clear all item

localStorage.clear();

console.log(localStorage);


// Session Storage

console.log(sessionStorage);