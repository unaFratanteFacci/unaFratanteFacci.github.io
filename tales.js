const talePageTitle = document.querySelector(".talePageTitle").innerText
const taleTitle = document.querySelector(".taleTitle")
const taleText = document.querySelector(".taleText")

let currentTale = undefined

talesList.forEach(tale => {
    if (tale.title == talePageTitle) currentTale = tale
})

taleTitle.innerHTML = currentTale.title
taleText.innerHTML = currentTale.text

taleText.style.fontSize = `${3.5*5}px`
const fsSelector = document.querySelector(".fsSelector")
fsSelector.addEventListener("change", e => {
    taleText.style.fontSize = `${fsSelector.value*5}px`
})

const redFilter = document.createElement("div")
redFilter.classList.add("redFilter")
const redLightSwitch = document.querySelector(".redLightSwitch")
redLightSwitch.addEventListener("change", e => {
    if (e.target.checked) document.body.appendChild(redFilter)
    else document.body.removeChild(redFilter)
})