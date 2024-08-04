"use strict"

let c = (a)=>document.querySelector(a);
let cs = (a)=>document.querySelectorAll(a);

let hamburguer = c('.btnHamburguer');
let menu = c('.menuNav');


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('openModal')
    
});



