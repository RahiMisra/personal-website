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