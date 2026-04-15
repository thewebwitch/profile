export const getCurrentTheme = () =>
  document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
