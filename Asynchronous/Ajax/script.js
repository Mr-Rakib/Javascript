console.log('Ajax tutorial');
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fectchDataHandler);
//fetchBtn.addEventListener('click', PostDataHandler);

function fectchDataHandler() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'Files/rakib.txt', true);

    xhr.onprogress = function () {
        console.log('On progress');
    }

    xhr.onload = function () {
        //console.clear();
        if (this.status == 200) {
            //document.getElementById('content').innerHTML += this.response;
            console.log(this.response);
        } else {

            let obj = new msg(this.status, this.statusText, this.responseURL);
            console.log(obj);
        }
    }

    xhr.send();
}


function PostDataHandler() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onprogress = function () {
        console.log('On progress');
    }

    xhr.onload = function () {
        //console.clear();
        if (this.status == 200) {
            //document.getElementById('content').innerHTML += this.response;
            console.log(JSON.parse(this.response).data);
        } else {

            let obj = new msg(this.status, this.statusText, this.responseURL);
            console.log(obj);
        }
    }
    let params = new user('Rakib', 25000, 23);
    xhr.send(params);
}

function msg(c, m, ur) {
    this.code = c;
    this.message = m;
    this.url = ur
}

function user(name, salary, age) {
    this.name = name;
    this.salary = salary;
    this.age = age;
}


// Other Button Handler
let recoverBtn = document.getElementById('recoverBtn');
// fetchBtn.addEventListener('click', fectchDataHandler);
recoverBtn.addEventListener('click', recoverDataHandler);

function recoverDataHandler() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    xhr.onprogress = function () {
        console.log('On progress');
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            let string = "";
            Array.from(obj.data).forEach(element => {
                string +=
                `
                    <li class="form-control" >${element.employee_name}</li>
                `;
            });
            list.innerHTML = string;
        } else {

            let obj = new msg(this.status, this.statusText, this.responseURL);
            console.log(obj);
        }
    }
    xhr.send();
}
