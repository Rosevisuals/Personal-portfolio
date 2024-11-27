// Switch sections
document.querySelectorAll('.sidebar li').forEach((item, index) => {
    item.addEventListener('click', () => {
        // Hide all sections
        document.querySelectorAll('.editor .section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const sectionIds = ['home', 'about', 'projects', 'contact'];
        document.getElementById(sectionIds[index]).style.display = 'block';
    });
});

// Show the first section by default
document.getElementById('home').style.display = 'block';
// Select all tabs and tab content sections
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        tabs.forEach(tab => tab.classList.remove('active'));

        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Hide all content sections
        contents.forEach(content => content.classList.remove('active'));

        // Show the content section corresponding to the clicked tab
        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

/// Select all project cards
const projectCards = document.querySelectorAll('.project-card');

// Function to add the active class when in view
function swipeInOnScroll() {
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add('active');
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', swipeInOnScroll);

// Trigger the function once at load to reveal any visible cards
swipeInOnScroll();

