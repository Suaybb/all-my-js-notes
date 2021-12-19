// Ajax XHR

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);
    }
}


// When we make a request from the server, we can run this function
// until the request comes. 
// We can put an image or a gif until the request comes.
xhr.onprogress = function(){
    console.log('On progressing...');
}


// If we write a any code line
// Function doesnt block of our context
// Because codes are running asynchronous


console.log('Hello');

xhr.open('GET', 'msg.txt', true);
xhr.send();

/*
    readyState:

    0 : request not initialized
    1 : server connection established
    2 : request received
    3 : processing request
    4 : request finished and response is ready
   
    status:

    200 : OK
    403 : Forbidden
    404 : Not Found

*/