// Immediate Function

// This function only one time execute while page first load

// function welcome(){

//     var days = ['Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'St'];

//     var today = new Date();

//     var msg = `Welcome.Today is ${days[today.getDay()]}`;

//     return msg;

// }

//console.log(welcome());


// First Usage
// (function(){

// })();

// Second Usage
(function (name) {

    var days = ['Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'St'];
    var today = new Date();
    var msg = `Welcome ${name}.Today is ${days[today.getDay()]}`;
    console.log(msg);

}('Suayb'));

