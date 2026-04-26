import styles from './carousel.module.css';

export function applyCarouselStyles(root, controls, itemElements) {
  controls.footerElement.className = styles.adsFooter;

  controls.prevButton.className = styles.adsNav;
  controls.prevButton.classList.add(styles.prev);

  controls.nextButton.className = styles.adsNav;
  controls.nextButton.classList.add(styles.next);

  itemElements.titleElement.className = styles.adTitle;
  itemElements.descriptionElement.className = styles.adDescription;
  itemElements.ctaButton.className = styles.adCta;
}

export function renderAd(itemElements, ad) {
  const { titleElement, descriptionElement, ctaButton } = itemElements;
  const { title, description, cta, svg, svgPosition } = ad;

  titleElement.textContent = title;
  descriptionElement.textContent = description;
  ctaButton.textContent = cta;

  // conditional styling
  titleElement.classList.toggle(styles.sideSvg, svgPosition === 'sides');
  titleElement.classList.toggle(styles.topSvg, svgPosition === 'top');

  // dynamic mask stays inline
  if (svg) {
    titleElement.style.setProperty('--mask-image', `url(${svg})`);
  }
}
