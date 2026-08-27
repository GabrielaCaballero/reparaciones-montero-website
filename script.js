const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');

function setNavOpen(isOpen) {
  nav.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

toggle.addEventListener('click', () => {
  setNavOpen(!nav.classList.contains('open'));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    setNavOpen(false);
  });
});
