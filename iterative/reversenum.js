var num=12345;
var reverse=0;
console.log("oroginal number:"+num+"");
while(num!=0){
    reverse=(reverse*10)+(num%10);
    num=parseInt(num/10);
}
console.log("reverse num0:"+reverse);