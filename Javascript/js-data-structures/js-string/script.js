// String Methods

    var val;
    const fname = 'Suayb';
    const lname = 'Kiris';
    const age = '25';

    // String concat
    val = fname.concat(' ', lname);

    // String length 
    val = val.length;
    val = fname.concat(' ', lname);

    // String Uppercase
    val = val.toUpperCase();

    // String Lowercase
    val = val.toLowerCase();

    // String indexOf()
    val = val.indexOf('b'); 
    val = fname.concat(' ', lname);

    // String substring
    //val = val.substring(2, 8);

    // String slice
    //val = val.slice(5 , 7);

    // String replace
    val = val.replace('Suayb', 'kubra')
    val += '               ';
    
    // String trim
    val = val.trim();

    let hobbies = 'book, sport, software';

    // String split
    hobbies = hobbies.split(',');


    console.log(val);
    console.log(hobbies);