class Test{
    emp_id;
    emp_name;
    emp_salary;
    constructor(id,name,salary){
        this.emp_id=id;
        this.emp_name=name;
        this.emp_salary=salary;
    }

}
let a1=new Test(101,"sai",60000)
let a2=new Test("a","b",10);
console.log(a1);
console.log(a2);
