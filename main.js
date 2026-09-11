// ==============================
//  KOS PUTRI MELATI — main.js
// ==============================

var navLinks = document.querySelectorAll('.nav-links a');
if (navLinks.length > 0) {
  var sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY + 100;
    sections.forEach(function (sec) {
      var id = sec.getAttribute('id');
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(function (a) { a.classList.remove('active'); });
        var link = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (link) link.classList.add('active');
      }
    });
  });
  navLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.forEach(function (x) { x.classList.remove('active'); });
      this.classList.add('active');
    });
  });
}

// Animation on scroll (fade-up)
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.kamar-card-h, .fas-item, .faq-item, .galeri-item, .lok-list li').forEach(function (el) {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Lightbox functionality
var lightbox = document.getElementById('lightbox');
if (lightbox) {
  var lbImg = document.querySelector('.lb-img');
  var lbOverlay = document.querySelector('.lb-overlay');
  var lbClose = document.querySelector('.lb-close');

  document.querySelectorAll('.galeri-item img, .kamar-foto-h img').forEach(function (img) {
    img.addEventListener('click', function () {
      alert('Klik gambar untuk memperbesar.');
      lbImg.src = this.src;
      lbImg.alt = this.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  function closeLb() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lbOverlay) lbOverlay.addEventListener('click', closeLb);
  if (lbClose) lbClose.addEventListener('click', closeLb);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
}

console.log('Kos Putri Melati — ready ✓');