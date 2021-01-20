/*
    regular expression
    let reg = /expression/      --> declear
    let reg = /expression/g     --> global
    let reg = /expression/i     --> case insensitive

    reg.exec(str)      --> retuen the object
    reg.test(str)      --> return the boolean(true for match/ null for not-match)
    str.match(reg)     --> return an array of matches
    str.search(reg)    --> return index of first match or -1
    str.replace(reg, 'replace-string')  return the hole string with the replaced one 

*/

let reg = /rakib/ig;
let str = 'hello i am md Rakib, working as a software developer at match wheel limited. rakib is a good boy '

console.log(reg);
console.log(reg.source);

console.log(reg.exec(str));
console.log(reg.test(str));
// console.log(reg.exec(str))   --> for global /g
// console.log(reg.exec(str))

console.log(str.match(reg));
console.log(str.search(reg));
console.log(str.replace(reg, "Rakib Hasan"));