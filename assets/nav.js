// Mobile navigation toggle
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!nav) return;
  if (btn) {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    btn.textContent = open ? '×' : '☰';
    return;
  }
  if (e.target.closest('#primary-nav a')) {
    nav.classList.remove('open');
    var toggle = document.querySelector('.nav-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      toggle.textContent = '☰';
    }
    return;
  }
  if (!e.target.closest('#primary-nav')) closeNav(nav);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeNav(document.getElementById('primary-nav'));
});

function closeNav(nav) {
  if (!nav) return;
  nav.classList.remove('open');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.textContent = '☰';
  }
}
