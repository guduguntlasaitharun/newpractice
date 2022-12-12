class Emp{
     Min_bal=100;
     account_bal=0;
  Deposit_amount(a){
    console.log("Deposit amount");
    this.account_bal=this.account_bal+a
   //this.Min_bal=this.Min_bal+a
  }
  get_bal(){
    return this.account_bal-this.Min_bal

  }

     

}
let a1=new Emp()
//let a2=new Emp()
a1.Deposit_amount(5000)
console.log(a1);
a1.Deposit_amount(2630)
console.log(a1);
let r1=a1.get_bal();
console.log(r1);
