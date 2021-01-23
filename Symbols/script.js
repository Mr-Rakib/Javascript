/*
    Primitive type generator
    Always use to create unique item
    Symbols are ignore in foreach/forin loops
*/

const k1 = Symbol("identify the k1");
const k2 = Symbol("kor k2");

let obj = {};
obj[k1] = "kire "; 
obj[k2] = "Sala "; 


console.log(obj);
console.log(obj[k1]);