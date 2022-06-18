const modalBtn = document.querySelector<HTMLButtonElement>(".modal-btn");
const modalBtnTwo = document.querySelector<HTMLButtonElement>(".modal-btn-two");
const modal = document.querySelector<HTMLDivElement>(".modal-overlay");
const closeBtn = document.querySelector<HTMLButtonElement>(".close-btn")
const closeBtnTwo = document.querySelector<HTMLButtonElement>(".close-btn-two")

modalBtnTwo?.addEventListener("click", () => {
    modal?.classList.add("open-modal")
})

modalBtn?.addEventListener("click", () => {
    modal?.classList.add("open-modal")
})

closeBtn?.addEventListener("click", () => {
    modal?.classList.remove("open-modal")
})

closeBtnTwo?.addEventListener("click", () => {
    modal?.classList.remove("open-modal")
})

export {}
