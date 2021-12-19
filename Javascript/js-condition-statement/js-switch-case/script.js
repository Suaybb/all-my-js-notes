// Switch - case statements

var category = 'cellphone';

switch (category) {
    case 'cellphone':
        console.log('phone category');
        break;

    case 'computer':
        console.log('computer category');
        break;

    default:
        console.log('wrong category');
}

var day;

switch (new Date().getDay() + 1) {
    case 0:
    case 6:
        day = 'weekend';
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = 'weekday';
        break;
}

console.log(new Date().getDay());
console.log(`Today ${day}.`);


const my_age = 25;

switch (true) {
    case (my_age < 25):
        console.log(`not yet`);
        break;

    case (my_age >= 25):
        console.log(`if you want but not suggest`);
        break;

    case (my_age > 30):
        console.log(`Doesnt matter from this time`);
        break;
}




// Some Example

var car_model = new Date('04/20/2017');

var first_maintenance = new Date();
first_maintenance.setHours(0, 0, 0, 0);
first_maintenance.setFullYear(car_model.getFullYear() + 1);
first_maintenance.setMonth(car_model.getMonth());
first_maintenance.setDate(car_model.getDate());

var second_maintenance = new Date();
second_maintenance.setHours(0, 0, 0, 0);
second_maintenance.setFullYear(car_model.getFullYear() + 2);
second_maintenance.setMonth(car_model.getMonth());
second_maintenance.setDate(car_model.getDate());

var third_maintenance = new Date();
third_maintenance.setHours(0, 0, 0, 0);
third_maintenance.setFullYear(car_model.getFullYear() + 3);
third_maintenance.setMonth(car_model.getMonth());
third_maintenance.setDate(car_model.getDate());


console.log(car_model);

while (car_model.getFullYear() <= new Date().getFullYear()) {


    switch (true) {
        case (car_model.getFullYear() == first_maintenance.getFullYear()):
            console.log(`First maintenance made (${first_maintenance}).Car Model ${car_model}`);
            break;

        case (car_model.getFullYear() == second_maintenance.getFullYear()):
            console.log(`Second maintenance made (${second_maintenance}).Car Model ${car_model}`);
            break;

        case (car_model.getFullYear() == third_maintenance.getFullYear()):
            console.log(`Third maintenance made (${second_maintenance}).Car Model ${car_model}`);
            break;

        default:
            break;
    }
    car_model.setFullYear(car_model.getFullYear() + 1);

}



