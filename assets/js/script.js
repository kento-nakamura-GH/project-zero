/* ============================================
   CasLive LP (Project Zero) - script.js
   ============================================ */

// ---------- Smooth scroll ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 20;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
    }
  });
});

// ---------- Scroll reveal ----------
const revealSelectors = [
  '.section-heading',
  '.introduction__text',
  '.neon-card',
  '.exp-block',
  '.exp-cta',
  '.exp-feature',
  '.cta__character',
  '.cta__dl',
];
document.querySelectorAll(revealSelectors.join(',')).forEach((el) => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
