// Date Object

    let d = new Date(); // assign all date info 
    let birthday = new Date(1996, 1, 23);

    console.log(d);
    console.log(typeof d); //Will be seen object

    // Get Methods of Date Object

    console.log(d.getDate());
    console.log(d.getDay());
    console.log(d.getFullYear());
    console.log(d.getHours());
    console.log(d.getMonth());
    console.log(d.getSeconds());

    // Age Calculator
    console.log(d.getFullYear() - birthday.getFullYear());
    console.log(d.getMonth() - birthday.getMonth());
    console.log(d.getDay() - birthday.getDay());

    // Set Methods of Date Object

    d.setFullYear(2020);
    d.setMonth(3);
    d.setDate(20);
    d.setHours(10);
    d.setMinutes(34);
    d.setSeconds(13);

    var dt = new Date('8/2/1992 14:23:44');
    var dt2 = new Date(2010, 7, 22, 15, 13, 44);

    // Examples

    let newd = new Date();

    let today = [];
    today[0] = newd.getFullYear();
    today[1] = newd.getMonth();
    today[2] = newd.getDay();
     
    console.log(today);

    let date = {
        date : new Date(),
        hours : new Date().getHours()
    }

    console.log(date);

    let first_day = new Date();

    first_day.setFullYear(1990);
    first_day.setMonth(0);
    first_day.setDate(1);

    console.log(first_day);

    first_day.setDate(first_day.getDate() - 1);

    console.log(first_day);

    // differenc between two days

    var start = new Date('1/1/1990');
    var end = new Date('1/1/1991');

    var milisecond = end - start;
    var second = milisecond / 1000;
    var minute = second / 60;
    var hour = minute / 60;
    var day = hour / 24;

    console.log('day:' + day);


    // Age calculator 

    var birthday1 = new Date('8/1/1985');
    var ageDifs = Date.now() - birthday1.getTime();
    var ageDate = new Date(ageDifs);
    
    console.log(ageDate.getFullYear() - 1970);

    var myBirthday = new Date('2/23/1996');
    console.log(myBirthday);
    var ageDifs1 = Date.now() - myBirthday.getTime();
    var myAgeDate = new Date(ageDifs1);

    console.log(myAgeDate.getFullYear() - 1970);

    var motherday = new Date();
    motherday.setHours(0, 0, 0, 0);
    motherday.setFullYear(2020);
    motherday.setDate(1);
    motherday.setMonth(4);

    while(motherday.getDay() != 0){
        motherday.setDate(motherday.getDate() + 1);
        console.log(motherday.getDay());
    }

    console.log(motherday.getDay());
    motherday.setDate(motherday.getDate() + 7);
    console.log(motherday);






 