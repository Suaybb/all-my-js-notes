// Call Apply Bind

var welcome = function (a, b) {
    console.log(`Welcome ${this.name} ${a} ${b}`);
}


var suayb = { name: 'Suayb' };
var elif = { name: 'Elif' };

welcome.call(suayb, 'How', 'are you?');
welcome.call(elif, 'How', 'are you?');

welcome.apply(suayb, ['How', 'are you?']);
welcome.apply(elif, ['How', 'are you?']);


// Bind function will return a function
var welcomeSuayb = welcome.bind(suayb);
welcomeSuayb('How', 'are you?');

var welcomeElif = welcome.bind(elif);
welcomeElif('How', 'are you?');


// Examples 

var num = {
    min: 0,
    max: 100,
    checkNumericRange: function (value) {
        if (value > this.min && value < this.max) {
            console.log('Entered number is between our values');
            return true;
        } else {
            console.log('Number is out of range');
            return false;
        }
    }
}

num.checkNumericRange(34);
num.checkNumericRange(120);

// If we use our generated function 

var num1 = { min: 20, max: 50 };

num.checkNumericRange.call(num1, 23);
num.checkNumericRange.call(num1, 76);

// Or Apply

num.checkNumericRange.apply(num1, [22]);

// Or Bind

calculateRange = num.checkNumericRange.bind(num1);
calculateRange(3);