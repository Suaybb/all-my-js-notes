// Arrays

    let names = ['suayb', 'kubra', 'recep' , 'nazli', 'elif'];
    let years = [1996, 2006, 1972, 1972, 2009];
    let suayb = ['suayb', 'kiris', 1996, null, undefined, ['cinema', 'kitap']];

    // get array item
    console.log(names[0]);

    // set array item
    names[5] = ['omer'];// one element empty
    names[names.length] = 'macfitt';

    // add item
    years.push(1994);
    years.unshift(1993);

    // remove item
    years.pop();
    years.shift();

    // indexOf()
    let val = suayb.indexOf('recep');

    // reverse
    names.reverse();

    // sort
    years.sort();

    // concat
    years.concat(names);

    // slice
    years.slice(0, 0, 'hiya bro');// (from start, delete,what add)
    
    // find 

    function over18(years) {
        let age = 2021 - years;
        return age >= 18;
    }

    val = years.find(over18);// first value will return
    
    // filter

    function over18(years) {
        let age = 2021 - years;
        return age >= 18;
    }

    val = years.filter(over18);// All value return if above 18 years

    console.log(years);
    console.log(val);


    // Some examples

    let car = ['Bmw', 'Mercedes', 'Opel', 'Mazda'];
    let elementOfcarArr = car.length;
    console.log('Element of car array;' + elementOfcarArr);

    // First and last element of car array

    console.log('First element:' + car[0]);
    console.log('Last element:' + car[car.length-1]);

    // Add renault value to last of car array
    car.push('Renault');
    console.log(car);

    // Add toyota value to beginning of car array
    car.unshift('Toyota');
    console.log(car);

    // Remove toyota value
    car.pop();
    console.log(car);

    // Remove renault value
    car.shift();
    console.log(car);

    // Reverse the car array
    car.reverse();
    console.log(car);

    // sort of alphabetic
    car.sort();
    console.log(car);

    let numb = [80, 5, 2, 1];
    numb.sort();
    console.log(numb);

    // IsValue opel     
    console.log(car.indexOf('Opel'));

    // convert to array
    var str = 'Chevrolet, Dacia';
    var strArr = str.split(',');
    console.log(strArr);

    // concat 2 array
    car = strArr.concat(car);
    console.log(car);

    // remove last 2 elements
    car.pop();
    car.pop();
    console.log(car);

    var arr = ['StudentA',['Suayb', 'Kiris', 1996],'Kubra',['Suayb', 'Kiris', 1996]];
    console.log(arr);