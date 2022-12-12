class Emp
{
    Min_bal=100;
    account_bal=0;
 Deposit_Amount(amount)
 {
   console.log("Deposit amount");
   this.account_bal=this.account_bal+amount;
 }
  get_Bal()
  {
    
    return this.account_bal-this.Min_bal
  }   

}
let a1=new Emp()
let a2=new Emp()
console.log(a1);

a1.Deposit_Amount(5000)
console.log(a1);
a1.Deposit_Amount(2630)
console.log(a1);

console.log("Account balance");
let r1=a1.get_Bal();
console.log(r1);
let r2=a2.get_Bal();
console.log(r2);


