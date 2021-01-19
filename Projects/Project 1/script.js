Start();
function Start() {
    ShowAllData();
    document.getElementById("addNote").addEventListener("click", AddNote);
    document.getElementById("searchText").addEventListener("input", Search);
}
//Note Object
let Note = function(noteTitle, noteText){
    this.title= noteTitle;
    this.text = noteText;
}

function GetAllData() {
    let noteStorage = localStorage.getItem("notes");
    let notelist = (noteStorage == null) ? [] : JSON.parse(noteStorage);
    return notelist;
}

function AddNote() {
    let title = document.getElementById("noteTitle");
    let text = document.getElementById("noteText");
    if (text.value.trim() ?? null != null & title.value.trim() ?? null != null) {
        let notelist = GetAllData();
        let note = new Note(title.value, text.value);
        notelist.push(note);
        localStorage.setItem("notes", JSON.stringify(notelist));
        
        console.warn(title.value, text.value);
        title.value = "";
        text.value = "";
        console.warn(title, text);
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
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
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

        let cardTitle = element.getElementsByClassName("card-title")[0].innerText.toLowerCase();
        let cardText = element.getElementsByClassName("card-text")[0].innerText.toLowerCase();
        if(cardTitle.includes(text) || cardText.includes(text)){
            element.style.display= "block";
        }else{
            element.style.display= "none";
        }
    });
}