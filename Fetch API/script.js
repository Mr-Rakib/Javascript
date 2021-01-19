
let btn = document.getElementById('fetchBtn').addEventListener('click', FetchData);

function FetchData() {
    //let url = 'https://newsapi.org/v1/articles?source=the-verge&apiKey=9bc1611dc6394052be0e7cb714f935a9';
    //let url = 'https://human-resource-service-1.herokuapp.com/admission/students';

    let params =
    {
        method: 'get',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": "Content-Type",
            'Content-Type': 'application/json'
        }
    }

    let url = 'https://newsapi.org/v1/articles?source=the-verge&apiKey=9bc1611dc6394052be0e7cb714f935a9';
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
