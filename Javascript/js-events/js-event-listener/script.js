// Event listener


const btn = document.querySelector('#btnDeleteAll');


// We can use this like

// btn.addEventListener('click', function () {
//     console.log('btn clicked');
// });

// Or use this like 

// btn.addEventListener('click', btnClicked);

// function btnClicked() {
//     console.log('Btn clicked');
// }

// Or

btn.addEventListener('click', e => {
    // console.log(e);
    // We prevent this elements href
    e.preventDefault();

    let val;

    // Which button was clicked.
    // A function can be associated with 
    // more than one element.
    val = e.target;
    val = e.target.id;
    val = e.target.classList;
    // e.target.style.color = 'white';
    val = e.type;
    console.log(val);


    //console.log('Btn Clicked');
});