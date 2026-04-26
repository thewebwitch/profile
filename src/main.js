import { themeStore } from '@/stores';
import { initThemeToggle } from '@/features/themeToggle';
import { initCarousel } from '@/features/carousel';

import './features/tabs';
import './styles/main.css';

// Initialize on page load
themeStore.init();
initThemeToggle();
initCarousel();
