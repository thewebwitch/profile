// Tab content data
const ADS_CONTENT = [
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

const LENGTH = ADS_CONTENT.length;

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
  const { title, description, cta } = ADS_CONTENT[index];
  ad.querySelector('.ad-title').textContent = title;
  ad.querySelector('.ad-description').textContent = description;
  ad.querySelector('.ad-cta').textContent = cta;

  const adSvgElements = ad.querySelectorAll('.ad-svg');
  adSvgElements.forEach((element) => {
    element.style.maskImage = `url(${ADS_CONTENT[index].svg})`;
  });
};
