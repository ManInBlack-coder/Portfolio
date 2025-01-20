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

});