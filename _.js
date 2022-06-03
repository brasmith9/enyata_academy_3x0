let fruits = {
  get getFruits() {
    return this.fruits
  },
  set setFruits(fruits) {
    this.fruits = fruits;
  },
  fruits: [
    {
      id: 1,
      name: "Oranges",
      description:
        "Oranges are a type of low calorie, highly nutritious citrus fruit..",
      imagePath: "./images/oranges.jpeg",
    },
    {
      id: 2,
      name: "Mangoes",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
      imagePath: "./images/mangoes.webp",
    },
    {
      id: 3,
      name: "Strawberries",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
      imagePath: "./images/strawberries.jpeg",
    },
    {
      id: 4,
      name: "Pawpaw",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
      imagePath: "./images/pawpaw.jpeg",
    },
    {
      id: 5,
      name: "Banana",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
      imagePath: "./images/banana.jpeg",
    },
    {
      id: 6,
      name: "Apples",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
      imagePath: "./images/Apples.jpeg",
    },
    {
      id: 7,
      name: "Guava",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
      imagePath: "./images/guava.jpeg",
    },
    {
      id: 8,
      name: "Pineapple",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
      imagePath: "./images/pineapple.jpeg",
    },
  ]
};

let row = document.getElementById("row");

for (let index in fruits.fruits) {
  row.innerHTML += `
  <div class="col col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12" id="${fruits.fruits[index].id}">
  <div class="card" style="width: 18rem;">
    <img src="${fruits.fruits[index].imagePath}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${fruits.fruits[index].name}</h5>
      <p class="card-text">add${fruits.fruits[index].description}</p>
      <a href="#" class="btn btn-primary add_to_cart" id="add${fruits.fruits[index].name}">Add to Cart</a>
      <a href="#" class="btn btn-danger delete_from_cart" id="delete${fruits.fruits[index].name}">Delete Fruit</a>
    </div>
  </div>
</div>
  `;
}

let addTocartBtn = document.getElementsByClassName("add_to_cart");
let deletecartBtn = document.getElementsByClassName("delete_from_cart");
let cartCount = document.getElementById("cart");
let count = 0;
cartCount.innerText = count;

Object.entries(addTocartBtn).forEach((element) => {
  element[1].addEventListener("click", addToCart);
});

Object.entries(deletecartBtn).forEach((element) => {
  element[1].addEventListener("click", removeFromCart);
});

function addToCart(e) {
  e.preventDefault();
  count += 1;
  cartCount.innerText = count;
}

function removeFromCart(e) {
  e.preventDefault();
  count != 0 ? (count -= 1) : deleteFruit(e);
  cartCount.innerText = count;
}

function deleteFruit(e) {
  let fruitId = e.target.parentElement.parentElement.parentElement.id;

  alert("Are you sure you want to delete this fruit?");
  console.log(fruits.getFruits.length);
  fruits.setFruits = fruits.getFruits.filter((fruit) => fruit.id != fruitId);

  
}
