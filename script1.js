// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get all navbar links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Function to hide all sections and show the clicked one
    function showSection(target) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
    }

    // Add click event listener to each navbar link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const target = link.getAttribute('data-target');
            showSection(target);
        });
    });

    // Show the home section by default when the page loads
    showSection('home');
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleTitle = document.querySelector(".toggle-title"); // The section title
    const apiDefinitionBox = document.querySelector(".api-definition-box");
    const imagePlaceholder = document.querySelector(".image-placeholder");
    const realWorldExample = document.querySelector(".real-world-example");
    const memeSection = document.querySelector(".meme-section");
    
    // Event listener for the title click
    toggleTitle.addEventListener("click", function() {
        // Toggle visibility for each content element
        if (apiDefinitionBox.style.display === "none") {
            apiDefinitionBox.style.display = "block";
            imagePlaceholder.style.display = "block";
            realWorldExample.style.display = "block";
            memeSection.style.display = "block";
        } else {
            apiDefinitionBox.style.display = "none";
            imagePlaceholder.style.display = "none";
            realWorldExample.style.display = "none";
            memeSection.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');

    function showSection(target) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            showSection(target);
        });
    });

    showSection('home');
});
s