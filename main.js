const menuEl = document.querySelector(".menu")
const menuBtn = document.querySelector("#menu-btn")
const gameCont = document.querySelector(".game-container")
const timeEl = document.querySelector(".time")
const scoreEL = document.querySelector(".score")

menuBtn.addEventListener("click", ()=>{
    menuEl.classList.add("hide")
    gameCont.classList.remove("hide")
})