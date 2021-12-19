// What is asynchronous


// This is example of synchronous programming

const first = () => {
    console.log('First');
    second();
}

const second = () => {
    console.log('Second');
    third();
}

const third = () => {
    console.log('Third');
}

first();

console.log('--------------');

// This example of asynchronous programming

const f = () => {
    console.log('First');
    s();
}

const s = () => {
    setTimeout(() => {
        console.log('Second');
    }, 2000);
    t();
}

const t = () => {
    console.log('Third');
}

f();


