// ── Year ──────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Sticky nav shadow ─────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Mobile menu toggle ────────────────────────────
const toggle = document.getElementById('navToggle');
const links  = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Close mobile menu on link click
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// ── Active nav link on scroll ─────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ── Fade-in on scroll ─────────────────────────────
const fadeEls = document.querySelectorAll(
  '.hero__name, .hero__title, .hero__bio, .hero__cta, ' +
  '.section__title, .section__sub, ' +
  '.skill-group, .project-card, ' +
  '.contact-form, .contact-links'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ── Contact form validation ───────────────────────
const form    = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

function validateField(input, errorId, message) {
  const el = document.getElementById(errorId);
  if (!input.value.trim()) {
    input.classList.add('error');
    el.textContent = message;
    return false;
  }
  if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    input.classList.add('error');
    el.textContent = 'Please enter a valid email address.';
    return false;
  }
  input.classList.remove('error');
  el.textContent = '';
  return true;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const nameOk    = validateField(form.name,    'nameError',    'Please enter your name.');
  const emailOk   = validateField(form.email,   'emailError',   'Please enter your email.');
  const messageOk = validateField(form.message, 'messageError', 'Please enter a message.');

  if (nameOk && emailOk && messageOk) {
    // Replace with your actual form submission logic (e.g. fetch to a backend or service)
    form.reset();
    success.hidden = false;
    setTimeout(() => { success.hidden = true; }, 5000);
  }
});

// Clear errors on input
['name', 'email', 'message'].forEach(field => {
  form[field].addEventListener('input', () => {
    form[field].classList.remove('error');
    document.getElementById(`${field}Error`).textContent = '';
  });
});
