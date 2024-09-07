"use strict";
AOS.init();

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

// Video header

let frame = c(".video video");
function openClose() {
  let videoContainer = c(".video");
  let iframeUrl = "img/ns-clean-higienizacao.mp4";
  frame.src = iframeUrl;
  frame.removeAttribute("autoplay");
  setTimeout(() => {
    videoContainer.classList.toggle("close");
  }, 300);
}

c(".btnVideo").addEventListener("click", () => {
  // c(".headerFixed").style.display = "none";
  openClose();
});

c("#closeVideo").addEventListener("click", () => {
  // c(".headerFixed").style.display = "block";
  openClose();
});

// Slider About

let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

// Event scrolly

cs(".scrolllTo li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = c(targetId);


    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});


// slide testimonials

let cont = 1;
document.getElementById("radio-1").checked = true;

setInterval(function () {
  nextSlideTestimonials();
}, 4000);

function nextSlideTestimonials() {
  cont++;

  if (cont > 5) {
    cont = 1;
  }

  document.getElementById("radio-" + cont).checked = true;
}

// End slide testimonials




