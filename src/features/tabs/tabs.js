// https://www.youtube.com/watch?v=fI9VM5zzpu8
import { applyTabsStyles } from './tabs.view';

export function createTabs(container) {
  const tabElements = {
    tabsList: container.querySelector('[data-tabs-list]'),
    tabButtons: container.querySelectorAll('[data-tab]'),
    tabPanels: container.querySelectorAll('[data-tabs-panels] > div'),
  };

  applyTabsStyles(tabElements);

  function switchTab(clickedTab) {
    const activePanelId = clickedTab.getAttribute('href');
    const activePanel = container.querySelector(activePanelId);

    tabElements.tabButtons.forEach((tab) => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
    });

    tabElements.tabPanels.forEach((panel) => {
      panel.setAttribute('hidden', true);
    });
    activePanel.removeAttribute('hidden');

    clickedTab.setAttribute('aria-selected', 'true');
    clickedTab.setAttribute('tabindex', '0');
    clickedTab.focus();
  }

  function move(direction) {
    const tabs = [...tabElements.tabButtons];
    const currentTab = document.activeElement;
    const currentIndex = tabs.indexOf(currentTab);

    let newIndex;
    if (direction === 'left') {
      newIndex = currentIndex <= 0 ? tabs.length - 1 : currentIndex - 1;
    } else if (direction === 'right') {
      newIndex = currentIndex >= tabs.length - 1 ? 0 : currentIndex + 1;
    }

    switchTab(tabs[newIndex]);
  }

  function initA11y() {
    tabElements.tabsList.setAttribute('role', 'tablist');

    // Stripped away the semantics of li
    tabElements.tabsList.querySelectorAll('li').forEach((tab) => {
      tab.setAttribute('role', 'presentation');
    });

    tabElements.tabButtons.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      if (index === 0) {
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.setAttribute('tabindex', '-1');
        tabElements.tabPanels[index].setAttribute('hidden', '');
      }
    });

    tabElements.tabPanels.forEach((panel) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', '0');
    });
  }

  function bindEvents() {
    container.addEventListener('click', (event) => {
      const clickedTab = event.target.closest('[data-tab]');
      if (!clickedTab) return;
      event.preventDefault();

      switchTab(clickedTab);
    });

    container.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          move('right');
          break;
        case 'ArrowLeft':
          move('left');
          break;
        case 'Home':
          event.preventDefault();
          switchTab(tabElements.tabButtons[0]);
          break;
        case 'End':
          event.preventDefault();
          switchTab(tabElements.tabButtons[tabElements.tabButtons.length - 1]);
          break;
        default:
          break;
      }
    });
  }

  function init() {
    initA11y();
    bindEvents();
  }

  init();
}
