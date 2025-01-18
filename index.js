document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarLinks = document.querySelector('.navbar-links');

    // Define the toggleMenu function
    function toggleMenu() {
        navbarLinks.classList.toggle('visible');
    }

    // Add event listener to the menu icon
    menuIcon.addEventListener('click', toggleMenu);

    // Carousel logic (if any) stays here...


    // Carousel logic remains the same
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length; // Include all images in the total count
    const carousel = document.querySelector('.carousel');

    if (carousel) {
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

        // CSS animation for continuous movement
        carouselWrapper.style.animation = `moveCarousel ${totalImages * 30}s linear infinite`;

        // Add the animation style to the document
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes moveCarousel {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${totalImages * 100}%) }
            }
        `;
        document.head.appendChild(style);
    }
});
