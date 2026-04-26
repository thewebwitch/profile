import styles from './carousel.module.css';

export function applyCarouselStyles(root, controls, itemElements) {
  controls.footerElement.className = styles.Footer;

  controls.prevButton.className = styles.Nav;
  controls.prevButton.classList.add(styles.Prev);

  controls.nextButton.className = styles.Nav;
  controls.nextButton.classList.add(styles.Next);

  itemElements.titleElement.className = styles.Title;
  itemElements.descriptionElement.className = styles.Description;
  itemElements.ctaButton.className = styles.Cta;
}

export function renderAd(itemElements, ad) {
  const { titleElement, descriptionElement, ctaButton } = itemElements;
  const { title, description, cta } = ad;

  titleElement.textContent = title;
  descriptionElement.textContent = description;
  ctaButton.textContent = cta;
}
