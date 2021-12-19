// Asynchronous Javascript with Callback

let person = [
    { name: 'Suayb', surname: 'Kiris' },
    { name: 'Elif', surname: 'Kiris' },
    { name: 'Kubra', surname: 'Kiris' },
]


let isAdded = false;

function addProduct(prs, callback) {

    if (isAdded) {
        setTimeout(() => {
            person.push(prs);
            callback(null, prs);
        }, 2000);
    }else {
        callback(' data cant be added', prs);
    }
}


function getProduct() {

    setTimeout(() => {
        person.forEach(p => {
            console.log(p.name);
        });
    }, 1500);

}

let p1 = { name: 'Recep', surname: 'Kiris' };

addProduct(p1, function (err, data) {

    if (err) {
        console.log('Error' + err);
    } else {
        console.log(data)
    }

});