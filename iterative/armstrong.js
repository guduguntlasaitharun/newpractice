let number= 153;
let n=number.length;
let sum=0;
let i=0;
while(i<n)
{
    let digit=number[i]-'0';
    sum=(sum+Math.pow(digit,n));
    i++;
}
if(sum==number)
{
    console.log(number,"the given number is an armstrong number");
}
else
{
console.log(number,"the given number is not an amstrong number");
}