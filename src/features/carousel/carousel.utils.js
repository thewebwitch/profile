import { LIGHT_ADS_CONTENT, DARK_ADS_CONTENT } from './carousel.data.js';

export const getAdsForTheme = (theme) =>
  theme === 'light' ? LIGHT_ADS_CONTENT : DARK_ADS_CONTENT;
