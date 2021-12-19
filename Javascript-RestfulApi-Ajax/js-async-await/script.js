// Asynchronous Javascript with Async & Await


async function f() { 
    return 'Hello';
}

console.log(f());

f().then(res => console.log(res));

 

function getCategory() {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve('phone');
        }, 1000);
    });
}


function getProducts(category) {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(`5 products in ${category}`);
        }, 1000);
    });
} 


getCategory().then(getProducts).then(res => console.log(res));



async function getProduct() {
    let category = await getCategory();
    let result = await getProducts(category);

    console.log(result);
}