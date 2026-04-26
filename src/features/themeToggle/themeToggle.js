import { getTheme, saveTheme } from '../../scripts/utils.js';
import { applyTheme, applyThemeToggleStyles } from './themeToggle.view.js';
import { DARK_MODE_TEXT, LIGHT_MODE_TEXT } from './themeToggle.constants.js';

export const initTheme = () => {
  const toggleButton = document.querySelector('[data-theme-toggle]');
  let theme = getTheme();

  applyThemeToggleStyles(toggleButton);

  const update = () => {
    applyTheme(theme);
    toggleButton.textContent =
      theme === 'light' ? LIGHT_MODE_TEXT : DARK_MODE_TEXT;
    saveTheme(theme);
  };

  const toggle = () => {
    theme = theme === 'light' ? 'dark' : 'light';
    update();
  };

  toggleButton.addEventListener('click', toggle);
  update();
};
