const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const typedText = document.getElementById('typed-text');
const colors = ['#007acc', '#28a745', '#dc3545', '#ffc107']; 
const words = ['Frontend Developer 😌', 'Lifelong Learner 🧑🏻‍💻', 'Creative Thinker 💭', 'Problem Solver 👩‍🏭'];
let wordIndex = 0;
let charIndex = 0;

const typingSpeed = 150; // Speed of typing in milliseconds
const erasingSpeed = 100; // Speed of erasing in milliseconds
const delayBetweenWords = 1500; // Delay before typing the next word

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        // Change the text and color dynamically
        typedText.textContent += words[wordIndex].charAt(charIndex);
        typedText.style.color = colors[wordIndex]; // Change color based on the word
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, delayBetweenWords);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word in the array
        setTimeout(typeWord, typingSpeed);
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWord, delayBetweenWords);
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle hamburger animation
    navLinks.classList.toggle('active'); // Show or hide the nav links
});
