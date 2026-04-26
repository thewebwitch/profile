export const getCurrentTheme = () =>
  document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

export const getTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme ? JSON.parse(storedTheme) : 'light';
};

export const saveTheme = (theme) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};
