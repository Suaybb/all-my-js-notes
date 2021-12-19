// Promise 

let person = [
    { name: 'Suayb', surname: 'Kiris' },
    { name: 'Elif', surname: 'Kiris' },
    { name: 'Kubra', surname: 'Kiris' },
]

function addProduct(prs) {

    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            person.push(prs);
            let added = true;
            if (added) {
                resolve();
            } else {
                reject('Error: 500');
            }
        }, 2000);


    });

}


function getProduct() {

    setTimeout(() => {
        person.forEach(p => {
            console.log(p.name);
        });
    }, 1500);

}

let p1 = { name: 'Recep', surname: 'Kiris' };

addProduct(p1).then(getProduct).catch(function (err) {
    console.log(err);
});