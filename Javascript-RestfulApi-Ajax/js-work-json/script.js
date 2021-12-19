// Work with JSON

document.querySelector('#getEmployee').addEventListener('click', loadEmployee);



function loadEmployee() {

    var loadImage = document.querySelector('#loading');
    loadImage.style.display = 'block';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);


    setTimeout(() => {

        xhr.send();

        xhr.onload = function () {

            if (this.status === 200) {
                // Come a string from server or what else
                console.log(this.responseText);

                loadImage.style.display = 'none';

                // So We must convert an object
                console.log(JSON.parse(this.responseText));

                let employee = JSON.parse(this.responseText);

                let html = [];

                employee.forEach(employee => {
                    html += `<tr>
                    <td>${employee.fname}</td>
                    <td>${employee.lname}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                </tr>`;
                });

                document.getElementById('employees').innerHTML = html;

            }
            
        }


    }, 2000);





}

