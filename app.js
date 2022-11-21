
let element = document.querySelector(".hamburger");

element.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".navigation").classList.toggle("fixed");
  document.querySelector(".hero").classList.toggle("margin");
});
