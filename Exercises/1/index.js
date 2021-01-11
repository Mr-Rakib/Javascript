console.log("Hello");
let header = document.getElementById("header");
let container = document.querySelector(".container");

let newDiv = document.createElement('div');
newDiv.setAttribute("id", "newElement");

let text = (localStorage.getItem("text") == null) ? 
    document.createTextNode('This is my new elements'): localStorage.getItem("text");

newDiv.append(text);

container.insertBefore(newDiv, header);
console.log(header, container, newDiv);

document.getElementById('newElement').addEventListener('click', toDo);
function toDo(){
    if(document.getElementsByClassName("textarea").length == 0)
    {
        let html = newElement.innerHTML;
        newDiv.innerHTML = `<textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;
    }
    let text = document.getElementById("textarea");
    text.addEventListener("blur", function ()
    {
        newElement.innerHTML = text.value;
        localStorage.setItem ("text", text.value);
    });
}
