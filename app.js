
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
let navLinksText = document.querySelectorAll(".nav-link-text");
let box = document.querySelectorAll(".box");
let fade = document.querySelectorAll(".background__fade");

colorChanger.addEventListener("click", () => {
  for (let i = 0; i < fade.length; i++) {
    fade[i].classList.toggle("yellow-background");
    fade[i].classList.add("transition");
  };
  for (let i = 0; i < box.length; i++) {
    box[i].classList.toggle("yellow-background");
    box[i].classList.add("transition");
  };

  for (let i = 0; i < button.length; i++) {
    button[i].classList.toggle("yellow-background");
    button[i].classList.add("transition");
  };

  for (let i = 0; i < navLinksText.length; i++) {
    navLinksText[i].classList.toggle("yellow-font");
    navLinksText[i].classList.add("transition");
  };

  for (let i = 0; i < bar.length; i++) {
    bar[i].classList.toggle("yellow-background");
  };

  navigation.classList.toggle("yellow-font");
  navigation.classList.add("transition");
  creditsText.classList.toggle("yellow-font");
  creditsText.classList.add("transition");
  colorChanger.classList.toggle("blur");

  if(colorChanger.innerHTML === "Blue") {
    colorChanger.innerHTML = "Yellow";
  } else {
    colorChanger.innerHTML = "Blue";
  }
});


console.log(colorChanger.innerHTML)







