/**
 * main.js - Minimal JS for Pentandra Redesign
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initial check on load
  handleScroll();

  // 2. Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Once visible, we can stop observing this specific element
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements with data-animate attribute
  const animatables = document.querySelectorAll('[data-animate]');
  animatables.forEach(el => observer.observe(el));

  // 3. Grid Cross Positioning (Optional enhancement for structural visual)
  // This logic could dynamically add crosses at intersections if needed,
  // but for now we rely on CSS-based structural lines.
});
