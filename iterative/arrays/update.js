let cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";//replace in index
console.log(cars);
cars[3] = "Opel";//add last place
console.log(cars);
cars.push("her0")//add last place
console.log(cars);
cars.unshift("hero")//add first place
console.log(cars);
delete cars[1];
console.log(cars);//delete an index 1