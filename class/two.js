class emp{
     Min_bal=100;
     account_bal=0;
  Deposit_amount(a){
    console.log("Deposit amount");
    //this.account_bal=this.account_bal+a
   this.Min_bal=this.Min_bal+a
  }
     

}
let a1=new emp()
let a2=new emp()
a1.Deposit_amount(5000)
console.log(a1);
a1.Deposit_amount(2000)
console.log(a1);
