const button = document.querySelector(".gear");
const menu = document.querySelector(".pref");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("pref--hidden");
});
