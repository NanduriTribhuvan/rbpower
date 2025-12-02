function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
    updateDots();
}

const elements = document.querySelectorAll('.fade-up, .fade-in');
window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

const productGrid = document.getElementById('productGrid');
const dots = document.querySelectorAll('.carousel-dots .dot');

function updateDots() {
    const scrollPosition = productGrid.scrollLeft;
    const cardWidth = productGrid.firstElementChild.clientWidth + 30;
    const activeIndex = Math.round(scrollPosition / cardWidth);

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function scrollToProduct(index) {
    const cardWidth = productGrid.firstElementChild.clientWidth + 30;
    productGrid.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
    });
}

productGrid.addEventListener('scroll', updateDots);
window.addEventListener('load', updateDots);

const associates = document.querySelectorAll('.associate-card');
window.addEventListener('scroll', () => {
    associates.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// ---- Founder image slider (auto-play) ----
const founderSlides = document.querySelectorAll('.founder-slider .founder-slide');

if (founderSlides.length > 0) {
    let founderIndex = 0;

    // Make sure first slide is active
    founderSlides[0].classList.add('active');

    setInterval(() => {
        // remove current
        founderSlides[founderIndex].classList.remove('active');

        // move to next
        founderIndex = (founderIndex + 1) % founderSlides.length;

        // show next
        founderSlides[founderIndex].classList.add('active');
    }, 2000); // 2000ms = 2 seconds
}
