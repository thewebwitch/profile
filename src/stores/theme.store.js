const STORAGE_KEY = 'theme';
const DEFAULT_THEME = 'light';

const listeners = new Set();

const get = () => localStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME;

const set = (theme) => {
  localStorage.setItem(STORAGE_KEY, theme);
  document.body.setAttribute('data-theme', theme);
  listeners.forEach((fn) => fn(theme));
};

const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

const init = () => {
  const theme = get();
  document.body.setAttribute('data-theme', theme);
};

export const themeStore = {
  get,
  set,
  subscribe,
  init,
};
