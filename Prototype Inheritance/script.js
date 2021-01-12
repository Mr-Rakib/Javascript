let Employee = function(id, name, salary, experiance){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.experiance = experiance;

    Employee.prototype.slogan = function (){
        return `this is very good, by - ${this.name}`;
    }
}

let Programmer = function(id, name, salary, experiance, language)
{
    //this.employee = new Employee(id, name, salary, experiance);
    Employee.call(this, id, name, salary, experiance);
    this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

let rakib = new Programmer(1, "Rakib Hasan", 35000, 2, "JS");
console.log(rakib);
console.log(rakib.slogan());