// ==============================
//  KOS PUTRI MELATI — main.js
// ==============================

var C = window.KOS_CONTENT || {};
var WA_NUMBER = C.whatsapp || '6287739535551';
var lang = 'id';

// Teks untuk bagian yang dibuat oleh JavaScript
var TEXT = {
  id: {
    perBulan: '/ bulan',
    bulan: 'bulan',
    waTanya: 'Halo Bu Indri, saya ingin bertanya tentang Kos Putri Melati.',
    waCek: 'Halo Bu Indri, saya ingin cek ketersediaan kamar Kos Putri Melati.',
    msgHalo: 'Halo Bu Indri, saya ingin booking kamar di Kos Putri Melati.',
    msgNama: 'Nama',
    msgAsal: 'Kampus/Pekerjaan',
    msgKamar: 'Kamar',
    msgMasuk: 'Rencana masuk',
    msgBayar: 'Pembayaran',
    msgDiMuka: 'bulan di muka',
    msgSurvei: 'Saya ingin survei/lihat kamar terlebih dahulu.',
    msgJadwal: 'Rencana survei',
    waktu_pagi: 'pagi',
    waktu_siang: 'siang',
    waktu_sore: 'sore',
    shareHalo: 'Halo, aku lagi lihat Kos Putri Melati di Babarsari, Yogyakarta (kos khusus putri).',
    shareKamar: 'Pilihan kamar',
    shareBayar: 'Bayar {n} bulan di muka',
    shareListrik: '(belum termasuk listrik token)',
    shareFasilitas: 'Fasilitas: AC, TV, kamar mandi dalam, full furnished, WiFi, CCTV 24 jam.',
    shareLink: 'Info lengkap & foto:',
    msgCatatan: 'Catatan',
    msgTutup: 'Apakah kamar masih tersedia? Terima kasih.',
    listrik: 'Perkiraan listrik: ',
    tersedia: 'Tersedia',
    penuh: 'Penuh',
    optPenuh: ' (penuh)',
    perUpdate: 'Ketersediaan kamar per '
  },
  en: {
    perBulan: '/ month',
    bulan: 'months',
    waTanya: 'Hello Bu Indri, I would like to ask about Kos Putri Melati.',
    waCek: 'Hello Bu Indri, I would like to check room availability at Kos Putri Melati.',
    msgHalo: 'Hello Bu Indri, I would like to book a room at Kos Putri Melati.',
    msgNama: 'Name',
    msgAsal: 'Campus/Occupation',
    msgKamar: 'Room',
    msgMasuk: 'Planned move-in',
    msgBayar: 'Payment',
    msgDiMuka: 'months in advance',
    msgSurvei: 'I would like to visit and see the room first.',
    msgJadwal: 'Planned visit',
    waktu_pagi: 'morning',
    waktu_siang: 'midday',
    waktu_sore: 'afternoon',
    shareHalo: 'Hi, I\'m looking at Kos Putri Melati in Babarsari, Yogyakarta (a women-only boarding house).',
    shareKamar: 'Room',
    shareBayar: '{n} months paid in advance',
    shareListrik: '(electricity not included)',
    shareFasilitas: 'Facilities: AC, TV, private bathroom, fully furnished, WiFi, 24-hour CCTV.',
    shareLink: 'Details & photos:',
    msgCatatan: 'Notes',
    msgTutup: 'Is the room still available? Thank you.',
    listrik: 'Estimated electricity: ',
    tersedia: 'Available',
    penuh: 'Full',
    optPenuh: ' (full)',
    perUpdate: 'Room availability as of '
  }
};

// Terjemahan English untuk elemen ber-atribut data-i18n
// (teks Bahasa Indonesia diambil langsung dari index.html)
var EN = {
  'nav.kamar': 'Rooms',
  'nav.fasilitas': 'Facilities',
  'nav.galeri': 'Gallery',
  'nav.lokasi': 'Location',
  'nav.faq': 'FAQ',
  'nav.booking': 'Book',
  'hero.eyebrow': 'Women-only Boarding House · Babarsari',
  'hero.subtitle': 'Comfortable and Safe Housing for<br>Female Students in Babarsari, Yogyakarta',
  'hero.desc': 'Strategic location near campuses, complete facilities, a quiet neighbourhood, and 24-hour security.',
  'hero.lihat': 'See Rooms',
  'hero.booking': 'Prices &amp; Booking',
  'hero.f1': 'From Rp1,150,000/month',
  'hero.f2': 'Women only',
  'hero.f3': '24-hour CCTV',
  'stat.kamar': 'Rooms',
  'stat.kamar.sub': 'Fully Furnished',
  'stat.lokasi': 'Strategic Location',
  'stat.aman': 'Security',
  'stat.aman.sub': '24-hour CCTV',
  'stat.wifi': 'Fast WiFi',
  'stat.wifi.sub': '&amp; Stable',
  'stat.ling': 'Environment',
  'stat.ling.sub': 'Clean &amp; Comfortable',
  'tentang.label': 'ABOUT US',
  'tentang.p1': 'We offer a safe, comfortable and supportive place to live for female students and young working women looking for quality housing in the Babarsari area.',
  'tentang.p2': 'With complete facilities, a strategic location, and a clean, quiet environment, we are committed to giving you the best possible stay.',
  'tentang.pemilik': 'The owners live on the same grounds, and a caretaker is on site in the morning and at night.',
  'fas.title': 'Facilities',
  'fas.tidur': 'Bed',
  'fas.lemari': 'Wardrobe',
  'fas.meja': 'Study Desk',
  'fas.km': 'Private Bathroom',
  'fas.parkir': 'Motorbike Parking',
  'fas.cctv': '24-hour CCTV',
  'fas.jemur': 'Laundry Drying Area',
  'fas.dapur': 'Shared Kitchen',
  'fas.apar': 'Fire Extinguisher on Every Floor',
  'kamar.title': 'Room Options',
  'kamar.a': 'Type A Room',
  'kamar.b': 'Type B Room',
  'kamar.c': 'Type C Room',
  'kamar.c.ukuran': '± 4 × 3.5 m² · corner room',
  'kamar.bulan': '/ month',
  'kamar.km': 'Private bathroom',
  'kamar.ff': 'Fully furnished',
  'kamar.luas': 'The largest room',
  'kamar.berdua': 'Can be shared by more than 1 person',
  'kamar.pilih': 'Choose This Room',
  'kamar.drive': 'See Full Photos of All Rooms',
  'kamar.note': 'Rent is paid 3 or 6 months in advance · 1 room per person, except the room type C',
  'bk.title': 'Booking &amp; Cost Estimate',
  'bk.intro': 'Fill in the short form below. A WhatsApp message to Bu Indri will be written for you.',
  'bk.nama': 'Full Name',
  'bk.nama.ph': 'e.g. Rina Putri',
  'bk.asal': 'Campus / Occupation <small>(optional)</small>',
  'bk.asal.ph': 'e.g. Atma Jaya, 1st semester',
  'bk.kamar': 'Room Type',
  'bk.durasi': 'Pay in Advance',
  'bk.3bln': '3 months',
  'bk.6bln': '6 months',
  'bk.masuk': 'Planned Move-in',
  'bk.survei': 'I would like to visit / see the room first',
  'bk.catatan': 'Other Questions <small>(optional)</small>',
  'bk.kirim': 'Send via WhatsApp',
  'bk.note': 'Nothing is sent until you press send in WhatsApp.',
  'bk.est': 'Cost Estimate',
  'bk.r.kamar': 'Room',
  'bk.r.harga': 'Price per month',
  'bk.r.durasi': 'Paid in advance',
  'bk.r.total': 'Initial payment',
  'bk.listrik': 'Electricity not included — each room uses its own prepaid token.',
  'bk.tgl': 'Visit Date <small>(optional)</small>',
  'bk.waktu': 'Time <small>(optional)</small>',
  'bk.w0': 'Any time',
  'bk.w1': 'Morning',
  'bk.w2': 'Midday',
  'bk.w3': 'Afternoon',
  'bk.share': 'Share with Parents',
  'bk.share.note': 'Send this room &amp; cost summary to your parents via WhatsApp.',
  'gf.semua': 'All',
  'gf.kamar': 'Rooms',
  'gf.dapur': 'Kitchen',
  'gf.taman': 'Garden &amp; Grounds',
  'gf.parkir': 'Parking &amp; Lounge',
  'galeri.title': 'Gallery',
  'lok.title': 'Strategic Location',
  'lok.buka': 'Open in Google Maps',
  'faq.title': 'Frequently Asked Questions',
  'faq.q1': 'Can I bring a vehicle?',
  'faq.a1': 'Yes, motorbikes only. There is a parking area for residents\' motorbikes.',
  'faq.q2': 'Is there CCTV?',
  'faq.a2': 'Yes, the whole property is monitored by CCTV 24 hours a day for residents\' safety.',
  'faq.q3': 'Is electricity included?',
  'faq.a3': 'Electricity is not included in the rent. Each room uses its own prepaid electricity token.',
  'faq.q4': 'Is WiFi available?',
  'faq.a4': 'Yes. The WiFi has standard capacity for messaging, social media and browsing — not for streaming YouTube and the like.',
  'faq.q5': 'Is there a curfew?',
  'faq.a5': 'Every resident has her own room and gate keys. As the kos is inside a housing complex, the complex gate closes at 10 PM — if you will be back later, let the complex security know.',
  'faq.q6': 'Can I have male guests?',
  'faq.a6': 'Yes, but only in the living room area. Male guests are not allowed in the rooms.',
  'faq.q7': 'Can family members stay overnight?',
  'faq.a7': 'Parents and siblings may stay for up to 3 days, free of charge.',
  'faq.q8': 'Are pets allowed?',
  'faq.a8': 'No. Residents may not bring or keep animals, even if they stay inside the room.',
  'faq.q9': 'Is there a kitchen?',
  'faq.a9': 'Yes, there is a shared kitchen on the 1st and 2nd floors. Cooking gas is shared through a group contribution.',
  'faq.q10': 'Is each room for one person?',
  'faq.a10': 'Yes, each room is for one person, except the larger corner room (Type C).',
  'cta.title': 'Ask About Availability',
  'cta.text': 'Contact us now to check room availability and schedule a visit.',
  'cta.btn': 'Chat on WhatsApp Now'
};

function t(key) { return TEXT[lang][key]; }
function pick(v) { return v && typeof v === 'object' ? (v[lang] || v.id || '') : (v || ''); }
function rupiah(n) { return 'Rp' + n.toLocaleString('id-ID'); }
function waLink(text) { return 'https://wa.me/' + WA_NUMBER + (text ? '?text=' + encodeURIComponent(text) : ''); }

// ---- Bahasa (ID / EN) ----
var ID_HTML = {};
var ID_PH = {};
document.querySelectorAll('[data-i18n]').forEach(function (el) { ID_HTML[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { ID_PH[el.dataset.i18nPh] = el.placeholder; });

function setLang(l) {
  lang = l === 'en' ? 'en' : 'id';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var k = el.dataset.i18n;
    var v = lang === 'en' ? EN[k] : ID_HTML[k];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    var k = el.dataset.i18nPh;
    el.placeholder = (lang === 'en' ? EN[k] : ID_PH[k]) || '';
  });
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-wa="tanya"]').forEach(function (a) { a.href = waLink(t('waTanya')); });
  document.querySelectorAll('[data-wa="cek"]').forEach(function (a) { a.href = waLink(t('waCek')); });
  fillRoomOptions();
  updateSummary();
  renderAvailability();
  try { localStorage.setItem('kos-lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-switch button').forEach(function (b) {
  b.addEventListener('click', function () { setLang(this.dataset.lang); });
});

// ---- Menu (header) ----
var navLinks = document.querySelectorAll('.nav-links a');
var navToggle = document.querySelector('.nav-toggle');
var navBox = document.getElementById('nav-links');

if (navToggle) {
  navToggle.addEventListener('click', function () {
    var open = navBox.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

if (navLinks.length > 0) {
  // Hanya bagian yang punya link di menu, urut dari atas ke bawah
  var sections = Array.prototype.filter.call(document.querySelectorAll('section[id]'), function (sec) {
    return document.querySelector('.nav-links a[href="#' + sec.id + '"]');
  });

  function updateActiveLink() {
    var line = window.scrollY + window.innerHeight * 0.35;
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    var current = null;
    sections.forEach(function (sec) { if (sec.offsetTop <= line) current = sec; });
    // Bagian terakhir (FAQ) pendek, jadi saat halaman mentok bawah langsung aktifkan
    if (atBottom) current = sections[sections.length - 1];
    navLinks.forEach(function (a) {
      a.classList.toggle('active', !!current && a.getAttribute('href') === '#' + current.id);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('resize', updateActiveLink);
  updateActiveLink();

  navLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      navBox.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---- Booking & kalkulator biaya ----
var form = document.getElementById('booking-form');
var rooms = [];
document.querySelectorAll('.kamar-card-h[data-room]').forEach(function (card) {
  rooms.push({ id: card.dataset.room, price: Number(card.dataset.price), card: card });
});

function roomName(r) { return r.card.querySelector('.kamar-nama').textContent.trim(); }
function currentRoom() {
  var id = form.kamar.value;
  return rooms.filter(function (r) { return r.id === id; })[0] || rooms[0];
}
function currentMonths() {
  var checked = form.querySelector('input[name="durasi"]:checked');
  return checked ? Number(checked.value) : 6;
}

function isFull(r) {
  var s = (C.ketersediaan || {})[r.id];
  return !!s && s.status === 'penuh';
}

function fillRoomOptions() {
  if (!form) return;
  var sel = form.kamar;
  var keep = sel.value;
  sel.innerHTML = '';
  rooms.forEach(function (r) {
    var o = document.createElement('option');
    o.value = r.id;
    o.textContent = roomName(r) + ' — ' + rupiah(r.price) + ' ' + t('perBulan') + (isFull(r) ? t('optPenuh') : '');
    sel.appendChild(o);
  });
  // Pertama kali: pilih kamar pertama yang masih tersedia
  var firstOpen = rooms.filter(function (r) { return !isFull(r); })[0];
  sel.value = keep || (firstOpen ? firstOpen.id : rooms[0].id);
}

// Label "Tersedia" / "Penuh" di foto kamar (data dari content.js)
function renderAvailability() {
  var data = C.ketersediaan || {};
  rooms.forEach(function (r) {
    var badge = r.card.querySelector('.kamar-status');
    var s = data[r.id];
    if (!badge) return;
    if (!s) { badge.hidden = true; return; }
    var full = s.status === 'penuh';
    badge.textContent = pick(s.keterangan) || (full ? t('penuh') : t('tersedia'));
    badge.classList.toggle('is-full', full);
    badge.hidden = false;
  });
  var upd = document.getElementById('kamar-update');
  var date = pick(C.diperbarui);
  if (upd) {
    upd.hidden = !date;
    upd.textContent = date ? t('perUpdate') + date : '';
  }

  // Tombol foto lengkap di Google Drive
  var box = document.getElementById('foto-lengkap');
  if (box) {
    box.hidden = !C.fotoLengkap;
    document.getElementById('foto-lengkap-link').href = C.fotoLengkap || '#';
  }
}

function updateSummary() {
  if (!form || !rooms.length) return;
  var r = currentRoom();
  var m = currentMonths();
  document.getElementById('sum-kamar').textContent = roomName(r);
  document.getElementById('sum-harga').textContent = rupiah(r.price);
  document.getElementById('sum-durasi').textContent = m + ' ' + t('bulan');
  document.getElementById('sum-total').textContent = rupiah(r.price * m);
  var listrik = pick(C.listrik);
  var el = document.getElementById('sum-listrik');
  el.hidden = !listrik;
  el.textContent = listrik ? t('listrik') + listrik : '';
  updateShare(r, m);
}

// ---- Bagikan ke orang tua: ringkasan kamar & biaya lewat WhatsApp ----
// wa.me tanpa nomor → WhatsApp membuka daftar kontak untuk dipilih
function updateShare(r, m) {
  var btn = document.getElementById('btn-share');
  if (!btn) return;
  var canon = document.querySelector('link[rel="canonical"]');
  var lines = [
    t('shareHalo'),
    '',
    t('shareKamar') + ': ' + roomName(r) + ' — ' + rupiah(r.price) + ' ' + t('perBulan'),
    t('shareBayar').replace('{n}', m) + ': ' + rupiah(r.price * m) + ' ' + t('shareListrik'),
    t('shareFasilitas'),
    '',
    t('shareLink') + ' ' + (canon ? canon.href : location.href)
  ];
  btn.href = 'https://wa.me/?text=' + encodeURIComponent(lines.join('\n'));
}

function formatDay(v) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
  var p = v.split('-');
  return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]))
    .toLocaleDateString(lang === 'en' ? 'en-GB' : 'id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function formatMonth(v) {
  if (!/^\d{4}-\d{2}$/.test(v)) return v;
  var p = v.split('-');
  return new Date(Number(p[0]), Number(p[1]) - 1, 1)
    .toLocaleDateString(lang === 'en' ? 'en-GB' : 'id-ID', { month: 'long', year: 'numeric' });
}

if (form) {
  var now = new Date();
  form.masuk.min = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');

  form.addEventListener('input', updateSummary);
  form.addEventListener('change', updateSummary);

  // Jadwal survei hanya tampil jika kotak "ingin survei" dicentang
  var jadwal = document.getElementById('survei-jadwal');
  function toggleJadwal() { if (jadwal) jadwal.hidden = !form.survei.checked; }
  form.survei.addEventListener('change', toggleJadwal);
  toggleJadwal();
  if (form.tgl) {
    var today = new Date();
    form.tgl.min = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var r = currentRoom();
    var m = currentMonths();
    var lines = [t('msgHalo'), ''];
    lines.push(t('msgNama') + ': ' + form.nama.value.trim());
    if (form.asal.value.trim()) lines.push(t('msgAsal') + ': ' + form.asal.value.trim());
    lines.push(t('msgKamar') + ': ' + roomName(r) + ' (' + rupiah(r.price) + ' ' + t('perBulan') + ')');
    if (form.masuk.value) lines.push(t('msgMasuk') + ': ' + formatMonth(form.masuk.value));
    lines.push(t('msgBayar') + ': ' + m + ' ' + t('msgDiMuka') + ' (' + rupiah(r.price * m) + ')');
    if (form.survei.checked) {
      lines.push('', t('msgSurvei'));
      var when = [];
      if (form.tgl && form.tgl.value) when.push(formatDay(form.tgl.value));
      if (form.waktu && form.waktu.value) when.push(t('waktu_' + form.waktu.value));
      if (when.length) lines.push(t('msgJadwal') + ': ' + when.join(', '));
    }
    if (form.catatan.value.trim()) lines.push('', t('msgCatatan') + ': ' + form.catatan.value.trim());
    lines.push('', t('msgTutup'));
    // Lewat link biasa, bukan window.open, supaya tidak diblokir browser HP (terutama iPhone)
    var a = document.createElement('a');
    a.href = waLink(lines.join('\n'));
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
}

// Tombol "Pilih Kamar Ini" → isi tipe kamar di form
document.querySelectorAll('[data-pick]').forEach(function (a) {
  a.addEventListener('click', function () {
    if (!form) return;
    form.kamar.value = this.dataset.pick;
    updateSummary();
    setTimeout(function () { form.nama.focus({ preventScroll: true }); }, 400);
  });
});

// ---- Animasi saat scroll (fade-up) ----
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.kamar-card-h, .fas-item, .faq-item, .galeri-item, .lok-list li').forEach(function (el) {
  el.classList.add('fade-up');
  observer.observe(el);
});

// ---- Filter galeri ----
var filterBtns = document.querySelectorAll('.galeri-filter button');
filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var f = this.dataset.filter;
    filterBtns.forEach(function (b) {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    document.querySelectorAll('.galeri-item').forEach(function (item) {
      item.hidden = f !== 'semua' && item.dataset.cat !== f;
      if (!item.hidden) item.classList.add('visible');
    });
  });
});

// ---- Lightbox: foto besar, bisa digeser ke foto berikutnya ----
var lightbox = document.getElementById('lightbox');
if (lightbox) {
  var lbImg = lightbox.querySelector('.lb-img');
  var lbOverlay = lightbox.querySelector('.lb-overlay');
  var lbClose = lightbox.querySelector('.lb-close');
  var lbPrev = lightbox.querySelector('.lb-prev');
  var lbNext = lightbox.querySelector('.lb-next');
  var lbCount = lightbox.querySelector('.lb-count');
  var lbList = [];
  var lbIndex = 0;
  var lbReturn = null;

  // Tampilkan pratinjau dulu (cepat di HP), lalu ganti ke foto asli setelah selesai dimuat
  function showLb(i) {
    lbIndex = (i + lbList.length) % lbList.length;
    var img = lbList[lbIndex];
    var full = img.dataset.full || img.src;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('loading');
    var multi = lbList.length > 1;
    lbPrev.hidden = lbNext.hidden = lbCount.hidden = !multi;
    lbCount.textContent = (lbIndex + 1) + ' / ' + lbList.length;
    var token = String(Math.random());
    lightbox.dataset.token = token;
    var hi = new Image();
    hi.onload = function () {
      // Jangan ganti jika lightbox sudah ditutup atau sudah pindah ke foto lain
      if (lightbox.classList.contains('active') && lightbox.dataset.token === token) lbImg.src = full;
      if (lightbox.dataset.token === token) lightbox.classList.remove('loading');
    };
    hi.onerror = function () { lightbox.classList.remove('loading'); };
    hi.src = full;
  }

  function openLb(img, viaKeyboard) {
    // Foto galeri: bisa digeser ke foto lain yang sedang tampil (sesuai filter)
    var inGallery = img.closest('.galeri-item');
    lbList = inGallery
      ? Array.prototype.filter.call(document.querySelectorAll('.galeri-item img'), function (x) { return !x.closest('.galeri-item').hidden; })
      : [img];
    lbReturn = img;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    showLb(lbList.indexOf(img));
    // Fokus pindah ke tombol tutup hanya untuk pengguna keyboard (tanpa bingkai saat diklik mouse)
    if (viaKeyboard) lbClose.focus();
  }

  function closeLb() {
    if (!lightbox.classList.contains('active')) return;
    lightbox.classList.remove('active', 'loading');
    document.body.style.overflow = '';
    if (lbReturn && lbReturn === document.activeElement) lbReturn.blur();
    if (lbReturn && lightbox.dataset.kb === '1') lbReturn.focus({ preventScroll: true });
  }

  document.querySelectorAll('.galeri-item img, .kamar-foto-h img').forEach(function (img) {
    // Bisa dibuka juga lewat keyboard (Tab + Enter)
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.addEventListener('click', function () { lightbox.dataset.kb = '0'; openLb(this, false); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lightbox.dataset.kb = '1'; openLb(this, true); }
    });
  });

  lbPrev.addEventListener('click', function () { showLb(lbIndex - 1); });
  lbNext.addEventListener('click', function () { showLb(lbIndex + 1); });
  lbOverlay.addEventListener('click', closeLb);
  lbClose.addEventListener('click', closeLb);
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft' && lbList.length > 1) showLb(lbIndex - 1);
    else if (e.key === 'ArrowRight' && lbList.length > 1) showLb(lbIndex + 1);
  });

  // Geser (swipe) kiri/kanan di HP
  var touchX = null, touchY = null;
  lightbox.addEventListener('touchstart', function (e) {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
  }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    if (touchX === null || lbList.length < 2) return;
    var dx = e.changedTouches[0].clientX - touchX;
    var dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showLb(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
  });
}

// ---- Mulai ----
var savedLang = 'id';
try { savedLang = localStorage.getItem('kos-lang') || 'id'; } catch (e) {}
setLang(savedLang);

console.log('Kos Putri Melati — ready ✓');
