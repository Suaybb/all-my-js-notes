// Functions that Return Functions

function Question(hobby) {

    switch (hobby) {
        case 'book':
            return function (name) {
                console.log(`${name} Do you read a book?`);
            }
            break;
        case 'software':
            return function (name, lname) {
                console.log(`${name.concat(lname)}  Are you interested in software?`);
            }
            break;
        default:
            return function (name) {
                console.log(`${name} Do u have any question?`);
            }
    }

}



var askedQuestion = Question('software');
var askedQuestion1 = Question('book');
var askedQuestion2 = Question('music');

askedQuestion('Suayb', 'Kiris');
askedQuestion1('Suayb');
askedQuestion2('Elif');

