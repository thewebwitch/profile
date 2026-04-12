const colors = ['#e81cff', '#40c9ff', '#ff1b6b'];

document.addEventListener('mousemove', (event) => {
  const interactiveHeader = document.querySelector('.interactive-header');

  if (!interactiveHeader) {
    return;
  }
  const headerRect = interactiveHeader.getBoundingClientRect();
  const trail = document.createElement('div');
  trail.className = 'interactive-trail';

  const color = colors[Math.floor(Math.random() * colors.length)];
  trail.style.background = color;

  const spread = 20;
  const offsetX = (Math.random() - 0.5) * spread;
  const offsetY = (Math.random() - 0.5) * spread;

  trail.style.left = `${event.clientX - headerRect.left + offsetX}px`;
  trail.style.top = `${event.clientY - headerRect.top + offsetY}px`;

  interactiveHeader.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 800);
});
