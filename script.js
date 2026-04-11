let activeTab = 'home';

const tabs = document.querySelectorAll('.tab');
const panel = document.querySelector('.tab-panel');

const updatePanel = () => {
  switch (activeTab) {
    case 'home':
      panel.textContent = 'Welcome to the home page';
      break;
    case 'about':
      panel.textContent = 'About me';
      break;
    case 'projects':
      panel.textContent = 'My cool projects';
      break;
    case 'contact':
      panel.textContent = 'Contact me';
      break;
    default:
      panel.textContent = 'Uknown tab';
  }

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === activeTab);
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeTab = tab.dataset.tab;
      updatePanel();
    });
  });
};

updatePanel();
