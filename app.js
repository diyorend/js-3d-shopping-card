const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const img = document.querySelector(".image img");
const description = document.querySelector("h3");

container.addEventListener("touchmove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 20;
  let y = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
container.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 20;
  let y = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
container.addEventListener("touchstart", (e) => {
  card.style.transition = "none";
  img.style.transform = "rotateZ(-30deg)";
  img.style.transition = "all 0.08s ease";
});
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  img.style.transform = "rotateZ(-30deg)";
  img.style.transition = "all 0.8s ease";
});
container.addEventListener("transitionend", (e) => {
  card.style.transition = "all 0.8s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  img.style.transform = "rotateZ(0deg)";
});
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.8s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  img.style.transform = "rotateZ(0deg)";
});
