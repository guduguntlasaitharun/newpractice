function student(rno,name,address,branch){
    this.rno=rno;
    this.name=name;
    this.address=address;
    this.branch=branch;
}
let stu1 =new student(101,"sai","hyd","CSE")

console.log(stu1.rno+" "+stu1.name+" "+stu1.address+""+stu1.branch);