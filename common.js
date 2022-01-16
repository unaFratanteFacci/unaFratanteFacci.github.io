const backToTopArrow = document.createElement("div")
backToTopArrow.classList.add("backToTopArrow")
backToTopArrow.innerHTML = `<i class="fa fa-chevron-up" aria-hidden="true"></i>`
document.body.appendChild(backToTopArrow)

window.addEventListener("scroll", e => {
    if (window.scrollY > 0) backToTopArrow.style.display = "block"
    else backToTopArrow.style.display = "none"
})

backToTopArrow.addEventListener("click", () => {
    window.scrollTo(0, 0)
})