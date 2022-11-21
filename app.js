
let burgerMenu = document.querySelector(".hamburger");
let menuLink = document.querySelectorAll(".nav-link");

burgerMenu.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".navigation").classList.toggle("fixed");
  document.querySelector(".hero").classList.toggle("margin-80");
  document.querySelector(".hamburger").classList.toggle("burger-active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("active");
  document.querySelector(".hamburger").classList.remove("burger-active");
}));

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   document.querySelector(".hamburger").classList.add("burger-active");
// }));

