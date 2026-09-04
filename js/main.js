let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let autoSlideTimer;

// Carousel Slide Switch Function
function setSlide(index) {
    if (!slides.length) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto Slide every 5 seconds
function startSlider() {
    autoSlideTimer = setInterval(() => {
        let nextIndex = (currentSlide + 1) % slides.length;
        setSlide(nextIndex);
    }, 5000);
}

// Form Submission Event
document.addEventListener('DOMContentLoaded', () => {
    startSlider();

    const form = document.getElementById('enquiryForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Enquiry Sent!');
            form.reset();
        });
    }
});
