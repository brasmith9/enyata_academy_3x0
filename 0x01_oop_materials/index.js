//Procedural Method

let baseSalary = 30000;
let overtime = 10;
let rate = 20;
let tax = 3000;

function getWage (overtime, rate, baseSalary) {
  // let baseSalary = getBasicSalary(12, 5, anotherFactor);
  return baseSalary + (overtime * rate);
}

function netIncome () {
  let salary = getWage(baseSalary, overtime, rate);
  return (salary - tax);
}

netIncome();
// function getBasicSalary (skills, yearsOfExp, anotherFactor) {
//   //...some logic here...
// }

let wage = getWage(baseSalary, overtime, rate);
// console.log(wage);


//Object Oriented Method

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  anotherFactor: 20,
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate) + this.anotherFactor;
  }
};
let newWage = employee.getWage()
// console.log(newWage);
// console.log(employee);

//Object Literal Approach
// let circle = {
//   radius: 1,
//   draw: function () {
//     console.log(`Draw Circle with radius ${this.radius}`);
//   }
// };

// circle.draw();

//Factory Function Approach
function circle (radius) {
  return {
    radius, //ES6
    draw: function () {
      return `Draw Circle with radius ${this.radius}`;
    }
  };
}

let circle_1 = circle(1);
// console.log(circle_1.radius);


//Constructor Functions
// function Student (radius) {
//   this.radius;
// }

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

}

let student_1 = new Student("Betty", 23);
let student_2 = new Student("Sabina", 23);

// console.log(student_1);
// console.log(student_2);







