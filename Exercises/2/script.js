Start();
function Start()
{
    let name = promptName();
    if(name == null){
        alert('Enter your name please');
        Start();
    }
    else{
        AppendText(name);
    }
}
function AppendText(name)
{
    document.getElementById("username").innerHTML += name;
}
function promptName()
{
    return prompt("Enter your name please");
}