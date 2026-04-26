import { initCarousel } from './features/carousel';
import './features/tabs';

import { initTheme } from './scripts/themeToggle.js';
import './scripts/interactiveHeader.js';
import './styles/main.css';

// Initialize on page load
initTheme();
initCarousel();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tabicon]').forEach((el) => {
    const name = el.dataset.tabicon;
    el.style.webkitMaskImage = `url(./src/assets/${name}.svg)`;
    el.style.maskImage = `url(./src/assets/${name}.svg)`;
    el.classList.add('tab-icon');
  });
});
