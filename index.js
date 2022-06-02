//Objects

//Boolean
let isDone = false;
//Strings
let color = "blue"; // "blue"
//Numbers
let myNumber = 10;
//Undefined
let cars;
//Null
let course = null;

course = "Web Development";

//Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  age: null,
  height: 5.6,
  isEmployed: true,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

// person.age = prompt('How old are you? ');
//console.log(person.age);

//Accsessing the Object Properties

// 1. Dot Operator//
//console.log(person.name +' is a '+ person.gender);
//String Concatenation

//ES6 (ECMAScript2015  Version 6) a specification
// console.log(`${person.name} is a ${person.gender}`);

// 2. Square Brackets
// console.log(person['name'] + ' is ' + person['height'] + 'cm tall.');

let article = new Object();

article.title = "Learning Javascript";
article.author = "Ralph";
article.abstract = "This is an article about learning Javascript";
article.body = "This is the body of the article";
article.imageUrl = "https://picsum.photos/200";
article["published"] = true;

// console.log(article['published']);

//Javascript Objects are Mutable (Values can be Changed)

const newPerson = person;

// console.log(newPerson);

newPerson.name = "Jane";
// console.log(newPerson.name);
// console.log(person.name);

//Exercise 1 (10mins)
// 1. Create an object that represents a book.
//  A book should have a title, an author, and a number of pages.
//2. Get the values from the user using the prompt() function.
//3. Add the values to the book object.
//4. Log the book object to the console. (Form a sentence with the values)

//Javascript for...in Loop

// for (let x in person) {
//   console.log(person[x]);
// }

//Adding New Properties
person.numberOfChildren = 6;

// console.log(person);

//Deleting Properties

delete person.age;

// console.log(person);

//Nested Objects

let myInformation = {
  name: "Isaac",
  netIncome: 20,
  cars: {
    car1: {
      name: "Volvo",
    },
    car2: {
      name: "Benz",
    },
  },
};

// console.log(myInformation.cars.car1);

//Nested Arrays and Objects

let myOtherInformation = {
  name: "Isaac",
  netIncome: 20,
  cars: [
    { name: "Volvo", models: ["Focus", "Fiesta"] },
    { name: "BMW", models: ["320", "X3"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

function displayCars (element) {
  element.addEventListener("click", function () {
    for (let car in myOtherInformation.cars) {
      renderText += "<h2>" + myOtherInformation.cars[car].name + "<br></h2>";
      h1.innerHTML = renderText;
      for (let model in myOtherInformation.cars[car].models) {
        renderText += myOtherInformation.cars[car].models[model] + "<br>";
      }
    }
  });
}

let h1 = document.getElementById("title");
let btn = document.getElementById("btn");
let renderText = "";
displayCars(btn);

let btn2 = document.getElementById("btn2");

displayCars(btn2);

//Javascript Object Methods

let car = {
  name: "Volvo",
  model: "XC90",
  year: "2020",
  move: () => {
    console.log("The car is moving");
  }
};

// car.move();

// A function declared inside as a property of an object is called a method.

//What is this

// person.firstName = "Jane";
// console.log(person.fullName().toUpperCase());

//property name
//for...in Loop
//.values()
//JSON Javascript Object Notation

// console.log(Object.values(person)[3]);
// console.log(JSON.stringify(person));

let date = new Date();
// console.log(JSON.stringify(date));
h1.innerHTML = JSON.stringify(date);

// console.log(JSON.stringify(person.fullName()));
// console.log(JSON.stringify(person));

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(typeof(JSON.stringify(myArray)));

//Javascript Objects Accessors ES5

//Getters and Setters

let country = {
  name: "Ghana",
  capital: "Accra",
  population: "1,000,000",
  language: "English",
  set count(value) {
    this.population = value;
  },
  set setCapital(value) {
    this.capital = value;
  },
  get countryName() {
    return this.name;
  }

};

// country.population = prompt("How many people live in Ghana now? ");
// country.count = prompt("How many people live in Ghana now? ");

country.setCapital = "Cape Coast";


console.log(country.capital);
