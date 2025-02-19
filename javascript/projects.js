function openPopup(projectId) {
    const popup = document.getElementById('popup');
    const details = document.getElementById('popup-details');
    //*idk kirjutasin midagi 
    //idk 
    //idk
    // Default project data
    let projectName = '';
    let projectImage = '';
    let projectDescription1 = '';
    let projectDescription2 = '';
    let projectLink = '';
    let githubLink = '';
    let linkText = '';
    let githubLogo = '';
    let privateRepoText = ''; // Variable to store private repository message


    typescript_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/typescript.svg" alt="TypeScript Logo" class="stack-icon">'
    javascript_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/javascript.svg" alt="JavaScript Logo" class="stack-icon">'
    css_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/css.svg" alt="CSS Logo" class="stack-icon">'
    supabase_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/supalogo.png" alt="Supabase Logo" class="stack-icon">'
    mysql_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/mysql.svg" alt="MySQL Logo" class="stack-icon">'
    py_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/python.svg" alt="Python Logo" class="stack-icon">'
    react_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/react.svg" alt="React Logo" class="stack-icon">'
    php_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/php.svg" alt="PHP Logo" class="stack-icon">'
    nodejs_icon = '<img style=" width: 50px; height: 50px;" src="../stack_icons/nodejs.svg" alt="Node.js Logo" class="stack-icon">'
    tailwind_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/tailwind.png" alt="Tailwind CSS Logo" class="stack-icon">'
    html_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/html.svg" alt="html Logo" class="stack-icon"'
    jest_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/jestpng.png" alt="html Logo" class="stack-icon"'
    



    // Assign project-specific values based on projectId
    if (projectId === 'internhub') {
        Private = 'true';
        projectName = 'InternHub';
        projectImage = 'images/Internhub.webp';
        projectDescription1 = 'A platform that connects intern with companies and prepares them for upcoming internship. Platform includes internships matching, artificial intelligence powered interview simulator and preparation tasks that are helping to understand how working really is in companies .';
        usedStack = `${javascript_icon} ${typescript_icon} ${react_icon} ${tailwind_icon} ${supabase_icon} ${jest_icon}  `
        projectDescription2 = 'InternHub startup was founded by me and my classmates since we won II place at EdTech Hackaton 2024. By myself in this project now I am responsible of platforms AI powered interview simulator developement and supporting other frontend components developement.';
        projectLink = 'https://internhub.arendusekoobas.ee/';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'anyhouseradio') {
        Private = 'false';
        projectName = 'Any House Radio';
        projectImage = 'images/anyhouseradio.webp','images/Tstock.webp';
        projectDescription1 = 'Official website of house music radio podcast show that is hosted by DJ/Producer Eurlexa.';
        projectDescription2 = 'Website was created for sharing latest episodes, remix releases and news of Any House Radio. Any House Radio is With little underground subtone radio podcast that offers around hour long mix episodes and remix releases to people who want hear energetic and cosily house tunes.';
        usedStack = `${nodejs_icon} ${javascript_icon} ${css_icon} ${html_icon}`
        projectLink = 'https://anyhouseradio.com';
        githubLink = 'https://github.com/ManInBlack-coder/any_house_radio'; // Example GitHub link
        githubLogo = 'images/githublogo.webp'; // GitHub logo for public projects
    } else if (projectId === 'thousandstock') {
        Private = 'true';
        projectName = 'ThousandStock';
        projectImage = 'images/Tstock.webp';
        projectDescription1 = 'ThousandStock is dividend shares oriented stock managament and monitoring platform.';
        projectDescription2 = 'This Platforms idea is to monitore automatically best stocks that are paying most dividend money. Platform also let\'s manage information, articles of stocks and has smart dashboard.';
        usedStack = `${javascript_icon} ${typescript_icon} ${react_icon} ${jest_icon}  ${css_icon} ${py_icon} ${mysql_icon} ${nodejs_icon}`
        projectLink = '#';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'callassistant') {
        Private = 'true';
        projectName = 'Call Assistent';
        projectImage = 'images/Callast.webp';
        projectDescription1 = 'Call Assistent is fast notes managament application that let\'s user record his/her tasks to app.';
        projectDescription2 = 'The app has speech recognition technology that makes tasks adding usage more faster.';
        usedStack = `${react_icon} ${typescript_icon} ${javascript_icon} ${css_icon} ${mysql_icon} ${nodejs_icon} `
        projectLink = '#';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'youtube') {
        Private = 'true';
        projectName = 'YouTube mp4 to Wav';
        projectImage = 'images/YOUTUBE.webp';
        projectDescription1 = 'Youtube video to WAV audio downloader that is created for educational purposes';
        projectDescription2 = 'This simple web app was created for faster, easier and with more quality no copyright sound music downloading. It saves download history that allows download again song when it\'s gone missing or something else has happened that gave reason to download it again.';
        usedStack = ` ${nodejs_icon} ${javascript_icon} ${css_icon} ${html_icon}  `
        projectLink = '#';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'carsearch') {
        Private = 'false';
        projectName = 'Car search database';
        projectImage = 'images/auto24.webp';
        projectDescription1 = 'Car Search Database that search logic is almost identical with Auto24 car searching engine.';
        projectDescription2 = 'This car search database web solution was created for practising php language usage in web projects. That gave me better understanding of using php for serverside problem solutions.';
        usedStack = `${javascript_icon}  ${php_icon} ${html_icon} ${css_icon} ${nodejs_icon} `
        projectLink = '#';
        githubLink = 'https://github.com/ManInBlack-coder/auto24_PHP'; // Example GitHub link
        githubLogo = 'images/githublogo.webp'; // GitHub logo for public projects
    } 

    // Display private repository message if no GitHub link
    if (!githubLink) {
        privateRepoText = '<p style="font-size: 1.2rem; font-style: italic; color: #888;">Private Repository</p>';
    }

    if (projectLink === '#') {
        linkText = 'Sorry, this project is not hosted :(';
    } else {
        linkText = "Visit the project page";
    }

    // Common HTML structure for the popup content
    let commonStyle = `
        <h2 style="text-align: center; font-size: 2rem; margin-bottom: 20px;">${projectName}</h2>
        <img src="${projectImage}" alt="${projectName}" style="width: 100%; max-width: 1000px; height: auto; margin: 20px 0; display: block; margin-left: auto; margin-right: auto;">
        <p style="font-size: 1.1rem; line-height: 1.6;">${projectDescription1}</p>
        <p style="font-size: 1.1rem; line-height: 1.6;">${projectDescription2}</p>


<style>
    @media (max-width: 768px) {
        .used-stack-container {
            flex-direction: column; /* Muudab virnastatuks väikestel ekraanidel */
            align-items: flex-start; /* Joondab vasakule */
        }

        .used-stack-container span {
            margin-top: 5px; /* Lisab väikse vahe teksti ja ikoonide vahele */
            flex-grow: 0; /* Ei veni üle ekraani */
        }
    }
</style>


<h3 class="used-stack-container" style="font-size: 1.1rem; line-height: 1.6; display: flex; align-items: center;">
    Used Stack: 
    <span style="margin-left: 5px; max-width: 100%; flex-grow: 1; text-align: left;">${usedStack}</span>
</h3>
        <a href="${projectLink}" target="_blank" style="color: #ff5500; text-decoration: none; font-size: 1.2rem; font-weight: bold;">${linkText}</a>
        ${privateRepoText}
    `;

    if (githubLink && githubLogo) {
        commonStyle += `
            <div style="margin-top: 20px;">
                <a href="${githubLink}" target="_blank">
                    <img src="${githubLogo}" alt="GitHub" style="width: 30px; height: 30px;">
                </a>
            </div>
        `;
    }

    // Set the content in the popup details
    details.innerHTML = commonStyle;

    // Display the popup
    popup.style.display = 'flex';
}

// Close popup when clicking on the overlay
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Close popup when clicking anywhere outside the popup content
document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
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
