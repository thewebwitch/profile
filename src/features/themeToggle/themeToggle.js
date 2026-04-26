import { themeStore } from '@/stores';
import { applyThemeToggleStyles } from './themeToggle.view.js';
import { DARK_MODE_TEXT, LIGHT_MODE_TEXT } from './themeToggle.constants.js';

export const initThemeToggle = () => {
  const toggleButton = document.querySelector('[data-theme-toggle]');
  applyThemeToggleStyles(toggleButton);

  const update = (theme) => {
    toggleButton.textContent =
      theme === 'light' ? LIGHT_MODE_TEXT : DARK_MODE_TEXT;
  };

  const toggle = () => {
    const next = themeStore.get() === 'light' ? 'dark' : 'light';
    themeStore.set(next);
  };

  toggleButton.addEventListener('click', toggle);
  const unsubscribe = themeStore.subscribe(update);
  update(themeStore.get());
};
