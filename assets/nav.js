// Mobile navigation toggle
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.nav-toggle');
  if (!btn) return;
  var nav = document.getElementById('primary-nav');
  if (!nav) return;
  var open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
