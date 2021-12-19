// Static method


class PersonES6 {
    constructor(name, job, year) {
        this.name = name;
        this.job = job;
        this.year = year;
    }

    calculateAge() {
        return 2021 - this.year;
    }

    static sayHi() {
        console.log('Hello there');
    }

}


var suayb = new PersonES6('suayb', 'Engineer', 1996);

console.log(suayb.calculateAge());

// Now here, We cant access sayHi() method in our creating object 
// Only access in class 
// I mean

// suayb.sayHi(); This is wrong

PersonES6.sayHi();



class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

     static calculateDistance (a, b){
         var dx = a.x - b.x;
         var dy = a.y - b.y;

         return Math.hypot(dx, dy);
     }

}

var p1 = new Point(10, 14);
var p2 = new Point(11, 32);


console.log(Point.calculateDistance(p1, p2));