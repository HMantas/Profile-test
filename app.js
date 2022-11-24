
let burgerMenu = document.querySelector(".hamburger");
let menuLink = document.querySelectorAll(".nav-link");
let noDisplay = document.querySelector(".hero");

burgerMenu.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".about").classList.toggle("hidden");
  noDisplay.classList.toggle("hidden");
  document.querySelector(".footer").classList.toggle("hidden");
  document.querySelector(".hamburger").classList.toggle("burger-active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("active");
  document.querySelector(".hamburger").classList.remove("burger-active");
  document.querySelector(".about").classList.remove("hidden");
  document.querySelector(".hero").classList.remove("hidden");
  document.querySelector(".footer").classList.remove("hidden");
}));

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   document.querySelector(".hamburger").classList.add("burger-active");
// }));




