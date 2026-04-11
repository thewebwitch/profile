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

// Update panel content and active states
const updatePanel = (tabName) => {
  activeTab = tabName;
  panel.textContent = TAB_CONTENT[tabName] ?? 'Unknown tab';

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === activeTab);
  });
};

// Initialize event listeners
const initTabs = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      updatePanel(tab.dataset.tab);
    });
  });
};

// Initialize on page load
initTabs();
updatePanel(activeTab);
