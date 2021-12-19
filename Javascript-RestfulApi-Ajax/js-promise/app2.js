// Promise example 2

var myObj = {
    url: 'https://randomuser.me/api/?results=5'
}


let request = obj => {

    return new Promise((res, rej) => {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', obj.url, true);

        // console.log(xhr.headers);
        // console.log(xhr);

        // if (xhr.headers) {
        //     console.log(obj.headers);
        //     Object.keys[obj.headers].forEach(key => {
        //         xhr.setRequestHeader(key, obj.headers[key]);
        //     });
        // }

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status <= 300) {
                res(xhr.response);
                // console.log(xhr.response);
            } else {
                rej(xhr.statusText);
            }
        }


        xhr.onerror = () => {
            rej(xhr.statusText);
        }
 
        xhr.send();
    });

}

request(myObj).then(data => {
    let users = JSON.parse(data);
    console.log(users);

}).catch(err => {
    console.log(err);
});



