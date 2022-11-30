let data=[10,20,30,40]
data.unshift(5)
data.unshift(0)
console.log(data);
let removeitem=data.shift()
console.log(data);
console.log(removeitem);
console.log(data.indexOf(20));
console.log(data.indexOf(200));
console.log(data.slice(1,3));
console.log(data.slice(0,3));
