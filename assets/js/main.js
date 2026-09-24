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

  // Publications: scope (lab / all), research line, free-text search
  var filters = document.querySelector('[data-pub-filters]');
  var list = document.querySelector('[data-pub-list]');
  if (!filters || !list) return;

  var state = { scope: 'lab', line: '', query: '' };
  var pubs = Array.prototype.slice.call(list.querySelectorAll('.pub'));
  var years = Array.prototype.slice.call(list.querySelectorAll('.pub-year'));
  var empty = list.querySelector('[data-pub-empty]');
  var search = document.getElementById('pub-search');
  var texts = pubs.map(function (el) { return el.textContent.toLowerCase(); });

  function press(group, attr, value) {
    filters.querySelectorAll('[' + attr + ']').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute(attr) === value ? 'true' : 'false');
    });
  }

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
    years.forEach(function (sec) {
      var any = sec.querySelector('.pub:not([hidden])');
      sec.hidden = !any;
      var link = document.querySelector('[data-year-link="' + sec.getAttribute('data-year') + '"]');
      if (link) link.hidden = !any;
    });
    if (empty) empty.hidden = shown > 0;
  }

  filters.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.hasAttribute('data-scope')) {
      state.scope = b.getAttribute('data-scope');
      press(filters, 'data-scope', state.scope);
    } else if (b.hasAttribute('data-line')) {
      state.line = b.getAttribute('data-line');
      press(filters, 'data-line', state.line);
    }
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
