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
    setTimeout(()=>{
        if(menu.classList.contains('openModal')){
            c('.fa-bars').style.display = 'none'
            c('.fa-circle-xmark').style.display = 'flex'
             menu.style.opacity = 1;
        }else{
            c('.fa-bars').style.display = 'flex'
            c('.fa-circle-xmark').style.display = 'none'
        }
    },200)
});
