console.log("Generators in javascript")

function* numbersGen(){
    let i = 0;
    while(i<10){
        yield i++;
    }
}

let gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());