import styles from './themeToggle.module.css';

export function applyThemeToggleStyles(themeToggleButton) {
  themeToggleButton.className = styles.Toggle;
}

export const applyTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
};
