"use strict"

let c = (a)=>document.querySelector(a);
let cs = (a)=>document.querySelectorAll(a);

// Controls
let hamburguer = c('.btnHamburguer');
let menu = c('.menuNav');

// fazer o menu open close

hamburguer.addEventListener('click', ()=>{

    menu.classList.toggle(openModal)
    
});

