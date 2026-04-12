// Tab content data
const TAB_CONTENT = [
  { id: 'home', content: 'Welcome to the home page', svg: 'assets/Home.svg' },
  { id: 'about', content: 'About me', svg: 'assets/User.svg' },
  {
    id: 'projects',
    content: 'My cool projects',
    svg: 'assets/PencilRuler.svg',
  },
  { id: 'contact', content: 'Contact me', svg: 'assets/Envelope.svg' },
];

// DOM elements
const tabs = document.querySelectorAll('.tab');
const panel = document.querySelector('.tab-panel');

// State
let activeTab = 'home';

// Initialize event listeners
export const initTabs = () => {
  tabs.forEach((tab) => {
    const tabData = TAB_CONTENT.find((item) => item.id === tab.dataset.tab);
    if (tabData) {
      tab.style.setProperty('--tab-mask-image', `url('${tabData.svg}')`);
    }
    tab.addEventListener('click', () => {
      updatePanel(tab.dataset.tab);
    });
  });
};

// Update panel content and active states
export const updatePanel = (tabName) => {
  activeTab = tabName;
  const tabData = TAB_CONTENT.find((tab) => tab.id === tabName);
  panel.textContent = tabData?.content ?? 'Unknown tab';

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === activeTab);
  });
};

updatePanel('home');
