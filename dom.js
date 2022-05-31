let pById = document.getElementById("subtitle");
let header = document.getElementById("header");
let pByTagName = document.getElementsByTagName("p");
let pByClassName = document.getElementsByClassName("subtext");

// for (element in pByTagName) {
//   console.log(pByClassName);
// };


pById.innerHTML = "We are from Enyata";

pById.setAttribute("class", "subtext");
pById.setAttribute("id", "plus");

// console.log(pById.getAttribute("id"));

// if (pById.getAttribute("id") === "plus") {
// //  alert("You just cliked on the Plus button");
// }
let hasClass = pById.hasAttribute("class");
// console.log(hasClass);

pById.removeAttribute("id");
pById.removeAttribute("class");

document.addEventListener("click", () => {
  header.setAttribute("class", "changedHeader");
});

let url = "https://picsum.photos/200";

let img = document.createElement("img");
img.setAttribute("src", url);
img.setAttribute("id", "randomImg");
img.setAttribute("class", "randomImage");
let sectionOne = document.getElementById("section_1");
sectionOne.appendChild(img);

// console.log(document.getElementById("randomImg"));

//Exercise 2
//Write a program to remove an existing HTML Element

//Solution
sectionOne.remove();

//Javascript Forms

function validator() {
  let input = document.getElementById("name");
  let inputValue = input.value;
  if (inputValue === "") {
    let form = document.getElementById("reg_form");
    let error = document.getElementsByClassName("warning");
    if (error.length === 0) {
      let p = document.createElement("p");
      p.innerHTML = "This field is required.";
      p.style.color = "red";
      p.setAttribute("class", "warning");
      form.appendChild(p);
    }
    return false;
  }
  console.log(inputValue, true);
  return true;
}

//Loose and Strict Equality
let num = 5;
let num_s = '5';

// console.log("Strict", num_s === 5);
// console.log("Strict", num === 5);
// console.log("Loose", num_s == 5);
// console.log("Loose", num == 5);

//Exercise 3 (20 minutes)
/**
 * Build an HTML form which takes the following fields/values
 * 1. Full Name (Required)
 * 2. Phone Number (Required)
 * 3. Region of Residence (Required NB. Must be a selection)
 * 4. Age
 * 5. Employment Status
 */

//Javascript Events

function changeBkgColor () {
  let element = document.getElementById("click_btn");
  element.style.backgroundColor = "blue";
  element.style.color = "white";
}

let input = document.getElementById("name");

// input.addEventListener("blur", () => {
//   validator();
// });

window.addEventListener("load", () => {
//  checkCookie();
fileInput.addEventListener("change", () => {
  alert("Hello");
});
});

function checkCookie () {
  let text = "";
  if (navigator.cookieEnabled == true) {
    text = "cookies are enabled";
  }else{
    text = "cookies are not enabled";
  }
  alert(text);
}

window.addEventListener("unload", () => {
  prompt("Are you sure you want to leave? ");
});
 let fileInput = document.getElementById("file");

//  fileInput.removeEventListener("change");
 //onfocus
 //onkeydown
 //onkeyup
 //onmousehover


let form = document.getElementById("reg_form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
//Hoisting

//Callback Function
// function addEventListener(event, callback){
//   callback({target: "khdbvdv"});
// }