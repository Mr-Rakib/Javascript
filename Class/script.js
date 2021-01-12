class Employee
{
    constructor(id, name, salary, joiningYear){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.joiningYear = joiningYear;
    }

    getExperiance(){
        return new Date().getFullYear() - this.joiningYear;
    } 
}

Employeelevel = {
    entry : "Entry",
    mid : "Mid",
    senior : "Senior"
}

class Programmer extends Employee
{
    constructor(id, name, salary, joiningYear, github, languages)
    {
        super(id, name, salary, joiningYear);
        this.github = github;
        this.languages = languages;
    }

    getEmployeeLevel(){
        let level = "";
        console.log(this.getExperiance())
        if(this.getExperiance()<=2){
            level = Employeelevel.entry
        }
        else if(this.getExperiance() > 2 & this.getExperiance()<=5)
        {
            level = Employeelevel.mid
        }
        else if(this.getExperiance() > 5){
            level = Employeelevel.mid;
        }
        else {
            level = "none";
        }
        return level;
    }
}

let rakib = new Programmer(1, "Rakib Hasan", 35000, 2019, "mrrakib", ["C#", "Java", "C", "C++", "JavaScript"])
console.log(rakib);
console.log(rakib.getExperiance());
console.log(rakib.getEmployeeLevel());