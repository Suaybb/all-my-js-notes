// Keyboard events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');

// input.addEventListener('keydown', eventHandler);
// input.addEventListener('keyup', eventHandler);
// input.addEventListener('keypress', eventHandler);

// input.addEventListener('focus', eventHandler);
// input.addEventListener('blur', eventHandler);

// input.addEventListener('cut', eventHandler);
// input.addEventListener('paste', eventHandler);

// Event trigger when we select the text we write
input.addEventListener('select', eventHandler);

// If you execute below code, add a select form tags
// select.addEventListener('change', eventHandler);

// We must prevent page refreshing cause We neccessary capture the event
// form.addEventListener('submit', eventHandler);


function eventHandler(e) {
    console.log(`Event type:${e.type}`);
    
    // e.preventDefault();
    // console.log(`Keycode:${e.keyCode}`);
    // console.log(`Value:${e.target.value}`);
    if(e.type == 'focus')
        e.target.style.backgroundColor = '#ac12da';
    else if (e.type == 'blur')
        e.target.style.backgroundColor = '#be3423';
}