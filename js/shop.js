
const carousels = document.querySelectorAll(".carousel");
const slides = [...document.querySelectorAll(".carousel-slide")];
const totalSlides = 2;
const currentIndexes = [0, 0, 0, 0];

function updateSlidePosition(carouselIndex) {
  carousels[carouselIndex].style.transform = `translateX(-${currentIndexes[carouselIndex] * 100}%)`;
}

function nextSlide(carouselIndex) {
  currentIndexes[carouselIndex] = (currentIndexes[carouselIndex] + 1) % totalSlides;
  if (currentIndexes[carouselIndex] === 0) {

    currentIndexes[carouselIndex] = 0;
  }
  updateSlidePosition(carouselIndex);
}

function prevSlide(carouselIndex) {
  currentIndexes[carouselIndex] = (currentIndexes[carouselIndex] - 1 + totalSlides) % totalSlides;
  updateSlidePosition(carouselIndex);
}





