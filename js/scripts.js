let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    const titles = ["Museo de Bucaramanga", "Museo de Medellin", "Museo de arte"];
    const contents = ["obras del mejor pintor de america latina.", "Adquiere tus entradas con nosotros arte a otro nivel.", "un evento especial para todos los amantes del arte."];

    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });

        if (document.getElementById("titulo")) {
            document.getElementById("titulo").innerText = titles[slideIndex];
        }
        if (document.getElementById("contenido")) {
            document.getElementById("contenido").innerText = contents[slideIndex];
        }

        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 30000); // Change image every 3 seconds
    }
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('show');
});

// Initialize the carousel
showSlides();


function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}