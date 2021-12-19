// Promise example


var promise = new Promise(function (resolve, reject) {
    if (true) {
        resolve('Success');
    } else {
        reject('Error');
    }
});

promise.then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err);
});

new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve(5);
    }, 2000);

}).then((data) => {
    console.log(data);
    return Math.pow(data, 2);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name: 'IPhone 8',
            price: 4000,
            color: 'silver'
        }
        resolve(phone);
    } else {
        const error = new Error('Mom is upset');
        reject(error);
    }
});


const showToFriends = function (phone) {
    const message = 'My new phone' + phone.name;
    return Promise.resolve(message);
}


const askMom = function () {
    willGetNewPhone.then(showToFriends).then(data => console.log(data)).catch(err => {
        console.log(err);
    })
}


askMom();




