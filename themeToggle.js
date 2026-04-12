const LIGHT_MODE_TEXT = 'TRY IN DARK MODE';
const DARK_MODE_TEXT = 'RETURN TO LIGHT';

export const initTheme = () => {
  const themeData = localStorage.getItem('theme');
  const [savedTheme, themeToggleText] = themeData
    ? JSON.parse(themeData)
    : ['light', LIGHT_MODE_TEXT];

  document.body.setAttribute('data-theme', savedTheme);
  document.querySelector('.theme-toggle').textContent = themeToggleText;
};

export const toggleTheme = () => {
  const currentTheme = document.body.getAttribute('data-theme');

  // if (currentTheme === 'dark') {
  //   return;
  // }
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);

  let themeToggleText = newTheme === 'dark' ? DARK_MODE_TEXT : LIGHT_MODE_TEXT;

  document.querySelector('.theme-toggle').textContent = themeToggleText;

  localStorage.setItem('theme', JSON.stringify([newTheme, themeToggleText]));
};

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
