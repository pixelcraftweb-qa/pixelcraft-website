/* Language navigation uses real links; no automatic redirects or tracking. */
(() => {
  document.querySelectorAll('.language-switch a, .pc-lang a').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('pixelcraft-language', link.lang); } catch (_) { /* optional */ }
    });
  });
})();
