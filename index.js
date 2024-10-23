const texts = ["web designer", "React developer", "graphics designer"];
let index = 0;
let textIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function type() {
    if (textIndex < texts[index].length) {
        dynamicText.textContent += texts[index].charAt(textIndex);
        textIndex++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    } else {
        setTimeout(erase, 2000); // Wait before erasing (in milliseconds)
    }
}

function erase() {
    if (textIndex > 0) {
        dynamicText.textContent = texts[index].substring(0, textIndex - 1);
        textIndex--;
        setTimeout(erase, 100); // Adjust erasing speed here (in milliseconds)
    } else {
        index = (index + 1) % texts.length; // Move to the next text
        setTimeout(type, 1000); // Wait before starting to type the next text
    }
}

// Start the typing animation
type();
const sections = document.querySelectorAll("section");
const scrollLine = document.querySelector(".scroll-line");

function updateScrollLine() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
            currentSection = section.getAttribute("id");
        }
    });

    // Update the position of the scroll line based on the current section
    const activeSection = document.getElementById(currentSection);
    if (activeSection) {
        const activeSectionTop = activeSection.getBoundingClientRect().top + window.scrollY;
        scrollLine.style.top = `${activeSectionTop}px`;
    }
}

// Add event listener for scroll event
window.addEventListener("scroll", updateScrollLine);