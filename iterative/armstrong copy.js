
let x=153
let sum=0;
let temp=x
while(temp>0)
{
    y=temp%10
    sum+=y**3
    temp=parseInt(temp/10)
}
console.log(x==sum)
if(sum==number)
{
    console.log(number,"the given number is an armstrong number");
}
else
{
console.log(number,"the given number is not an amstrong number");
}