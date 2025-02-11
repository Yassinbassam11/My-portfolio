// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    this.reset();
});

// Navigation menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Get the burger menu and nav links elements
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // Add click event to burger menu
    burger.addEventListener('click', function() {
        // Toggle active class on both elements
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
});