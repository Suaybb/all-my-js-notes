// Template Literals

    const fullName = 'Kubra Kiris';
    const city = 'Kastamonu';
    const yearOfBirth = 2006;

    let val;

    val = 'My name is ' + fullName + ' I\'m ' + (2021 - 2006) + ' years old.I live in ' + city;
    
    // Ternary Operator

    val = `My name is ${fullName}. I'm ${2021 - yearOfBirth >= 20 ? 'bebelek 18' : 'sebelek 18'} years old.I live in ${city}.`;

    console.log(val);
