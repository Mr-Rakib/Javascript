let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

[a, b, c, ...d] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

({ a, b, ...c } = { a: 1, b: 2, c: 3, d: 4, e: 5, e: 6 });

console.log(a)
console.log(b)
console.log(c)

let student =
{
    name: "rakib",
    age: 23,
    gender: "male",
    dept: "cse",
    salary: 25000,
    func: function () {
        console.log("Function")
    }
}

const {name, age, gender, dept, salary, func} = student ;

console.log(name, age, gender, salary, dept, func);

