function openPopup(projectId) {
    const popup = document.getElementById('popup');
    const details = document.getElementById('popup-details');
    
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

    // Assign project-specific values based on projectId
    if (projectId === 'internhub') {
        Private = 'true';
        projectName = 'InternHub';
        projectImage = 'images/Internhub.png';
        projectDescription1 = 'A platform to connect interns with real-world opportunities in tech companies. It offers an easy-to-use interface for both companies and interns to create profiles, search for opportunities, and apply for jobs.';
        projectDescription2 = 'With features like job notifications, detailed company profiles, and an application tracker, InternHub helps bridge the gap between talent and tech companies. It\'s a powerful tool for interns to kickstart their careers in the tech industry.';
        projectLink = 'https://internhub.arendusekoobas.ee/';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'anyhouseradio') {
        Private = 'false';
        projectName = 'Any House Radio';
        projectImage = 'images/anyhouseradio.png';
        projectDescription1 = 'House music radio show hosted by DJ/Producer Eurlexa. The show features live mixes, guest appearances, and the best in house and electronic music. Tune in for a non-stop party vibe.';
        projectDescription2 = 'Any House Radio offers an immersive listening experience, allowing fans to discover fresh tracks, legendary classics, and interviews with top DJs and producers. It\'s the ultimate destination for house music lovers.';
        projectLink = 'https://anyhouseradio.com';
        githubLink = 'https://github.com/ManInBlack-coder/any_house_radio'; // Example GitHub link
        githubLogo = 'images/githublogo.png'; // GitHub logo for public projects
    } else if (projectId === 'thousandstock') {
        Private = 'true';
        projectName = 'ThousandStock';
        projectImage = 'images/Tstock.png';
        projectDescription1 = 'ThousandStock is a stock analysis and management platform designed to help investors make better decisions. The platform tracks stock trends, provides analysis on potential investments, and offers tools for portfolio management.';
        projectDescription2 = 'By analyzing real-time data and providing insightful metrics, ThousandStock helps users identify profitable opportunities and manage their investments with ease. Whether you\'re a novice or an experienced investor, ThousandStock can guide you to smarter financial decisions.';
        projectLink = '#';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'callassistant') {
        Private = 'true';
        projectName = 'Call Assistent';
        projectImage = 'images/Callast.png';
        projectDescription1 = 'Call Assistent is a real-time voice recognition application designed to convert speech into text. Ideal for professionals, students, and anyone in need of hands-free note-taking, this app ensures accuracy and efficiency.';
        projectDescription2 = 'The app utilizes advanced speech-to-text technology to transcribe conversations, meetings, or lectures in real-time. Users can easily save, edit, and share the transcriptions for later use.';
        projectLink = '#';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'estparty') {
        Private = 'false';
        projectName = 'Estparty';
        projectImage = 'images/estparty.jpg';
        projectDescription1 = 'Estparty is an event management platform designed to help users organize and promote local parties and events. From creating event listings to selling tickets, Estparty provides all the tools you need for a successful event.';
        projectDescription2 = 'With features like guest list management, ticket tracking, and event promotion tools, Estparty is the ultimate solution for event organizers looking to streamline their event planning and increase attendance.';
        projectLink = 'https://aleksanderita22.ikt.khk.ee/Veebiarendus/Mitmeleheline/project/Index.html';
        githubLink = 'https://github.com/your-username/estparty'; // Example GitHub link
        githubLogo = 'images/githublogo.png'; // GitHub logo for public projects
    } else if (projectId === 'youtube') {
        Private = 'true';
        projectName = 'YouTube mp4 to Wav';
        projectImage = 'images/YOUTUBE.png';
        projectDescription1 = 'This project is a clone of YouTube designed to practice frontend development skills. The app allows users to view videos, listen to music, and convert YouTube mp4 videos to wav audio format for offline listening.';
        projectDescription2 = 'Incorporating video streaming, playlist creation, and audio conversion functionality, this project demonstrates the power of frontend technologies for building interactive and useful web applications.';
        projectLink = '#';
        githubLink = ''; // No GitHub link for private projects
    } else if (projectId === 'carsearch') {
        Private = 'false';
        projectName = 'Car search database';
        projectImage = 'images/auto24.png';
        projectDescription1 = 'Car Search Database is an automotive marketplace platform where users can search for cars, buy and sell vehicles, and compare prices from various sellers. The platform provides detailed car listings, search filters, and price comparisons.';
        projectDescription2 = 'Whether you\'re buying your first car or selling a vehicle, Car Search Database makes it easier to find the perfect deal with comprehensive details about each listing and access to a wide selection of vehicles.';
        projectLink = '#';
        githubLink = 'https://github.com/your-username/carsearch'; // Example GitHub link
        githubLogo = 'images/githublogo.png'; // GitHub logo for public projects
    } else if (projectId === 'aiinterview') {
        Private = 'true';
        projectName = 'AI Interview';
        projectImage = 'images/ai.png';
        projectDescription1 = 'AI Interview leverages AI-powered solutions to enhance automation and data analysis capabilities. It is designed to simulate real interview scenarios and assess candidates based on their responses, helping employers make more informed hiring decisions.';
        projectDescription2 = 'The system evaluates candidate responses using natural language processing and provides feedback on areas such as communication skills, problem-solving, and technical knowledge.';
        projectLink = '#';
        githubLink = ''; // No GitHub link for private projects
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
