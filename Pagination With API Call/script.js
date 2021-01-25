Start()
function Start() {
    GetAllValue(1);
    document.getElementById('search').addEventListener('input', Search)
}

function addData(value) {
    let tableContainer = document.getElementById('table-body');
    //console.log(tableContainer.innerHTML)
    let html =
        `<tr>
            <td>
                ${value.id}
            </td>
            <td>
                ${value.first_name}
            </td>
            <td>
                ${value.last_name}
            </td>
            <td>
                ${value.email}
            </td>
            
        </tr>
        `;
    tableContainer.innerHTML += html;
}

function setPagination(total, perPage) {
    document.getElementById('pagination-total-result').innerHTML = `Total ${total} result found`;
    let pagination = document.getElementById('pagination');
    pagination.innerHTML += `<button id="page-${0}" onclick="GetDataByPageNumber('${0}')"  class="btn btn-sm pl-2 pr-2 mx-1"><i class='fas fa-angle-double-left'></i></button>`;
    for (let page = 1; page <= (total / perPage); page++) {
        pagination.innerHTML += `<button id="page-${page}" onclick="GetDataByPageNumber('${page}')"  class="btn btn-sm pl-2 pr-2 mx-1">${page}</button>`;
    }
    pagination.innerHTML += `<button id="page-${total / perPage}" onclick="GetDataByPageNumber('${total / perPage}')"  class="btn btn-sm pl-2 pr-2 mx-1"><i class='fas fa-angle-double-right'></i></button>`;
}

function GetDataByPageNumber(page) {
    document.getElementById('pagination').innerHTML = "";
    document.getElementById('table-body').innerHTML = "";
    GetAllValue(page);
}

function GetAllValue(page) {
    let url = `https://reqres.in/api/users?page=${page}`;
    let params = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(url, params).then(response => response.json())
        .then(data => {
            setPagination(data.total, data.per_page)
            data.data.forEach(item => {
                addData(item);
            });
        }
        ).catch(error => console.error(error));
}

function Search() {
    let text = document.getElementById('search').value.toLowerCase();
    let a = Array.from(document.getElementById('table-body').getElementsByTagName('tr'));
    a.forEach((item, index) => {
        let d = item.getElementsByTagName('td');
        let arr = Array.from(d);
        if(toString(arr, index).toLowerCase().includes(text)) // get all data to combine list
        {
            item.style.display = "table-row";
        }else 
        {
            item.style.display = "none";
        }
    })
}

function toString(item, index) {
    var i = index;
    var text = "";
    item.forEach((a, i) => {
        let j = i;
        if(i == j){
            text += a.innerText;
        }
        else{
            i++;
        }
    });
    return text;
}