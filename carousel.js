// Tab content data
const LIGHT_ADS_CONTENT = [
  {
    title: 'FREE PSYCHIC READING',
    description: 'See what the universe is trying to show you today!',
    cta: 'REVEAL YOUR FUTURE',
    svg: 'assets/CrystalBall.svg',
  },
  {
    title: "You've Got Mail!",
    description: 'Get Your Mail Anytime, Anywhere.',
    cta: 'View Inbox',
    svg: 'assets/Envelope.svg',
  },
  {
    title: 'PLAY FOR FREE',
    description: 'Fast rounds. Easy State. No waiting around.',
    cta: 'START GAME',
    svg: 'assets/Gaming.svg',
  },
];

const DARK_ADS_CONTENT = [
  {
    title: 'GREEN MEAT IS THE FUTURE',
    description: 'No questions asked. Just flavor.',
    cta: 'TRY TODAY',
    svg: 'assets/Cow.svg',
  },
  {
    title: 'SYSTEM NOTICE',
    description: 'This session has been flagged for unusual viewing patterns',
    cta: 'Read More',
    svg: 'assets/ExclamationTriangle.svg',
  },
  {
    title: "YOU'RE BEING RECORDED",
    description: '',
    cta: 'ABORT',
  },
];

const LENGTH = LIGHT_ADS_CONTENT.length;

export const initCarousel = () => {
  let currentIndex = 0;
  updateAdContent(currentIndex); // Initialize with the first ad

  const nextAd = () => {
    currentIndex = (currentIndex + 1) % LENGTH;
    updateAdContent(currentIndex);
  };

  const prevAd = () => {
    currentIndex = (currentIndex - 1 + LENGTH) % LENGTH;
    updateAdContent(currentIndex);
  };

  // Event listeners for navigation buttons
  document.querySelector('.ads-nav.prev').addEventListener('click', prevAd);
  document.querySelector('.ads-nav.next').addEventListener('click', nextAd);

  // Set interval for auto-rotation every 5 seconds
  setInterval(nextAd, 5000);
};

// Helper function to update ad content based on the current index
const updateAdContent = (index) => {
  const ad = document.querySelector('.advertisement');

  let adData = LIGHT_ADS_CONTENT[index];

  // check if light mode
  const isLightMode =
    document.documentElement.getAttribute('data-theme') === 'light';

  if (!isLightMode) {
    adData = DARK_ADS_CONTENT[index];
  }

  const { title, description, cta, svg } = adData;
  ad.querySelector('.ad-title').textContent = title;
  ad.querySelector('.ad-description').textContent = description;
  ad.querySelector('.ad-cta').textContent = cta;

  const adSvgElements = ad.querySelectorAll('.ad-svg');
  adSvgElements.forEach((element) => {
    if (svg) {
      element.style.maskImage = `url(${svg})`;
    } else {
      element.style.maskImage = '';
    }
  });
};
