let show = true;

const hambContainer2 = document.querySelector(".container2_hamb")
const hambToggle = hambContainer2.querySelector(".hamb_toggle")

hambToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    hambContainer2.classList.toggle("on", show)
    show = !show;
})