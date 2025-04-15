const hamnenu = document.querySelector(".hamburgermenu");
const hambtn = document.querySelector(".ham")
const col = document.querySelector(".fa-brands")

const magicon = document.querySelector(".mag")


hambtn.addEventListener('click', function () {

    hamnenu.classList.toggle('active')
    hambtn.classList.toggle('active')
    magicon.classList.toggle('active')
    col.classList.toggle('active')
    
})