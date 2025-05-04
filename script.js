// Select the hamburger and nav menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle nav on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');  // Show or hide the links
  hamburger.classList.toggle('toggle');     // Optional: Change hamburger icon to 'X'
});
