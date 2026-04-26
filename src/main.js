import { themeStore } from '@/stores';
import { initThemeToggle } from '@/features/themeToggle';
import { initCarousel } from '@/features/carousel';
import { createTabs } from '@/features/tabs';
import './styles/index.css';

// Initialize on page load
themeStore.init();
initThemeToggle();
initCarousel();

createTabs(document.querySelector('[data-tabs]'));
