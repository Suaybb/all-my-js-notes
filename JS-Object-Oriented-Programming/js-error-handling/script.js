// Error Handling Try & Catch

// SyntaxError
// TypeError
// URIError
// Reference Error

// try {
//     console.log(f());
// } catch (e) {

//     console.log(e);
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e instanceof ReferenceError);
//     console.log(e instanceof TypeError);
//     console.log(typeof e);
// }


// var obj = {
//     name: 'Suayb'
// }

// try {
//     console.log(obj.name);
//     throw new Error('Lname is empty');

// } catch (e) {
//     console.log(e);

// } finally {
//     // Always execute this block
//     console.log('Hello motherfucker');
// }


//Examples


document.querySelector('#myBtn').addEventListener('click', (e) => {
    var name = document.querySelector('#name');
    var age = document.querySelector('#age');
    var error = document.querySelector('#error');
    error.innerHTML = '';

    try {
        if (name.value.length > 5 || name.value.length < 10) {
            throw new Error('Character min 6 max 9');
        }
        if (isNaN(age.value)) {
            throw new Error('Enter a number');
        }

    } catch (e) {
        error.innerHTML = e.message;
    } finally {
        name.value = '';
        age.value = '';
    }

    e.preventDefault();

});




