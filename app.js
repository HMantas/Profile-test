
//Burger menu

let burgerMenu = document.querySelector(".hamburger");
let menuLink = document.querySelectorAll(".nav-link");
let menuLinks = document.querySelector(".nav-links");
let footer = document.querySelector(".footer");
let main = document.querySelector(".main")

burgerMenu.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
  burgerMenu.classList.toggle("burger-active");
  footer.classList.toggle("hidden");
  main.classList.toggle("hidden");
});

menuLink.forEach(n => n.addEventListener("click", () => {
  menuLinks.classList.remove("active");
  burgerMenu.classList.remove("burger-active");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
}));


let colorChanger = document.querySelector(".color-changer");
// Font color
let navigation = document.querySelector(".navigation");
let creditsText = document.querySelector(".credits__text");

// Background color
let bar = document.querySelectorAll(".bar");
let button = document.querySelectorAll(".btn");
let box = document.querySelectorAll(".box");

colorChanger.addEventListener("click", () => {
  for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "#facf0f";
  };
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "#facf0f";
  };
  for (let i = 0; i < bar.length; i++) {
    bar[i].style.backgroundColor = "#facf0f";
  };
  navigation.classList.toggle("yellow-font");
  creditsText.classList.toggle("yellow-font");
  console.log(button);
});








