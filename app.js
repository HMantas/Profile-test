
let burgerMenu = document.querySelector(".hamburger");
let menuLink = document.querySelectorAll(".nav-link");
let noDisplay = document.querySelector(".hero");
let menuLinks = document.querySelector(".nav-links");
let about = document.querySelector(".about");
let footer = document.querySelector(".footer");

burgerMenu.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
  about.classList.toggle("hidden");
  noDisplay.classList.toggle("hidden");
  footer.classList.toggle("hidden");
  burgerMenu.classList.toggle("burger-active");
});

menuLink.forEach(n => n.addEventListener("click", () => {
  menuLinks.classList.remove("active");
  burgerMenu.classList.remove("burger-active");
  about.classList.remove("hidden");
  noDisplay.classList.remove("hidden");
  footer.classList.remove("hidden");
}));






