// https://www.youtube.com/watch?v=fI9VM5zzpu8
const tabsContainer = document.querySelector('.tabs-container');
const tabsList = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tabs-panels > div');

tabsList.setAttribute('role', 'tablist');

// Stripped away the semantics of li
tabsList.querySelectorAll('li').forEach((tab) => {
  tab.setAttribute('role', 'presentation');
});

tabButtons.forEach((tab, index) => {
  tab.setAttribute('role', 'tab');
  if (index === 0) {
    tab.setAttribute('aria-selected', 'true');
  } else {
    tab.setAttribute('tabindex', '-1');
    tabPanels[index].setAttribute('hidden', '');
  }
});

tabPanels.forEach((panel) => {
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('tabindex', '0');
});

tabsContainer.addEventListener('click', (event) => {
  const clickedTab = event.target.closest('.tab-button');
  if (!clickedTab) return;
  event.preventDefault();

  switchTab(clickedTab);
});

function switchTab(clickedTab) {
  const activePanelId = clickedTab.getAttribute('href');
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('tabindex', '-1');
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute('hidden', true);
  });

  activePanel.removeAttribute('hidden');
  clickedTab.setAttribute('aria-selected', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tabicon]').forEach((el) => {
    const name = el.dataset.tabicon;
    el.style.webkitMaskImage = `url(assets/${name}.svg)`;
    el.style.maskImage = `url(assets/${name}.svg)`;
    el.classList.add('tab-icon');
  });
});
