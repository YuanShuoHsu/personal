let card = document.querySelector(".card");
let card_container = document.querySelector(".card_container");
card.onclick = (e) => {
    e.stopPropagation();
    card.classList.add("active");
};
card_container.onclick = (e) => {
    card.classList.remove("active");
};