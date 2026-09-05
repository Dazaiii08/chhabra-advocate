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

    document.querySelectorAll('.dropdown > a').forEach((toggle) => {
        toggle.setAttribute('aria-expanded', 'false');

        toggle.addEventListener('click', (event) => {
            event.preventDefault();

            const dropdown = toggle.parentElement;
            const isOpen = dropdown.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));

            document.querySelectorAll('.dropdown.open').forEach((openDropdown) => {
                if (openDropdown !== dropdown) {
                    openDropdown.classList.remove('open');
                    openDropdown.querySelector(':scope > a').setAttribute('aria-expanded', 'false');
                }
            });
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.open').forEach((dropdown) => {
                dropdown.classList.remove('open');
                dropdown.querySelector(':scope > a').setAttribute('aria-expanded', 'false');
            });
        }
    });

    const form = document.getElementById('enquiryForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Enquiry Sent!');
            form.reset();
        });
    }
});
