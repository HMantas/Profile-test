
//Burger menu

let burgerMenu = document.querySelector(".hamburger");
let menuLink = document.querySelectorAll(".nav-link");
let menuLinks = document.querySelector(".nav-links");
let footer = document.querySelector(".footer");
let main = document.querySelector(".main")

burgerMenu.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
  footer.classList.toggle("hidden");
  burgerMenu.classList.toggle("burger-active");
  main.classList.toggle("hidden");
});

menuLink.forEach(n => n.addEventListener("click", () => {
  menuLinks.classList.remove("active");
  burgerMenu.classList.remove("burger-active");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
}));






