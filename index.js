document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    let currentIndex = 0;  // Start at the first image

    // Set up the event listeners for prev/next buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Function to show the current image
    function updateCarousel() {
        const offset = -currentIndex * 100;  // Calculate the offset based on the current index
        carousel.style.transition = 'transform 0.5s ease'; // Smooth transition
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Move to the next image (continually loop forward)
    nextButton.addEventListener('click', function() {
        if (currentIndex === totalImages - 1) {
            // If last image, jump back to the first one after a short delay
            setTimeout(() => {
                carousel.style.transition = 'none';  // Disable transition temporarily
                currentIndex = 0;
                updateCarousel();  // Immediately jump to first image
                // Re-enable smooth transition after a short delay
                setTimeout(() => carousel.style.transition = 'transform 0.5s ease', 20);
            }, 500);  // Wait for the last image to finish the move
        } else {
            currentIndex++;
            updateCarousel();
        }
    });

    // Move to the previous image (continually loop backward)
    prevButton.addEventListener('click', function() {
        if (currentIndex === 0) {
            // If first image, jump to the last one after a short delay
            setTimeout(() => {
                carousel.style.transition = 'none';  // Disable transition temporarily
                currentIndex = totalImages - 1;
                updateCarousel();  // Immediately jump to last image
                // Re-enable smooth transition after a short delay
                setTimeout(() => carousel.style.transition = 'transform 0.5s ease', 20);
            }, 500);  // Wait for the first image to finish the move
        } else {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initialize carousel with the first image
    updateCarousel();
});
