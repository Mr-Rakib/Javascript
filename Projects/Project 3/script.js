Start();
function Start() {
    FetchAllNewsAjax();
    document.getElementById('top-news-btn').addEventListener('click', AllTopNewsAjax);
    document.getElementById('sports-news-btn').addEventListener('click', AllSportsNewsAjax);
    document.getElementById('search').addEventListener('input', SearchAllItems);
}

function FetchAllNewsAjax() {
    // Ajax Calling manual
    const key = '77456a82ee20405b9e32f7998e3e91bf';
    let date = new Date();
    let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    let baseUrl = `http://newsapi.org/v2/everything?q=bitcoin&from=${today}&sortBy=publishedAt&apiKey=${key}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl, true);
    //xhr.getResponseHeader('Access-Control-Allow-Origin', '*');

    xhr.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);
            result.articles.forEach((element, index) => {
                AddNews(element, index);
            });
        } else {
            console.error("Some Issue Happen");
        }

    }
    xhr.send();
}

function AllTopNewsAjax() {
    //ES6 Ajax call
    SetHeader("TOP NEWS");

    const key = '77456a82ee20405b9e32f7998e3e91bf';
    let baseUrl = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

    fetch(baseUrl).then(response => response.json())
        .then(function (data) {
            data.articles.forEach((element, index) => {
                AddNews(element, index);
            });
        })
        .catch(error => console.error("Some Issue Happen"));
}

function AllSportsNewsAjax() {
    //ES6 Ajax call
    SetHeader("SPORTS");
    const key = '77456a82ee20405b9e32f7998e3e91bf';
    let baseUrl = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`;

    fetch(baseUrl).then(response => response.json())
        .then(function (data) {
            data.articles.forEach((element, index) => {
                AddNews(element, index);
            });
        })
        .catch(error => console.error("Some Issue Happen"));
}

function SetHeader(mainHeader) {
    document.getElementById('main-header').innerHTML = mainHeader;
    document.getElementById('news-container').innerHTML = '';
}

function SearchAllItems() {
    let text = document.getElementById('search').value.toLowerCase();
    let newsContainer = document.getElementsByClassName('news-card');

    Array.from(newsContainer).forEach((element) => {
        let title = element.getElementsByClassName('card-title')[0].innerText.toLowerCase();
        let header = element.getElementsByClassName('card-header')[0].innerText.toLowerCase();
        let bodyText = element.getElementsByClassName('card-text')[0].innerText.toLowerCase();

        if (title.includes(text) || header.includes(text)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

function AddNews(news, index) {
    let newsContainer = document.getElementById('news-container');
    let newsBody =
        `
    <div class="news-card col-sm-4 p-2">
        <div class="card">
            <img class="card-img-top" src="${news.urlToImage ?? " images/avatar.png"}" alt="Card image cap" style="height: 35vh;">
            <div class="card-body">
                <div id="heading-${index}">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${index}"
                        aria-expanded="true" aria-controls="collapse-${index}">
                        <h5 class="card-title text-danger">${news.author ?? "Ajker Bangladesh"}</h5>
                    </button>
                </div>
                <p class="card-header font-weight-bold">${news.title ?? "Ajker Bangladesh"}</p>
                <hr>
                <div id="collapse-${index}" class="collapse " aria-labelledby="heading-${index}"
                    data-parent="#news-container">
                    <p class="card-text text-justify">
                        ${news.description}
                    </p>
                    <a href="${news.url}" target="_blank">Read More</a>
                </div>
            </div>
        </div>
    </div>    
    `;
    newsContainer.innerHTML += newsBody;
}