// Movement Engineering Lab — site behaviour. Everything works without JS except the
// publication filters, which stay hidden (all publications shown) when JS is off.

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Publications: one pill group (lab scope, one per research line, or all member work) + search
  var filters = document.querySelector('[data-pub-filters]');
  var list = document.querySelector('[data-pub-list]');
  if (!filters || !list) return;

  var state = { scope: 'lab', line: '', query: '' };
  var pubs = Array.prototype.slice.call(list.querySelectorAll('.pub'));
  var groups = Array.prototype.slice.call(list.querySelectorAll('[data-group]'));
  var empty = list.querySelector('[data-pub-empty]');
  var search = document.getElementById('pub-search');
  var texts = pubs.map(function (el) { return el.textContent.toLowerCase(); });

  function apply() {
    var shown = 0;
    pubs.forEach(function (el, i) {
      var ok = true;
      if (state.scope === 'lab' && !el.hasAttribute('data-lab')) ok = false;
      if (state.line && el.getAttribute('data-line') !== state.line) ok = false;
      if (state.query && texts[i].indexOf(state.query) === -1) ok = false;
      el.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector('.pub:not([hidden])'); });
    if (empty) empty.hidden = shown > 0;
  }

  filters.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-scope]');
    if (!b) return;
    state.scope = b.getAttribute('data-scope');
    state.line = b.getAttribute('data-line') || '';
    filters.querySelectorAll('button[data-scope]').forEach(function (x) {
      x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
    });
    apply();
  });

  if (search) {
    search.addEventListener('input', function () {
      state.query = this.value.toLowerCase().trim();
      apply();
    });
  }

  filters.hidden = false;
  apply();
});
