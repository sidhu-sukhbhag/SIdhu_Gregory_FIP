// Get the hamburger menu button and the menu
 const hamburger = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.innerpage_navbar');
            
// Add an event listener to the hamburger menu button
hamburger.addEventListener('click', () => {
// Toggle the menu
 menu.classList.toggle('show');
 });
