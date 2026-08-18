/* Custom homepage enhancements: scroll reveal */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll reveal ---------- */
  document.documentElement.classList.add('js');

  var revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    for (var i = 0; i < revealEls.length; i++) {
      revealEls[i].classList.add('is-visible');
    }
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    for (var j = 0; j < entries.length; j++) {
      var e = entries[j];
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  for (var k = 0; k < revealEls.length; k++) {
    io.observe(revealEls[k]);
  }
})();
