const carousel = document.querySelector('.carousel-slides');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = carousel.querySelectorAll('.carousel-slides img').length - 1;
    }
    updateCarousel();
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= carousel.querySelectorAll('.carousel-slides img').length) {
        currentSlide = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const slides = carousel.querySelectorAll('.carousel-slides img');
    //  scrool smooth from 0 to 1
    const scrollAmount = currentSlide / (slides.length - 1);
    carousel.scrollTo({
        left: scrollAmount ,
        behavior: 'smooth',
    });
    carousel.style.transform = `translateX(-${scrollAmount * 1700}px)`;
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

}