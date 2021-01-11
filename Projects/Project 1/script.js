Start();
function Start() {
    ShowAllData();
    document.getElementById("addNote").addEventListener("click", AddNote);
    document.getElementById("searchText").addEventListener("input", Search);
}
function GetAllData() {
    let noteStorage = localStorage.getItem("notes");
    let notelist = (noteStorage == null) ? [] : JSON.parse(noteStorage);
    return notelist;
}

function AddNote() {
    let text = document.getElementById("noteText");
    if (text.value.trim() ?? null != null) {
        let notelist = GetAllData();

        notelist.push(text.value);
        localStorage.setItem("notes", JSON.stringify(notelist));
        text.value = '';
        ShowAllData();
    }
    else {
        alert("Invalid inmformation")
    }
}

function ShowAllData() {
    let notelist = GetAllData();
    let html = "";

    if (notelist.length != 0) {
        notelist.forEach((element, index) => {
            html +=
        `<div class="noteCard card mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button class="btn btn-danger" id ='${index}' onclick= 'DeleteNote(this.id)' >Delete</button>
            </div>
        </div>
        `;
        });
    }
    else {
        html = "Nothing to show";
    }
    document.getElementById("notes").innerHTML = html;
}

function DeleteNote(index) {
    if (confirm("Are you sure to delete this ?")) {
        let notelist = GetAllData();
        if (notelist != null) {
            notelist.splice(index, 1);
        }
        localStorage.setItem("notes", JSON.stringify(notelist));
        ShowAllData();
    }
}

function Search()
{
    let text = document.getElementById("searchText").value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach((element)=>{
        let cardP = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardP.includes(text)){
            element.style.display= "block";
        }else{
            element.style.display= "none";
        }
    });
}