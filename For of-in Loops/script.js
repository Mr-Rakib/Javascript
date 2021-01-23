/*
let people = "my name is md rakibul hasan hridoy"
let people = {
    name: "rakib", 
    age: 23,
    gender: "male"
}
*/
var container = document.getElementById('container');
container.innerHTML += "----------------For in Loop(index/key)-------------<br>";

console.log("----------------For in Loop(index/key)-------------");
let people = ['rakib', 'hasan', 'kapas', 'mofiz', 'nazma'];

for(let key in people){
    console.log(key);
    container.innerHTML += `${key}<br>`;
}



//************FOR OF LOOP*************
console.log("---------------For of Loop(value)----------------");
container.innerHTML += "---------------For of Loop(value)----------------<br>";
let peoples = ['rakib', 'hasan', 'kapas', 'mofiz', 'nazma'];

for(let key of peoples){
    console.log(key)
    container.innerHTML += `${key}<br>`;
}
