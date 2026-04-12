export const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
};

export const toggleTheme = () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
