let h1 = document.getElementById("counter");
let incrementBtn = document.getElementById("btn");
let decreaseBtn = document.getElementById("btn2");

const counter = {
  count: 0,
  set setCount(value) {
    this.count += value;
    h1.innerHTML = this.count;
  }
};

h1.innerHTML = counter.count;

incrementBtn.addEventListener("click", () => {
  counter.setCount = 1;
});

decreaseBtn.addEventListener("click", function() {
  if(counter.count > 0) {
    counter.setCount = -1;
  }
  counter.setCount = 0;
});

//Assignment

/**
 * Build a calculator application that can perform the 
 * following operations:
 * - Addition ( + )
 * - Subtraction ( - )
 * - Multiplication ( * )
 * - Division ( / )
 * - Modulus ( % )
 * Using the concept of Objects (properties,
 * methods, getters, setters)
 */