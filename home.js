const ViewMode = {
    Grid: "grid",
    List: "list"
}

const talePreviewsContainer = document.querySelector(".talePreviewsContainer")

let selecteViewMode = ViewMode.Grid
const gridToggleBtn = document.querySelector(".gridToggleBtn")
const listToggleBtn = document.querySelector(".listToggleBtn")

let gridContentHTML = ""
let listContentHTML = ""
talesList.forEach(tale => {
    const taleUrl = tale.title.replaceAll(' ', '')
    listContentHTML += (`<a href="/${taleUrl}" class="talePreview shadow card flex-grow-0 flex-shrink-0 p-2 w-100 text-decoration-none text-dark">
    <p class="taleTitle text-black display-6 fs-4 my-1">${tale.title}</p>
</a>`)
})
talesList.forEach(tale => {
    const taleUrl = tale.title.replaceAll(' ', '')
    gridContentHTML += (`<a href="/${taleUrl}" style="flex: 500px;" class="talePreview shadow card flex-grow-0 flex-shrink-0 p-3 mw-100 text-decoration-none text-dark">
    <p class="taleTitle text-black display-6 fs-3 mt-3 mb-4 text-center">${tale.title}</p>
    <p style="text-align: justify;" class="talePreviewText">
        ${tale.text.slice(0,524)}...
    </p>
</a>`)
})
talePreviewsContainer.innerHTML = gridContentHTML


gridToggleBtn.addEventListener("click", () => {
    selecteViewMode = ViewMode.Grid
    listToggleBtn.style.color = "gray"
    gridToggleBtn.style.color = "rgb(18,18,18)"
    talePreviewsContainer.innerHTML = gridContentHTML
    talePreviewsContainer.classList.remove("gap-2")
    talePreviewsContainer.classList.add("gap-5")
})
listToggleBtn.addEventListener("click", () => {
    selecteViewMode = ViewMode.List
    gridToggleBtn.style.color = "gray"
    listToggleBtn.style.color = "rgb(18,18,18)"
    talePreviewsContainer.innerHTML = listContentHTML
    talePreviewsContainer.classList.remove("gap-5")
    talePreviewsContainer.classList.add("gap-2")
})