document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle logic
    const menuButton = document.querySelector('.menu-icon');
    const navbarLinks = document.getElementById('myLinks');

    function toggleMenu() {
        navbarLinks.classList.toggle('open');
    }

    menuButton.addEventListener('click', toggleMenu);

    // Carousel logic
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length; // Include all images in the total count
    const carousel = document.querySelector('.carousel');

    // Create a wrapper for the carousel images
    const carouselWrapper = document.createElement('div');
    carouselWrapper.classList.add('carousel-wrapper');
    carouselWrapper.style.display = 'flex';

    // Append the images to the wrapper
    images.forEach(image => {
        carouselWrapper.appendChild(image);  // Add original image
    });

    // Add the wrapper to the carousel
    carousel.appendChild(carouselWrapper);

    // CSS animatsioon, et liikumine oleks pidev
    carouselWrapper.style.animation = `moveCarousel ${totalImages * 30}s linear infinite`;

    // CSS animatsiooni määramine
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes moveCarousel {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalImages * 100}%) }
        }
    `;
    document.head.appendChild(style);
});
