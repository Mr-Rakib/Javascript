
document.getElementById('fetchBtn').addEventListener('click', GetData);
document.getElementById('recoverBtn').addEventListener('click', PostData);

async function GetData() {
    // let url = 'https://human-resource-service-1.herokuapp.com/admission/students';
    // let url = 'https://newsapi.org/v1/articles?source=the-verge&apiKey=9bc1611dc6394052be0e7cb714f935a9';
    let url = 'https://api.github.com/users';

    let params =
    {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await fetch(url, params)
        .then(response => response.json())  // return a promise (Async)
        .then(data => console.log(data))    // return a response data
        .catch(error => console.log(error))
}

function PostData() {
    let url = 'http://dummy.restapiexample.com/api/v1/create';

    let data = {"name":"test","salary":"123","age":"23"};
    let params =
    {
        method: 'post',
        headers: {
             //'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
    }

    fetch(url, params)
        .then(response => response.json())  // return a promise (Async)
        .then(data => console.log(data))    // return a response data
        .catch(error => console.error(error));
}
