document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle logic
    const menuButton = document.querySelector('.menu-icon');
    const navbarLinks = document.getElementById('myLinks');

    // Function to toggle the mobile menu
    function toggleMenu() {
        navbarLinks.classList.toggle('open'); // Toggle 'open' class to show/hide the menu
    }

    // Event listener to handle menu button click
    menuButton.addEventListener('click', toggleMenu);

    // Carousel logic
    let currentIndex = 1; // Start from the second image (index 1) to show the first image
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length - 1; // Exclude the duplicate image for total count

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');

    // Function to move to the next image
    function nextImage() {
        if (currentIndex < totalImages) {
            currentIndex++;
        } else {
            // When reaching the last image, jump to the second image (skip the duplicate)
            currentIndex = 1;
            carousel.style.transition = 'none'; // Disable transition during reset
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease'; // Re-enable smooth transition
            }, 50);
        }
        updateCarouselPosition();
    }

    // Function to move to the previous image
    function prevImage() {
        if (currentIndex > 1) {
            currentIndex--;
        } else {
            // When reaching the first image, jump to the second to continue the loop
            currentIndex = totalImages - 1;
            carousel.style.transition = 'none'; // Disable transition during reset
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease'; // Re-enable smooth transition
            }, 50);
        }
        updateCarouselPosition();
    }

    // Update the carousel's position
    function updateCarouselPosition() {
        carousel.style.transform = `translateX(-${currentIndex * 35}%)`;
    }

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Auto-slide every 3 seconds
    setInterval(nextImage, 1000);
});
