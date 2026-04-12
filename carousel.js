// Tab content data
const ADS_CONTENT = [
  {
    title: 'FREE PSYCHIC READING',
    description: 'See what the universe is trying to show you today!',
    cta: 'REVEAL YOUR FUTURE',
  },
  {
    title: "You've Got Mail!",
    description: 'Get Your Mail Anytime, Anywhere.',
    cta: 'View Inbox',
  },
  {
    title: 'PLAY FOR FREE',
    description: 'Fast rounds. Easy State. No waiting around.',
    cta: 'START GAME',
  },
];

const LENGTH = ADS_CONTENT.length;

export const initCarousel = () => {
  console.log('Initializing carousel');
  const ad = document.querySelector('.advertisement');
  let currentIndex = 0;

  // Initialize first ad content
  const { title, description, cta } = ADS_CONTENT[currentIndex];
  ad.querySelector('.ad-title').textContent = title;
  ad.querySelector('.ad-description').textContent = description;
  ad.querySelector('.ad-cta').textContent = cta;

  const nextAd = () => {
    currentIndex = (currentIndex + 1) % LENGTH;
    const { title, description, cta } = ADS_CONTENT[currentIndex];
    ad.querySelector('.ad-title').textContent = title;
    ad.querySelector('.ad-description').textContent = description;
    ad.querySelector('.ad-cta').textContent = cta;
  };

  const prevAd = () => {
    currentIndex = (currentIndex - 1 + LENGTH) % LENGTH;
    const { title, description, cta } = ADS_CONTENT[currentIndex];
    ad.querySelector('.ad-title').textContent = title;
    ad.querySelector('.ad-description').textContent = description;
    ad.querySelector('.ad-cta').textContent = cta;
  };

  // Event listeners for navigation buttons
  document.querySelector('.ads-nav.prev').addEventListener('click', prevAd);
  document.querySelector('.ads-nav.next').addEventListener('click', nextAd);

  // Set interval for auto-rotation every 5 seconds
  setInterval(nextAd, 5000);
};
