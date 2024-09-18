let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;


setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;  
}, 5000);