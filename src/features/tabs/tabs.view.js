import styles from './tabs.module.css';

export function applyTabsStyles(tabElements) {
  const { tabsList, tabButtons, tabPanels } = tabElements;

  tabsList.classList.add(styles.List);
  tabButtons.forEach((tab) => {
    tab.classList.add(styles.Button);
  });
}
