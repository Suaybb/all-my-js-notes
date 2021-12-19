// Spread Operator

function getTotal(a, b, c) {
    return a + b + c;
}

let numbers = [10, 20, 30];

// ES5 
console.log(getTotal.apply(null, numbers));

// ES6 
console.log(getTotal(...numbers));


let arr1 = ['two', 'three'];
let arr2 = ['one', 'four', 'five'];

arr1.push(...arr2);
console.log(arr1);

arr1.unshift(...arr2);
console.log(arr1);

let arr3 = [...arr1, ...arr2];
console.log(arr3);

let h1 = document.querySelector('h1');
let divs = document.querySelectorAll('div');

let tag_arr = [h1, ...divs];
console.log(tag_arr);


tag_arr.forEach(item => item.style.color = 'blue');
