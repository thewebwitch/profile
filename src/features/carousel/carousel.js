import { themeStore } from '@/stores';
import { getAdsForTheme } from './carousel.utils.js';
import { AD_CHANGE_INTERVAL } from './carousel.constants.js';
import { applyCarouselStyles, renderAd } from './carousel.view.js';

export const initCarousel = () => {
  // ROOT
  const root = document.querySelector('[data-carousel]');
  const item = root.querySelector('[data-carousel-item]');

  // CONTROLS (belong to carousel behavior)
  const controls = {
    prevButton: document.querySelector('[data-carousel-prev]'),
    nextButton: document.querySelector('[data-carousel-next]'),
    footerElement: root.querySelector('footer'),
  };

  // RENDER TARGETS (content changes per ad)
  const itemElements = {
    titleElement: item.querySelector('h2'),
    descriptionElement: item.querySelector('p'),
    ctaButton: item.querySelector('button'),
  };

  applyCarouselStyles(root, controls, itemElements);

  // STATE
  let currentTheme = themeStore.get();
  let ads = getAdsForTheme(currentTheme);
  let currentIndex = 0;
  let intervalId = null;

  // CORE UPDATE
  const update = () => {
    currentIndex = currentIndex % ads.length;
    renderAd(itemElements, ads[currentIndex]);
  };

  // NAVIGATION
  const next = () => {
    currentIndex = (currentIndex + 1) % ads.length;
    update();
  };

  const prev = () => {
    currentIndex = (currentIndex - 1 + ads.length) % ads.length;
    update();
  };

  // THEME
  const handleThemeChange = (newTheme) => {
    if (newTheme === currentTheme) return;

    currentTheme = newTheme;
    ads = getAdsForTheme(newTheme);
    currentIndex = currentIndex % ads.length;
    update();
  };

  // INTERVAL
  const start = () => {
    if (!intervalId) {
      intervalId = setInterval(next, AD_CHANGE_INTERVAL);
    }
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  // EVENTS
  controls.prevButton.addEventListener('click', prev);
  controls.nextButton.addEventListener('click', next);

  itemElements.ctaButton.addEventListener('mousedown', () =>
    itemElements.ctaButton.classList.add('pressed'),
  );
  itemElements.ctaButton.addEventListener('mouseup', () =>
    itemElements.ctaButton.classList.remove('pressed'),
  );
  itemElements.ctaButton.addEventListener('mouseleave', () =>
    itemElements.ctaButton.classList.remove('pressed'),
  );

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);

  const unsubscribe = themeStore.subscribe(handleThemeChange);

  // INIT
  update();
  start();

  // CLEANUP
  return () => {
    controls.prevButton.removeEventListener('click', prev);
    controls.nextButton.removeEventListener('click', next);
    unsubscribe();
    stop();
  };
};
