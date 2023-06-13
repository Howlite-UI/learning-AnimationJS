"use strict";

console.log("all work ! ☻");

// animation de texte

// window.alert("☺☺☺☺☺☺☺")

//Animation de texte au chargement de ma fenetre de naviation

// window.addEventListener("DOMContentLoaded", function () {
//   const myHeading = document.getElementById("my-heading");
//   myHeading.classList.add("active");
// });

//Animation de fade out fade in

const MY_HEADING = document.getElementById("my-heading");
const FADE_BUTTON = document.getElementById("fade-out");

FADE_BUTTON.addEventListener("click", () => {
  MY_HEADING.classList.toggle("active");
});
setTimeout(() => {
  MY_HEADING.classList.add("active");
}, 2000);

//animation loading

const SECTION = document.getElementById("section");
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset + window.innerHeight;
  if (scrollPosition > SECTION.offsetTop) {
    SECTION.classList.add("active");
  }
});

console.log(window.pageYOffset + window.innerHeight);
