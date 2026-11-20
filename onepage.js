document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
const sections = [...document.querySelectorAll('[data-nav-section]')];
menu.hidden = false;

function closeMenu() {
  header.classList.remove('nav-open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  header.classList.toggle('nav-open', open);
  menu.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header.classList.contains('nav-open')) {
    closeMenu();
    menu.focus();
  }
});

let scheduled = false;
function updateActiveSection() {
  const marker = header.getBoundingClientRect().height + 90;
  let current = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = sections.at(-1).id;
  navLinks.forEach(link => {
    if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateActiveSection); }
}, { passive:true });
window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMenu(); updateActiveSection(); });
window.addEventListener('load', updateActiveSection);
window.addEventListener('hashchange', updateActiveSection);
document.getElementById('year').textContent = new Date().getFullYear();
updateActiveSection();
