const menuEl = document.querySelector(".menu")
const menuBtn = document.querySelector("#menu-btn")
const gameCont = document.querySelector(".game-container")
const timeEl = document.querySelector(".time")
const scoreEL = document.querySelector(".score")

let sfx = new Audio("/assets/arrow.wav")
let seconds = 0
let score = 0

menuBtn.addEventListener("click", ()=>{
    menuEl.classList.add("hide")
    gameCont.classList.remove("hide")
    theGame()
})
function theGame(){
    createBug()
    setInterval(increaseTime,1000)
}
function randPos(){
    // let width = window.innerWidth
    // let height = window.innerHeight
    // let x = Math.random() * (width-200)+100
    // let y = Math.random() * (height-200)+100
    let x = Math.random() * 80 
    let y = Math.random() * 80 + 10

    return {x,y}
}
function createBug(){
    let {x,y} = randPos()
    let bug = document.createElement("div")
    gameCont.appendChild(bug)
    bug.classList.add("bugCont")
    bug.innerHTML =`<img src="assets/bug.png" alt="bug">`
    bug.style.left = `${x}vw`
    bug.style.top = `${y}vh`
    // bug.style.left = `${x}px`
    // bug.style.top = `${y}px`
    bug.addEventListener("click", catchBug)
}
function addBug(){
    setTimeout(createBug, 1000)
    setTimeout(createBug, 1200)
}
function catchBug(){
    sfx.pause()
    sfx.currentTime = 0
    sfx.play()
    score++
    scoreEL.textContent=score
    this.classList.add("caught")
    setTimeout(()=>{
        this.remove()
    },500)
    addBug()
}

function increaseTime(){
    let m = Math.floor(seconds/60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.textContent = `${m}:${s}`
    seconds++
}