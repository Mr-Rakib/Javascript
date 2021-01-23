const map = new Map();

let keyf = function rakib(){
    return 25;
}

let keyobj =
{
    name: "rakib", 
    age: 23,
    contact : "01642090363"
}

map.set(1, "This is me 1");
map.set(2, "This is me 2");
map.set(3, "This is me 3");
map.set(keyobj, "This is me object");
map.set(keyf, "This is me function");

//console.log(map)

for(let [key, value] of map){
    console.log(key, value);
}

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value);
}


map.forEach((value, key) => {
    console.log(key, value)
});

console.log(Array.from(map));