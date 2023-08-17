const carouselContainer = document.querySelector(".carousel");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const totalSlides = carouselSlides.length;
const slideWidth = carouselSlides[0].offsetWidth;
const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");

let currentIndex = 0;

function updateSlidePosition() {
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);


updateSlidePosition();
