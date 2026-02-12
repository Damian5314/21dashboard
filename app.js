// ===== Dashboard App =====

function isConfigured() {
  return CONFIG.EMBED_URL && CONFIG.EMBED_URL !== 'YOUR_POWERPOINT_EMBED_URL_HERE';
}

function loadPresentation() {
  const iframe = document.getElementById('presentation');
  const error = document.getElementById('error-overlay');

  if (!isConfigured()) {
    error.classList.remove('hidden');
    return;
  }

  error.classList.add('hidden');
  iframe.src = CONFIG.EMBED_URL;
}

function refreshPresentation() {
  if (!isConfigured()) return;

  const iframe = document.getElementById('presentation');
  // Reload iframe to pick up any PowerPoint changes
  iframe.src = CONFIG.EMBED_URL;
  console.log('Presentatie herladen:', new Date().toLocaleTimeString('nl-NL'));
}

function init() {
  loadPresentation();

  // Periodically refresh to pick up PowerPoint edits
  setInterval(refreshPresentation, CONFIG.REFRESH_INTERVAL);
}

document.addEventListener('DOMContentLoaded', init);
