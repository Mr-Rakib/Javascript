let Student = function(name, department, hscGpa, sscGpa)
{
    this.Name = name;
    this.Department = department;
    this.HscGpa = hscGpa;
    this.SscGpa = sscGpa;

    Student.prototype.setId = function(id)
    {
        this.Id = id;
    };

    Student.prototype.getId = function()
    {
        return this.Id;
    };
    Student.prototype.profile = function ()
    {
        return `ID: ${this.Id},\tNAME: ${this.Name},\tDEPARTMENT: ${this.department},\tHSC: ${this.HscGpa},\tSSC: ${this.SscGpa}`;
    }
}

let rakib = new Student(5, "Md Rakibul Hasan", "CSE", 4.67, 4.75);
rakib.setId(1);



console.log(rakib);
console.log(rakib.getId());
console.log(rakib.profile());