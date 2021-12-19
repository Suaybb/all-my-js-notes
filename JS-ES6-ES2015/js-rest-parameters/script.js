// Rest Parameters


// ES5

function sumES5() {
    let arr = Array.prototype.slice.call(arguments);
    let total = 0;
    arr.forEach(function (item) {
        total += item;
    });
    return total;
}

console.log(sumES5(10, 20, 30));


// ES6 rest parametes  
// This function converts the parameters sent to it to array.
// visa versa spread operator


function sumES6(...arr) {
    let total = 0;
    arr.forEach(item => total += item)
    return total;
}

console.log(sumES6(10, 20, 30));


function isDriver(...years) {
    years.forEach(year => console.log(2021 - year >= 18));
}

isDriver(1990, 1996, 2005, 2012, 2004);


// If We want a parameter with rest-parameter
// We must put in head

function driver(age, ...years) {
    years.forEach(year => console.log(2021 - year >= age));
}

driver(17,1990, 1996, 2005, 2012, 2004);
