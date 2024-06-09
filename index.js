function showPage(pageId) {
    // Get references to the pages
const homepage = document.getElementById('homepage');
const projectpage = document.getElementById('projectpage');
const resumepage = document.getElementById('resumepage');
const aboutpage = document.getElementById('aboutpage');
const contactpage = document.getElementById('contactpage');
const themepage = document.getElementById('themepage');

  // Function to hide the page with fade-out effect
    function hidePage(page) {
        page.style.opacity = 0;
        setTimeout(() => {
        page.style.display ='none';
        }, 300); // Wait for the fade-out transition to complete (300ms)
    }
    // Function to show the page with fade-in effect
    function showPageWithFade(page) {
        page.style.opacity = 0;
        page.style.display ='grid'; // Or any other display property you want
        setTimeout(() => {
        page.style.opacity = 1;
        }, 100); // Apply the fade-in effect immediately
    }

    // Hide all pages with fade-out effect
    hidePage(homepage);
    hidePage(projectpage);
    hidePage(resumepage);
    hidePage(aboutpage);
    hidePage(contactpage);
    hidePage(themepage);
  
    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    setTimeout(() => {
    showPageWithFade(selectedPage);
    }, 300);
}

function toggleTheme(theme) {
    console.log('Toggle theme:', theme);
    document.body.classList.remove('theme-white', 'theme-blue', 'theme-black');        
    if (theme === 'blue') {
        document.body.classList.add('theme-blue');
    } else if (theme === 'white') {
        document.body.classList.add('theme-white');
    }
    else if (theme === 'black') {
        document.body.classList.add('theme-black');
    }
}

const projects = {
    myHealth: {
        image: "icons/java.svg",
        description: "Android application designed to assist dialysis patients with managing their disease and lifestyle.",
        link: "#"
    },
    hotel: {
        image: "icons/java.svg",
        description: "Application for scheduling appointments at a hotel.",
        link: "#"
    },
    qaAuto: {
        image: "icons/python.svg",
        description: "Automation script that populates a database with csv reports and can export specific reports based on searches.",
        link: "#"
    },
    fmAuto: {
        image: "icons/python.svg",
        description: "Automation script that reads a list of frames to be edited, finds their corresponding locations, exports a report, and uploads specific frame ranges to online collaboration platform Frame.io.",
        link: "#"
    },
    fileSort: {
        image: "icons/python.svg",
        description: "Automatic file sorter utilizing Artificial Intelligence to analyze files and sort them.",
        link: "#"
    },
    tennis: {
        image: "icons/python.svg",
        description: "Implemented machine learning algorithms on a dataset of tennis match results and measured predictive capabilities.",
        link: "https://github.com/sharkyx101/542Project"
    },
    flight: {
        image: "icons/python.svg",
        description: "Utilized data mining techniques on a dataset of flight costs to find underlying relationships.",
        link: "#"
    },
    trafficLight: {
        image: "icons/c.svg",
        description: "Traffic light simulation on an ESP32 board utilizing interrupts for timing changes.",
        link: "#"
    },
    potentiometer: {
        image: "icons/c.svg",
        description: "Reading a potentiometer and reflecting its position with a servo and led display on an ESP32 boad.",
        link: "#"
    }
};

function toggleProject(projectId) {
    const project = projects[projectId];
    if (project) {
        const imageElement = document.getElementById("project_icon");
        imageElement.src = project.image;

        const descriptionElement = document.getElementById("project_description_text");
        descriptionElement.textContent = project.description;

        const linkElement = document.getElementById("project_link_url");
        linkElement.href = project.link;
    }
}