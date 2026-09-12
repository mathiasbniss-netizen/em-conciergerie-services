/* ========================================
   MENU MOBILE
======================================== */

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');

    document.body.classList.toggle('menu-open', isOpen);

    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  const navLinks = mainNav.querySelectorAll('a');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ========================================
   FORMULAIRE DE CONTACT
======================================== */

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    formSuccess.classList.add('visible');

    contactForm.reset();

    formSuccess.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}


/* ========================================
   ANIMATION D'APPARITION AU SCROLL
======================================== */

const animatedElements = document.querySelectorAll(
  '.service-card, .service-detail, .approach-content, .approach-image, .intro-content'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  animatedElements.forEach((element) => {
    element.classList.add('fade-in');
    observer.observe(element);
  });
}


/* ========================================
   ANNÉE AUTOMATIQUE DANS LE FOOTER
======================================== */

const currentYear = new Date().getFullYear();

document.querySelectorAll('.footer-bottom p').forEach((element) => {
  element.innerHTML = element.innerHTML.replace(
    '2026',
    currentYear
  );
});