// Tab content data
const TAB_CONTENT = {
  home: 'Welcome to the home page',
  about: 'About me',
  projects: 'My cool projects',
  contact: 'Contact me',
};

// DOM elements
const tabs = document.querySelectorAll('.tab');
const panel = document.querySelector('.tab-panel');

// State
let activeTab = 'home';

// Initialize event listeners
export const initTabs = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      updatePanel(tab.dataset.tab);
    });
  });
};

// Update panel content and active states
export const updatePanel = (tabName) => {
  activeTab = tabName;
  panel.textContent = TAB_CONTENT[tabName] ?? 'Unknown tab';

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === activeTab);
  });
};

updatePanel('home');
