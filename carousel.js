import { getCurrentTheme } from './utils.js';

const AD_CHANGE_INTERVAL = 5000; // 5 seconds

// Tab content data
const LIGHT_ADS_CONTENT = [
  {
    title: 'FREE PSYCHIC READING',
    description: 'See what the universe is trying to show you today!',
    cta: 'REVEAL YOUR FUTURE',
    svg: 'assets/crystalBall.svg',
    svgPosition: 'sides',
  },
  {
    title: "You've Got Mail!",
    description: 'Get Your Mail Anytime, Anywhere.',
    cta: 'View Inbox',
    svg: 'assets/envelope.svg',
    svgPosition: 'top',
  },
  {
    title: 'PLAY FOR FREE',
    description: 'Fast rounds. Easy State. No waiting around.',
    cta: 'START GAME',
    svg: 'assets/gaming.svg',
    svgPosition: 'top',
  },
];

const DARK_ADS_CONTENT = [
  {
    title: 'GREEN MEAT IS THE FUTURE',
    description: 'No questions asked. Just flavor.',
    cta: 'TRY TODAY',
    svg: 'assets/cow.svg',
    svgPosition: 'top',
  },
  {
    title: 'SYSTEM NOTICE',
    description: 'This session has been flagged for unusual viewing patterns',
    cta: 'Read More',
    svg: 'assets/exclamationTriangle.svg',
    svgPosition: 'sides',
  },
  {
    title: "YOU'RE BEING RECORDED",
    description: '',
    cta: 'ABORT',
  },
];

const getAdsForTheme = (theme) =>
  theme === 'light' ? LIGHT_ADS_CONTENT : DARK_ADS_CONTENT;

export const initCarousel = () => {
  const advertisementsSection = document.querySelector('.advertisements');
  const adContainer = document.querySelector('.advertisement');
  const titleElement = adContainer.querySelector('.ad-title');
  const descriptionElement = adContainer.querySelector('.ad-description');
  const ctaButton = adContainer.querySelector('.ad-cta');
  const adSvgElements = adContainer.querySelectorAll('.ad-svg');
  const prevButton = document.querySelector('.ads-nav.prev');
  const nextButton = document.querySelector('.ads-nav.next');

  let currentTheme = getCurrentTheme();
  let currentIndex = 0;
  let carouselIntervalId = null;

  const updateAdContent = () => {
    const ads = getAdsForTheme(currentTheme);
    currentIndex = currentIndex % ads.length;
    const { title, description, cta, svg } = ads[currentIndex];

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    ctaButton.textContent = cta;

    if (!svg) {
      titleElement.style.removeProperty('--mask-image');
      titleElement.classList.remove('side-svg');
      titleElement.classList.remove('top-svg');
      return;
    }

    if (ads[currentIndex].svgPosition === 'sides') {
      titleElement.classList.remove('top-svg');
      titleElement.classList.add('side-svg');
      titleElement.style.setProperty('--mask-image', `url(${svg})`);
      return;
    }

    if (ads[currentIndex].svgPosition === 'top') {
      titleElement.classList.remove('side-svg');
      titleElement.classList.add('top-svg');
      titleElement.style.setProperty('--mask-image', `url(${svg})`);
    }
  };

  const goToNextAd = () => {
    const ads = getAdsForTheme(currentTheme);
    currentIndex = (currentIndex + 1) % ads.length;
    updateAdContent();
  };

  const goToPrevAd = () => {
    const ads = getAdsForTheme(currentTheme);
    currentIndex = (currentIndex - 1 + ads.length) % ads.length;
    updateAdContent();
  };

  const handleThemeChange = () => {
    const newTheme = getCurrentTheme();
    if (newTheme === currentTheme) {
      return;
    }

    currentTheme = newTheme;
    currentIndex = currentIndex % getAdsForTheme(currentTheme).length;
    updateAdContent();
  };

  prevButton.addEventListener('click', goToPrevAd);
  nextButton.addEventListener('click', goToNextAd);

  ctaButton.addEventListener('mousedown', () =>
    ctaButton.classList.add('pressed'),
  );
  ctaButton.addEventListener('mouseup', () =>
    ctaButton.classList.remove('pressed'),
  );
  ctaButton.addEventListener('mouseleave', () =>
    ctaButton.classList.remove('pressed'),
  );

  const pauseCarousel = () => {
    if (carouselIntervalId !== null) {
      clearInterval(carouselIntervalId);
      carouselIntervalId = null;
    }
  };

  const resumeCarousel = () => {
    if (carouselIntervalId === null) {
      carouselIntervalId = setInterval(goToNextAd, AD_CHANGE_INTERVAL);
    }
  };

  advertisementsSection.addEventListener('mouseenter', pauseCarousel);
  advertisementsSection.addEventListener('mouseleave', resumeCarousel);

  updateAdContent();
  carouselIntervalId = setInterval(goToNextAd, AD_CHANGE_INTERVAL);

  const observer = new MutationObserver(handleThemeChange);
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
};
