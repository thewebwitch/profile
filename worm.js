const items = document.querySelectorAll('.item');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  items.forEach((el) => {
    const rect = el.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = cx - mouseX;
    const dy = cy - mouseY;

    const dist = Math.sqrt(dx * dx + dy * dy);

    const radius = 180;

    const strength = Math.max(0, 1 - dist / radius);

    // push outward (worm pressure effect)
    const pushX = dx * strength * 0.25;
    const pushY = dy * strength * 0.25;

    // bulge
    const scale = 1 + strength * 0.15;

    el.style.transform = `
      translate(${pushX}px, ${pushY}px)
      scale(${scale})
    `;
  });
});
