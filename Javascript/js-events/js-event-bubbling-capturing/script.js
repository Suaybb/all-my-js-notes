// Event bubbling 

const form = document.querySelector('form');
const card_body = form.parentElement;
const card = card_body.parentElement;
const container = card.parentElement;

// form.addEventListener('click', e => {
//     console.log('form');
//      
// });

// card_body.addEventListener('click', e => {
//     console.log('card_body');
//      
// });

// card.addEventListener('click', e => {
//     console.log('card');
//      
// });

// container.addEventListener('click', e => {
//     console.log('container ');
//      
// });


// Reverse of bubbling from outside to inside

// Event capturing

// form.addEventListener('click', e => {
//     console.log('form');
// }, true);

// card_body.addEventListener('click', e => {
//     console.log('card_body');
// }, true);

// card.addEventListener('click', e => {
//     console.log('card');
// }, true);

// container.addEventListener('click', e => {
//     console.log('container ');
// }, true);


const icon = document.querySelectorAll('.fa-times');
// icon.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log(e.target);
//         e.preventDefault();
//     });
// });

const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
});




