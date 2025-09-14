// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

// Smooth scroll for internal links
for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// Update year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Demo contact form handler
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    alert('Thanks! This demo form doesn\'t send yet. Connect it to a service like Formspree, Netlify Forms, or your own backend.');
  });
}
