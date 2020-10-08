const searchButton = document.querySelector(".search");
const searchMenu = document.querySelector(".search-modal");

searchButton.addEventListener("click", (e) => {
    e.stopPropagation();
    searchMenu.classList.toggle("search-modal--hidden");
});
