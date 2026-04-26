// Tab content data
export const LIGHT_ADS_CONTENT = [
  {
    title: 'FREE PSYCHIC READING',
    description: 'See what the universe is trying to show you today!',
    cta: 'REVEAL YOUR FUTURE',
    svg: 'assets/crystalBall.svg',
    svgPosition: 'sides',
    onClick: (event) => console.log('Ad clicked!', event),
  },
  {
    title: "You've Got Mail!",
    description: 'Get Your Mail Anytime, Anywhere.',
    cta: 'View Inbox',
    svg: 'assets/envelope.svg',
    svgPosition: 'top',
    onClick: (event) => console.log('Ad clicked!', event),
  },
  {
    title: 'PLAY FOR FREE',
    description: 'Fast rounds. Easy State. No waiting around.',
    cta: 'START GAME',
    svg: 'assets/gaming.svg',
    svgPosition: 'top',
    onClick: (event) => console.log('Ad clicked!', event),
  },
];

export const DARK_ADS_CONTENT = [
  {
    title: 'GREEN MEAT IS THE FUTURE',
    description: 'No questions asked. Just flavor.',
    cta: 'TRY TODAY',
    svg: 'assets/cow.svg',
    svgPosition: 'top',
    onClick: (event) => console.log('Ad clicked!', event),
  },
  {
    title: 'SYSTEM NOTICE',
    description: 'This session has been flagged for unusual viewing patterns',
    cta: 'Read More',
    svg: 'assets/exclamationTriangle.svg',
    svgPosition: 'sides',
    onClick: (event) => console.log('Ad clicked!', event),
  },
  {
    title: "YOU'RE BEING RECORDED",
    description: '',
    cta: 'ABORT',
    onClick: (event) => console.log('Ad clicked!', event),
  },
];
