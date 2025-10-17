// Mobile menu + helpers
const menuBtn = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      navLinks && navLinks.classList.remove('open');
      menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
// Year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
