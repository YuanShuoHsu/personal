let card = document.querySelector(".card");
let cardContainer = document.querySelector(".cardContainer");
card.onclick = (e) => {
    e.stopPropagation();
    card.classList.add("active");
};
cardContainer.onclick = (e) => {
    card.classList.remove("active");
};

let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let cv = document.querySelector(".cv");
let swiperContainer = document.querySelector(".swiperContainer");
let profile = document.querySelector(".swiperContainer .swiper");
cv.onclick = (e) => {
    swiperContainer.style.pointerEvents = "auto";
    profile.style.opacity = "1";
    card.style.pointerEvents = "none";
    cardContainer.style.pointerEvents = "none";
}

let cvBackground = document.querySelectorAll(".swiper .swiper-wrapper .swiper-slide");
let cvImg = document.querySelectorAll(".swiper .swiper-wrapper .swiper-slide img");

cvBackground.forEach((currentBackground) => {
    currentBackground.onclick = (e) => {
        profile.style.opacity = "0";
        swiperContainer.style.pointerEvents = "none";
        card.style.pointerEvents = "auto";
        cardContainer.style.pointerEvents = "auto";
    };
});

cvImg.forEach((currentImg) => {
    currentImg.onclick = (e) => {
        e.stopPropagation();
    };
});