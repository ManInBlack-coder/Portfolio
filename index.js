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
} else {
    navbar.classList.add('hidden');
}

// Kerimise sündmuse kuulaja, et hallata navbari nähtavust
window.addEventListener('scroll', handleNavbarVisibility);



document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scroll-down-btn");
    const firstSection = document.getElementById("prjct-bnnr");
    const topSection = document.getElementById("about");

    // Alguses on nupp peidetud
    scrollBtn.classList.remove("show");

    // Funktsioon, mis kontrollib, kas oleme "about" sektsiooni juures
    function checkScrollPosition() {
        const scrollPosition = window.scrollY;

        // Kui oleme "about" sektsioonis või kõrgemal, siis kuvame nupu
        if (scrollPosition >= topSection.offsetTop - window.innerHeight && scrollPosition < topSection.offsetTop + topSection.offsetHeight) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    }

    // Kontrollime asukohta kohe lehe laadimise ajal
    checkScrollPosition();

    // Kui nupp vajutatakse, kerib leht "projects-banner" sektsiooni peale ja nupp kaob
    scrollBtn.addEventListener("click", function () {
        firstSection.scrollIntoView({ behavior: "smooth" });
        scrollBtn.classList.remove("show"); // Peidab nuppu pärast klõpsamist
    });

    // Kerimise käigus kontrollime, kas oleme "about" sektsiooni juures
    window.addEventListener("scroll", checkScrollPosition);
});






document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const options = {
        root: null, // jälgib vaateakent
        rootMargin: "0px",
        threshold: 0.2, // 20% elemendist peab olema nähtav
    };

    const fadeInObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Peale ilmumist ei jälgi enam
            }
        });
    }, options);

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const targetSection = document.getElementById("about_me_backgr");

    // Arvuta navbari kõrgus pärast lehe laadimist
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    // Funktsioon, et kerida õigele positsioonile, arvestades navbari kõrgust
    function scrollToTarget() {
        // Kerib elemendile, arvestades navbari kõrgust
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight, // Arvestame navbari kõrgusega
            behavior: "smooth",
        });
    }

    // Kui lehe URL-l on fragment (#about_me_backgr), siis kerime sinna õigesti
    if (window.location.hash === "#about_me_backgr") {
        scrollToTarget();
    }

    // Kui keritakse lihtsalt lehe sisu (mitte fragmenti kaudu), siis kontrollime iga kerimist
    window.addEventListener("hashchange", function () {
        if (window.location.hash === "#about_me_backgr") {
            scrollToTarget();
        }
    });
});
