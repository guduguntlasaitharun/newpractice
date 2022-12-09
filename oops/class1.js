class Bank{
    max=500;
    sai(){
        console.log("open account");
    }
    tharun(){
        console.log("Deposit amount");

    }
    aryan(){
        console.log("check Balance");
    }

}
let a1=new Bank();
let a2=new Bank();
console.log(a1);
console.log(a1.max);
console.log(a1.sai);
a1.sai();
a2.tharun();
a1.tharun();
a2.aryan();