// Mouse Event

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


// Click event
// btn.addEventListener('click', eventHandler);
// ul.addEventListener('click', eventHandler);

// Double click

// btn.addEventListener('dblclick', eventHandler);

// Mouse down
// btn.addEventListener('mousedown', eventHandler);

// Mouse up
// btn.addEventListener('mouseup', eventHandler);

// Mouse enter
// this event type covers all elements
// ul.addEventListener('mouseenter', eventHandler);

// Mouse leave
// ul.addEventListener('mouseleave', eventHandler);

// Mouse over
// This event covers one place at a time
// ul.addEventListener('mouseover', eventHandler);

// Mouse out
// ul.addEventListener('mouseout', eventHandler);

// Mouse move
// Event is triggered during mouse movement

const h4 = document.querySelector('h4');
ul.addEventListener('mousemove', eventHandler);

function eventHandler(e) {
    //console.log(`Event type:${e.type}`);

    h4.textContent = `Mouse x coor:${e.offsetX},y coor:${e.offsetY}`;
}

