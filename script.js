// Riptide — small bits of interactivity

// Sticky header shadow on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 24) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
menuToggle?.addEventListener('click', () => {
  primaryNav.classList.toggle('open');
});

// Close mobile menu on nav click
primaryNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => primaryNav.classList.remove('open'));
});

// FAQ: only one open at a time
const faqList = document.getElementById('faqList');
if (faqList) {
  const items = faqList.querySelectorAll('.faq-item');
  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach(other => { if (other !== item) other.open = false; });
      }
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
