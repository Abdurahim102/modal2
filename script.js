let btn = document.querySelector(".btn")
let card = document.querySelector(".card")
let btn2 = document.querySelector(".btn2")

btn.addEventListener("click", ()=>{
    card.style.top = "50px"
})

btn2.addEventListener("click", ()=>{
    card.style.top = "-100%"
})
