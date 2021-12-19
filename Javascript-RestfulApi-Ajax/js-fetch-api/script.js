// Text

// All promise operations make by fetch 

function getText() {
    fetch('fetch-api.txt').then(response => {
        return response.text();
    }).then(data => {
        console.log(data);
    }).catch(err => console.log(err));
}
getText();

// Json

function getJson() {
    fetch('employees.json').then(response => {
        return response.json();
    }).then(data => {
        data.forEach((e, i) => {
            console.log(e.fname);
        });

    }).catch(err => console.log(err));
}

getJson();

// External

function getExternal() {
    fetch('https://randomuser.me/api/?results=5').then(data => {
        return data.json();
    }).then(data => {
        data.results.forEach(e => console.log(e));
        console.log(data.results);

        // We can add to front-end side in here 
    }).catch(err => console.log(err));
}

getExternal();


function postExternal() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    var data = {
        method: 'POST',
        body: JSON.stringify(
            {
                userId: 1,
                title: 'title',
                body: 'body'
            }
        ),
        header: new Headers({
            'content-type': 'application/json'
        })
    }

    fetch(url, data).then(res => {
        console.log(res);
        return res.json();
    }).then(res => {
        res.forEach(item => {
            console.log(item);
        });
    });
}

postExternal();





