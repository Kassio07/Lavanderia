"use strict";

let c = (a) => document.querySelector(a);
let cs = (a) => document.querySelectorAll(a);

let logo = c(".logo");
let hamburguer = c(".btnHamburguer");
let menu = c(".menuNav");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("openModal");
  logo.classList.toggle("noneImg");

  menu.style.opacity = 0;
  setTimeout(() => {
    if (menu.classList.contains("openModal")) {
      c(".fa-bars").style.display = "none";
      c(".fa-circle-xmark").style.display = "flex";
      menu.style.opacity = 1;
    } else {
      c(".fa-bars").style.display = "flex";
      c(".fa-circle-xmark").style.display = "none";
    }
  }, 200);
});

const frame = c(".video video");
function openClose() {
  const video = c(".video");
  video.style.opacity = 0;
  setTimeout(() => {
    video.classList.toggle("close");
    video.style.opacity = 1;
  }, 500);
}

c(".btnVideo").addEventListener("click", () => {
  c(".headerFixed").style.display = "none";
  openClose();
});
c("#closeVideo").addEventListener("click", () => {
  c(".headerFixed").style.display = "block";

  let src = frame.src;
  frame.src = src;
  openClose();
});

let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function(){
    nextImage();
},4000)

function nextImage() {
  count++;
  if(count > 4) {
    count = 1;
  }
  document.getElementById("radio"+ count).checked = true;
}
