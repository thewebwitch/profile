import { initCarousel } from './carousel.js';
import { initTabs } from './tabs.js';

// Initialize on page load
initTabs();
initCarousel();

const toggleTheme = () => {
  console.log('Toggling theme');
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);
};

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
