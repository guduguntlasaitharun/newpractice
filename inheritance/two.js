class Account
{
    wish(){
        console.log("Welcome");
        
    }

}
class Deposit extends Account
{
    ball(){
       // super.wish()
        console.log("Good morning");
    }

}
new Deposit().wish()
