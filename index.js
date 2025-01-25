document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle logic
    const menuButton = document.querySelector('.menu-icon');
    const navbarLinks = document.getElementById('myLinks');
    const menuItems = navbarLinks.querySelectorAll('a'); // Valib kõik menüü lingid

    // Function to toggle the mobile menu
    function toggleMenu() {
        navbarLinks.classList.toggle('open'); // Toggle 'open' class to show/hide the menu
    }

    // Event listener to handle menu button click
    menuButton.addEventListener('click', toggleMenu); 

    // Event listener to close the menu when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            navbarLinks.classList.remove('open'); // Eemaldab 'open' klassi menüüst
        });
    });
});


// Leidke navbar
const navbar = document.querySelector('.navbar');

// Muutujad kerimissuuna jälgimiseks
let lastScrollY = window.scrollY;

// Funktsioon navbar nähtavuse haldamiseks
const handleNavbarVisibility = () => {
    if (window.scrollY === 0) {
        // Kui kasutaja on lehe alguses, näita navbari
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
    } else if (window.scrollY > lastScrollY) {
        // Kui kerime allapoole, peida navbar
        navbar.classList.remove('visible');
        navbar.classList.add('hidden');
    } else {
        // Kui kerime ülespoole, näita navbar
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }

    // Uuenda viimast kerimise Y positsiooni
    lastScrollY = window.scrollY;
};

// Alguses kontrollime, kas leht on alguses
if (window.scrollY === 0) {
    navbar.classList.add('visible');
}

// Lisame kerimisürituse kuulaja
window.addEventListener('scroll', handleNavbarVisibility);
