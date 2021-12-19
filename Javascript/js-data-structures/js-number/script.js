// Numbers Method

    var val;
    var number = 10.2342124;

    val = number.toPrecision(6); 
    // This method output 10.2342 6 step of number
    val = number.toFixed(6)
    // This method gives all number from comma 
    // That is .234212

    val = Math.PI;
    val = Math.round(2.4);// Rounding down 2
    val = Math.round(2.7);// Rounding up 3
    val = Math.ceil(3.1);// Always ceiling up 4
    val = Math.ceil(2.8);
    val = Math.floor(3.8);// Always flooring down 4
    val = Math.sqrt(64);// 8
    val = Math.pow(2, 5);// 32
    val = Math.abs(-100);// 100
    val = Math.min(1, 2, 3, 4, 5);// 1
    val = Math.max(4, 5, 6, 21, 1);// 21
    val = Math.floor(Math.random()*10); // 0-9



    console.log(val);