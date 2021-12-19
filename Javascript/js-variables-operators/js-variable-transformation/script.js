let num1 = '10';
let num2 = '20';

let total = num1 + num2;

console.log(total);
//Output will be 1020 because variable
//type is string and concat both them

let num3 = number('10');
let num4 = number('20');

let total1 = num2 + num3;

console.log(total1);
//Now output is equal to total of them
//I mean 30

//There is another ways for this

    let val;

    // Number to String
    val = String(10);
    
    // Bool to String
    val = String(true);

    // Date to String
    val = String(new Date());

    // Array to String
    val = String([1, 2, 3, 4]);
    
    // toString() 
    val = (10).toString();
    val = (false).toString();

    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    let val2;

    // String to Number
    val2 = Number('10');
    //val2 = Number('a') //NaN Error

    // Bool to Number
    val2 = Number(true);

    // Null to Number
    val2 = Number(null);

    // Arrat to Number
    val2 = Number([1, 2, 3]); //NaN Error

    console.log(val2);
    console.log(typeof val2);

    //ParseInt
    //ParseFloat

    let val3;

    val3 = parseInt('10');
    val3 = parseInt('10.5'); //Output 10
    val3 = parseFloat('10.5') //Output 10.5
    
    console.log(val3);
    console.log(typeof val3);
