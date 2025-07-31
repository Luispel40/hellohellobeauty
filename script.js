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
        left: scrollAmount,
        behavior: 'smooth',
    });
    carousel.style.transform = `translateX(-${scrollAmount * 1700}px)`;
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

}

const itemsFlutuate = document.querySelectorAll('.item-flutuate')

const flutuateItems = () => {
    itemsFlutuate.forEach(item => {
        const scrollY = window.scrollY;
        item.style.transform = `translateY(${scrollY * -0.5 + 2600}px) rotate(${scrollY * -0.1}deg)`;
    })
}

window.addEventListener('scroll', flutuateItems);

const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const openContent = document.querySelector('.accordion-content.open');
        const openHeader = document.querySelector('.accordion-header.active');

        if (openContent && openContent !== header.nextElementSibling) {
          openContent.style.maxHeight = null;
          openContent.classList.remove('open');
          openHeader.classList.remove('active');
        }

        header.classList.toggle('active');
        const content = header.nextElementSibling;

        if (content.classList.contains('open')) {
          content.style.maxHeight = null;
          content.classList.remove('open');
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.classList.add('open');
        }
      });
    });

    const autoDate = document.querySelector('.auto-date');
    const date = new Date();
    const updateDateAutomatic = () => {
        // dia atual + 10
        if (date.getDate() + 10 > 30) {
            date.setDate(1);
            date.setMonth(date.getMonth() + 1);
        } else {
            date.setDate(date.getDate() + 5);
        }
        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const ano = date.getFullYear();
        autoDate.textContent = `${dia}/${mes}/${ano}`;
    }

    updateDateAutomatic();