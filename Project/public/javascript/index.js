let currentIndex = 0;

const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

// Function to move to the next image
function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateCarouselPosition();
}

// Function to move to the previous image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Loop back to the last image
    }
    updateCarouselPosition();
}

// Update the carousel's position
function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentIndex * 610}px)`; // Move horizontally, including space between images
}

// Event listeners for the buttons
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Auto-slide every 3 seconds
setInterval(nextImage, 3000);
