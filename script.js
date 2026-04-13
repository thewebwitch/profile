import { initCarousel } from './carousel.js';
import { initTheme } from './themeToggle.js';
import './interactiveHeader.js';
import './tabs.js';

// Initialize on page load
initTheme();
initCarousel();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.dataset.icon;
    console.log(name);
    el.style.webkitMaskImage = `url(assets/${name}.svg)`;
    el.style.maskImage = `url(assets/${name}.svg)`;
    el.classList.add('icon');
  });
});
