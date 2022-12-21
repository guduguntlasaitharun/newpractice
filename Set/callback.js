let sum =(a,b)=>{
    return a+b
}
let multi =(a,b)=>{
    return a*b
}


let cal=(a,b,call)=>{
    return call(a,b)

}
let r1=cal(10,20,sum)
console.log(r1);
let r2=cal(10,20,multi)
console.log(r2);
let r3 = cal(200, 100, (a, b) => { return a - b })
console.log(r3)