// Mobile nav toggle — wires .nav-toggle to .nav-links via aria-expanded + [data-open].
// CSS handles the dropdown animation; this file only flips state.
(function () {
  const btn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;

  // Wire ARIA so screen readers know what's going on
  if (!menu.id) menu.id = 'site-nav';
  btn.setAttribute('aria-controls', menu.id);
  btn.setAttribute('aria-expanded', 'false');

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.dataset.open = open ? 'true' : 'false';
  }

  btn.addEventListener('click', () => {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  // Close on any link tap inside the menu (so anchor links work cleanly)
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });

  // Close if the window grows past the desktop breakpoint
  const mq = window.matchMedia('(min-width: 1080px)');
  mq.addEventListener('change', () => setOpen(false));
})();
