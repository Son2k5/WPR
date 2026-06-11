"use strict";

const board = document.getElementById("board");

const imgs = [
     "../images/9S.png",
    "../images/AC.png",
    "../images/10H.png",
    "../images/10D.png",
    "../images/10C.png",
]

imgs.forEach( e =>{
    let img = document.createElement("img");
    img.src = e;
    
    img.addEventListener("click" ,() =>{
        document.querySelectorAll("#board img").forEach(el =>{
            el.classList.remove("enlarged");
        })
        img.classList.add("enlarged");
    })
    board.appendChild(img);
})