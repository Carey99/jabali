let currentIndex = 0;
const sections = document.querySelectorAll('.explore-section');
const totalSections = sections.length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSections;
    document.querySelector('.scrolling-sections').style.transform = 
        `translateX(-${currentIndex * 100}%)`;
}, 5000); // Change section every 5 seconds