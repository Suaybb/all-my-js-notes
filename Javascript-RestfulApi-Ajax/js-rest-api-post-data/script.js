// Rest api post data (external api)

document.querySelector('#postData').addEventListener('click', postData);


function postData() {
    const data = {
        user: 1,
        title: 'new title',
        body: 'new body'
    }

    var json = JSON.stringify(data);
    var url = 'https://jsonplaceholder.typicode.com/posts'

    var xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onload = function(){
       if(xhr.status === 201 && xhr.readyState === 4 ){
           var post = xhr.responseText;
           console.log(post);
       }
    }


    xhr.send(json);


}






