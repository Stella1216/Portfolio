document.addEventListener("DOMContentLoaded", function() {
    const linkedinLink = document.getElementById("linkedin-link");

    linkedinLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        openLinkedInProfile();
    });

    function openLinkedInProfile() {
        const linkedinURL = "https://www.linkedin.com/in/stella-j-s-60653922a"; 
        window.open(linkedinURL, "_blank");
    }
});


// script.js
document.addEventListener("DOMContentLoaded", function() {
    const githubLink = document.getElementById("github-link");

    githubLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        openGitHubProfile();
    });

    function openGitHubProfile() {
        const githubURL = "https://github.com/Stella1216"; 
        window.open(githubURL, "_blank");
    }
});
