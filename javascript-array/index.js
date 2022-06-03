//Arrays in Javascript

let car = "Benz";

let cars = [ "Benz", "Volvo", 23, "BMW", "VW", true, "Kia" ];

let emptyCars = [ ];

emptyCars[1] = "newCar";
emptyCars[0] = "anotherCar";
// cars[1] = "Kia";

// console.log(cars);

let developerObj = {
  "firstName" : "Isaac"
};

let developerArr = [ "Isaac" ];

// console.log("Array :", developerArr);
// console.log("Object :", developerObj);

//Length of an Array
// console.log(cars.length);

//Accessing the values in an array

// console.log("First Item :", cars[0]);
// console.log("Last Item :", cars[ cars.length - 1 ]);

//
let ol = document.getElementById("objects");


for ( let index in cars) {
  ol.innerHTML += `<li>${ cars[index] }</li>`;
}

// The Array Constructor
let newArr = new Array(2);
newArr[0] = 1;

//Javascript Array Methods
//.1 toString()

// console.log((cars.toString()));

//2. join()
// console.log((cars.join()));

//3. Popping and Pushing

let poppedItem = cars.pop();
// console.log(cars);
// console.log(poppedItem);

cars.push("Audi");
// console.log(cars);

//Shift() and Unshift
let shiftedCar = cars.shift();
// console.log(shiftedCar);
// console.log(cars);

//Unshift
cars.unshift("Opel");
// console.log(cars);

//Array Delete
delete cars[0];
console.log(cars);










