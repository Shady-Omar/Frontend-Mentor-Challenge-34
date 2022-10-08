let menu = document.querySelector("#menu");
let closeIcon = document.querySelector("#close");
let menuMob = document.querySelector(".mob-menu")

menu.addEventListener("click", () => {
    menu.classList.add("hide")
    closeIcon.classList.add("show")
    menuMob.style.display = "flex"
});

closeIcon.addEventListener("click", () => {
    menu.classList.remove("hide")
    closeIcon.classList.remove("show")
    menuMob.style.display = "none"
});

