// https://www.youtube.com/watch?v=pSsPP1UhQzU
/**
 * @typedef {Object} ButtonOptions
 * @property {string} label - The label of the button.
 * @property {string} variant - The variant of the button (e.g., 'primary', 'secondary', 'danger').
 * @property {string} icon - An optional icon to be displayed on the button.
 * @property {function(MouseEvent)} onClick - A callback function that will be executed when the button is clicked.
 *
 * @param {ButtonOptions} options
 */
export function createButton({ label, variant, icon, onClick }) {
  const template = document.createElement('template');

  template.innerHTML = `
    <button class="button ${variant}" type="button">
      <span class="button-label">${label}</span>
    </button>
  `;

  const button = template.content.firstElementChild;

  if (icon) {
    button.insertAdjacentHTML(
      'afterbegin',
      `
        <span class="button-icon">${icon}</span> 
      `,
    );
  }

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  return button;
}

/**
 * Example usage:
 * ```
 * const myButton = createButton({
 *   label: 'Click Me',
 *   icon: '🔥',
 *   onClick: (event) => {
 *     console.log('Button clicked!', event);
 *   }
 * });
 * document.body.appendChild(myButton);
 * ```
 */
