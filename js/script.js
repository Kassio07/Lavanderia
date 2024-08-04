"use strict";

let c = (a) => document.querySelector(a);
let cs = (a) => document.querySelectorAll(a);

let logo = c(".logo");
let hamburguer = c(".btnHamburguer");
let menu = c(".menuNav");

hamburguer.addEventListener("click", () => {
  logo.classList.toggle("noneImg");
  menu.classList.toggle("openModal");
});
