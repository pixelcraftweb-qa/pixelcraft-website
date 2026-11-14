/* Progressive enhancements. Works with static hosting and local files. No analytics/tracking. */
(() => {
  const setup = () => {
    const number = String(window.PIXELCRAFT_CONFIG?.whatsappNumber || '').replace(/\D/g, '');
    if (/^[1-9]\d{7,14}$/.test(number)) {
      document.querySelectorAll('[data-whatsapp]').forEach(link => {
        const message = link.dataset.message || 'Hello, I would like to discuss a website project.';
        link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
        link.hidden = false;
      });
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup, {once:true});
  else setup();
})();
