let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentIndex++;
    if(currentIndex >= slides.length) currentIndex = 0;
    showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial display
showSlide(currentIndex);
