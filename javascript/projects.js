let lastOpenedProjectId = null;

function openPopup(projectId) {
    const dict = window.i18n && window.i18n.dict;
    if (!dict) return; // i18n not ready yet; will re-render via onLanguageChange once it is

    lastOpenedProjectId = projectId;

    const popup = document.getElementById('popup');
    const details = document.getElementById('popup-details');

    const t = window.i18n.t;
    const textData = t(`popup.projects.${projectId}`);
    if (!textData) return;

    // Default project data
    let projectName = textData.name;
    let projectImage = '';
    let projectDescription1 = textData.description1;
    let projectDescription2 = textData.description2;
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
    java_icon = '<img style=" width: 40px; height: 40px;" src="../stack_icons/java.png" alt="java Logo" class="stack-icon"'




    // Assign project-specific values based on projectId
    if (projectId === 'internkit') {
        Private = 'true';
        projectImage = 'images/internKit.webp';
        usedStack = `${javascript_icon} ${typescript_icon} ${react_icon} ${tailwind_icon} ${supabase_icon} ${jest_icon}  `
        projectLink = 'https://app.internkit.ee/';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'stockbot') {
        Private = 'true';
        projectImage = 'images/Stockbot.wepb';
        usedStack = '';
        projectLink = '#';
        githubLink = '';
    } else if (projectId === 'golang-api') {
        Private = 'true';
        projectImage = 'images/GoLangApiLayers.webp';
        usedStack = '';
        projectLink = '#';
        githubLink = 'https://github.com/ManInBlack-coder/golang-api-base';
    } else if (projectId === 'avalah') {
        Private = 'true';
        projectImage = 'images/Avalah.webp';
        usedStack = '';
        projectLink = 'https://avalah.ee';
        githubLink = '';
    }

    // Display private repository message if no GitHub link
    if (!githubLink) {
        privateRepoText = `<p style="font-size: 1.2rem; font-style: italic; color: #888;">${t('popup.privateRepository')}</p>`;
    }

    if (projectLink === '#') {
        linkText = t('popup.notHosted');
    } else {
        linkText = t('popup.visitProject');
    }

    // Function to check if project has vertical image
    const verticalProjects = []; // Lisa siia projektide ID-d, kus on vertikaalsed pildid

    const imageStyle = !projectImage
        ? `<div style="width: 100%; max-width: 1000px; height: 300px; margin: 20px auto; border-radius: 10px; background-color: #2a2a2a; display: flex; align-items: center; justify-content: center;">
            <span class="material-symbols-outlined" style="font-size: 64px; color: #215c7a;">code</span>
           </div>`
        : verticalProjects.includes(projectId)
        ? `<div style="width: 100%; max-width: 500px; height: 600px; margin: 20px auto; display: flex; justify-content: center; align-items: center; overflow: hidden;">
            <img src="${projectImage}" alt="${projectName}" style="width: 100%; height: 100%; object-fit: contain; max-height: 600px;">
           </div>`
        : `<img src="${projectImage}" alt="${projectName}" style="width: 100%; max-width: 1000px; height: auto; margin: 20px 0; display: block; margin-left: auto; margin-right: auto;">`;

    const usedStackBlock = usedStack
        ? `<style>
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
    ${t('popup.usedStackLabel')}
    <span style="margin-left: 5px; max-width: 100%; flex-grow: 1; text-align: left;">${usedStack}</span>
</h3>`
        : '';

    // Common HTML structure for the popup content
    let commonStyle = `
        <h2 style="text-align: center; font-size: 2rem; margin-bottom: 20px;">${projectName}</h2>
        ${imageStyle}
        <p style="font-size: 1.1rem; line-height: 1.6;">${projectDescription1}</p>
        <p style="font-size: 1.1rem; line-height: 1.6;">${projectDescription2}</p>
        ${usedStackBlock}
        <a href="${projectLink}" target="_blank" style="color: #ff5500; text-decoration: none; font-size: 1.2rem; font-weight: bold;">${linkText}</a>
        ${privateRepoText}
    `;

    if (githubLink && githubLogo) {
        commonStyle += `
            <div style="margin-top: 20px;">
                <a href="${githubLink}" target="_blank">
                    <img src="${githubLogo}" alt="${t('popup.githubAlt')}" style="width: 30px; height: 30px;">
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

// Re-render the open popup's text when the language is switched
if (window.i18nOnChange) {
    window.i18nOnChange(function () {
        const popup = document.getElementById('popup');
        if (lastOpenedProjectId && popup.style.display === 'flex') {
            openPopup(lastOpenedProjectId);
        }
    });
}






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
