class Employee {
    //emp_Id; 
    constructor(id, name,salary) {
        //console.log("No Rain")
        this.emp_Id = id
        this.emp_Name = name
        this.emp_Salary=salary;
    }
    get_Details() { }
}
let e1 = new Employee(101, "Dipip",4500)
let e2 = new Employee(102, "Rahul")
let e3 = new Employee(103)
let e4 = new Employee(104)
let e5 = new Employee(105)
console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)
console.log(e5)