// Callback Functions

var val;

function multipleByTwo(a, b, c, callback) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = callback(arguments[i] * 2);
    }
    return arr;
}

function addOne(a) {
    return a + 1;
}


//Example of callback function 

// val = multipleByTwo(5, 10, 15, addOne);

val = multipleByTwo(1, 2, 3, function (a) {
    return a + 1;
});

// for (let i = 0; i < 3; i++){
//     val[i] = addOne(val[i]);
// } 

console.log(val);
