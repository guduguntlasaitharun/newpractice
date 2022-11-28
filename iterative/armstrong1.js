var e,x,number=0;
var sum=prompt("enter a number")
x=sum;
while(x>0){
    e=x%10;
    x=parseInt(x/10);
    number=number+(e*e*e)
}
if(sum==number)
{
    console.log(number,"the given number is an armstrong number");
}
else
{
console.log(number,"the given number is not an amstrong number");
}