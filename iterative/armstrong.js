let sum=0;
const number=prompt("enter a three digit positive integer:");
let temp=number;
while(temp>0){
    let remainder = temp%10;
    sum=sum+remainder*remainder*remainder;
    temp=parseInt(temp/10);
}
if(sum==number)
{
    console.log(+number,"the given number is an armstrong number");
}
else
{
console.log(+number,"the given number is not an amstrong number");
}