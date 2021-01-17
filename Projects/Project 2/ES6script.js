class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    Add(book) {
        let tableBody = document.getElementById('tableBody');
        let value =
            `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
    `;
        tableBody.innerHTML += value;
    }

    Clear() {
        let form = document.getElementById("libraryForm");
        form.reset();
    }

    Validate(book) {
        if (book.name.length < 2 || book.author.length < 3) {
            return false;
        }
        else return true;
    }

    Show(type, alertmessage) {
        let message = document.getElementById('message');
        message.innerHTML =
            `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> ${alertmessage}<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    </button>
    </div>
    `;
        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);
    }
}

let form = document.getElementById("libraryForm");
form.addEventListener('submit', SubmitForm);

function SubmitForm(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let type = GetType();

    let book = new Book(name, author, type);
    let display = new Display();
    if (display.Validate(book)) {
        display.Add(book);
        display.Show('success', 'book successfully saved');
        display.Clear();
    }
    else {
        display.Show('error', 'validating error/ invalid field');
    }

}

function GetType() {
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        return fiction.value;
    }
    else if (programming.checked) {
        return programming.value;
    }
    else if (cooking.checked) {
        return cooking.value;
    }
}