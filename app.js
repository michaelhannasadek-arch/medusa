/* ═══════════════════════════════════════════════════════════════
   MEDUSA — app.js
   Keeps all original CMS / Firebase / lightbox logic.
   Adds: Medusa Taste menu category, inline gallery, new DOM fields.
═══════════════════════════════════════════════════════════════ */

const ASSET = 'images/';
const CMS_KEY = 'cmsData_v4';

const DEFAULT_CMS = {
  hero: {
    title: 'Where the <em>Sea</em> meets the Table',
    subtitle: 'Mediterranean cuisine, fresh plates, and relaxed beach moments by the Red Sea.',
    backgroundImage: ASSET + '678352779_3521845807967879_7740450839255360474_n.jpg'
  },
  gallery: {
    /* Indoor Dining — interior shots */
    space:   [ASSET + '657470994_1718343836269413_1771854811332439170_n.jpg',
              ASSET + '676609862_1643218676877397_7817545731957457814_n.jpg',
              ASSET + '678656175_1292186095577708_825986836503461197_n.jpg',
              ASSET + '685367027_1412110181037882_7765213718003905728_n.jpg'],
    /* Outdoor Seating — terrace + sea views */
    terrace: [ASSET + '675219338_2812932959043901_8446433715177790722_n.jpg',
              ASSET + '675488807_1637024340925673_6508047756652201996_n.jpg',
              ASSET + '675540010_2196135314538376_6798563319117077850_n.jpg',
              ASSET + '675752819_4169191613297879_3048624094248974435_n.jpg',
              ASSET + '678141521_2005943256798989_3408750562972089883_n.jpg',
              ASSET + '678379899_958255333665545_2920871970931605373_n.jpg',
              ASSET + '678970533_1295548631908131_1707416251078806017_n.jpg',
              ASSET + '679586462_1442939454277849_4067815846653777670_n.jpg',
              ASSET + '680228466_2211989232943677_3634368663083771844_n.jpg',
              ASSET + '680303228_911121681933394_8058276541138616594_n.jpg',
              ASSET + '681822334_4258525801079383_7126058200352111443_n.jpg',
              ASSET + '683362769_2153332542097719_6390541498744624737_n.jpg',
              ASSET + '684257487_1336533748527549_1537180722511331048_n.jpg',
              ASSET + '685538123_1296931512043517_287062583208037619_n.jpg'],
    /* Drinks & Coffee — cocktails + ambience */
    cafe:    [ASSET + '675081498_1803537561032329_6017068451330315516_n.jpg',
              ASSET + '678833622_837622905474054_8879969734610754374_n.jpg',
              ASSET + '677060175_985488247288140_9014419277983557865_n.jpg',
              ASSET + '678352779_3521845807967879_7740450839255360474_n.jpg',
              ASSET + '678398479_2088159145099965_5330343304089946040_n.jpg',
              ASSET + '679606644_1279063277689335_6576615282472387106_n.jpg',
              ASSET + '679734950_949537588060018_1078815194765989488_n.jpg',
              ASSET + '680955822_1344781454139297_6978356503707640895_n.jpg'],
    /* Bistro / Food — kitchen moments */
    bistro:  [ASSET + '674858155_962433662940287_430155859937051416_n.jpg',
              ASSET + '675254499_1294812205940541_7500643151107053930_n.jpg',
              ASSET + '675772930_1718572172468135_3862005809227626299_n.jpg',
              ASSET + '678232002_837926102698413_3441817672078038739_n.jpg',
              ASSET + '678412961_968041618923941_3113099657846059331_n.jpg',
              ASSET + '678553470_2018148545749192_3242176292359839990_n.jpg',
              ASSET + '679534248_938018755897372_7706169107679940696_n.jpg',
              ASSET + '679538832_1147336117526271_7548890759290476275_n.jpg',
              ASSET + '679636910_1988666565061999_4895708077560363084_n.jpg',
              ASSET + '680387264_1298144142285630_4465518356154644224_n.jpg',
              ASSET + '683207248_1229925582356253_1787590542883817739_n.jpg',
              ASSET + '685135541_961893026248276_1504091768444187613_n.jpg']
  },
  menu: {
    /* Card cover comes from MENU_COVERS (stock photos).
       These arrays are what the lightbox shows on click —
       so the actual Medusa menu pages come first. */
    breakfast:   [ASSET + '675443553_730054660129098_677878464353740455_n.jpg'],
    food:        [ASSET + '678923601_1669287207454664_245322656230305919_n.jpg',
                  ASSET + '685135541_961893026248276_1504091768444187613_n.jpg',
                  ASSET + '679534248_938018755897372_7706169107679940696_n.jpg',
                  ASSET + '678553470_2018148545749192_3242176292359839990_n.jpg',
                  ASSET + '683207248_1229925582356253_1787590542883817739_n.jpg',
                  ASSET + '679636910_1988666565061999_4895708077560363084_n.jpg',
                  ASSET + '675772930_1718572172468135_3862005809227626299_n.jpg',
                  ASSET + '679538832_1147336117526271_7548890759290476275_n.jpg',
                  ASSET + '675254499_1294812205940541_7500643151107053930_n.jpg',
                  ASSET + '680387264_1298144142285630_4465518356154644224_n.jpg',
                  ASSET + '674858155_962433662940287_430155859937051416_n.jpg',
                  ASSET + '678232002_837926102698413_3441817672078038739_n.jpg',
                  ASSET + '678412961_968041618923941_3113099657846059331_n.jpg'],
    medusaTaste: [ASSET + '675448886_2035116817356212_2581578873952777456_n.jpg'],
    drinks:      [ASSET + '676851387_2468356603613254_7778584907764674319_n.jpg',
                  ASSET + '675460455_1385537916936660_2802756402449363481_n.jpg',
                  ASSET + '677168780_2343695092825793_5472271833268558755_n.jpg',
                  ASSET + '675081498_1803537561032329_6017068451330315516_n.jpg',
                  ASSET + '678833622_837622905474054_8879969734610754374_n.jpg'],
    kids:        []
  },
  about: {
    title: 'A beach club unlike any <em>other</em>',
    text:  'A premium seaside restaurant experience with warm interiors, terrace seating, fresh plates and relaxed hospitality.',
    image1: ASSET + '657470994_1718343836269413_1771854811332439170_n.jpg',
    image2: ASSET + '678553470_2018148545749192_3242176292359839990_n.jpg'
  },
  contact: {
    phone:     '+20 103 571 7074',
    whatsapp:  '201035717074',
    instagram: 'https://www.instagram.com/medusahurghada/',
    location:  'Hurghada, Egypt',
    mapLink:   'https://goo.gl/maps/cg24a9GqmPvaot9y8',
    mapEmbed:  ''
  },
  hours: {
    weekdays: '09:00 – 23:00',
    weekend:  '09:00 – 23:00',
    note:     'Kitchen closes at 22:30. Last food orders at 22:00.'
  },
  brand: 'Medusa'
};

/* ── helpers ── */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

function deepMerge(a, b) {
  if (!b || typeof b !== 'object') return a;
  const out = Array.isArray(a) ? [...a] : { ...a };
  Object.keys(b).forEach(k => {
    out[k] = b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a && typeof a[k] === 'object' && !Array.isArray(a[k])
      ? deepMerge(a[k], b[k]) : b[k];
  });
  return out;
}

function firebaseReady() {
  return window.USE_FIREBASE && window.FIREBASE_CONFIG &&
    !String(window.FIREBASE_CONFIG.apiKey || '').includes('PASTE') && window.firebase;
}

function normalizeImageUrl(v) {
  if (typeof v !== 'string') return '';
  const s = v.trim();
  if (!s || s.toLowerCase() === 'null' || s.toLowerCase() === 'undefined') return '';
  return s;
}

function validImageUrls(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(normalizeImageUrl).filter(Boolean);
}

function getValidMenuMap() {
  const menu  = (CMS && CMS.menu && typeof CMS.menu === 'object') ? CMS.menu : {};
  const dflt  = DEFAULT_CMS.menu || {};
  const keys  = new Set([...Object.keys(menu), ...Object.keys(dflt)]);
  const out   = {};
  keys.forEach(k => {
    let urls = validImageUrls(menu[k]);
    if (!urls.length) urls = validImageUrls(dflt[k]); /* fallback */
    if (urls.length) out[k] = urls;
  });
  return out;
}

function waNumber() {
  return String(CMS.contact.whatsapp || CMS.contact.phone || '').replace(/\D/g, '');
}

/* ── Firebase / localStorage load ── */
async function loadCMS() {
  if (firebaseReady()) {
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
      const snap = await firebase.firestore().doc(window.CMS_DOC_PATH).get();
      if (snap.exists) return deepMerge(DEFAULT_CMS, snap.data().content || snap.data());
    } catch (e) { console.warn('Firebase read failed. Using local fallback.', e); }
  }
  try { return deepMerge(DEFAULT_CMS, JSON.parse(localStorage.getItem(CMS_KEY) || 'null')); }
  catch (e) { return DEFAULT_CMS; }
}

let CMS = null;

/* ── DOM helpers ── */
function setHTML(sel, val) { const el = $(sel); if (el) el.innerHTML = val || ''; }
function setText(sel, val) { const el = $(sel); if (el) el.textContent = val || ''; }
function setSrc(sel, val)  { const el = $(sel); if (el && val) el.src = val; }

/* ── Apply CMS data to all DOM elements ── */
function applyCMS() {
  /* Brand */
  $$('[data-text="brand"]').forEach(e => e.textContent = CMS.brand || 'Medusa');
  /* Hero — always use local default image for reliable loading + zoom effect */
  const heroBg = DEFAULT_CMS.hero.backgroundImage;
  setSrc('#heroImage', heroBg);
  setSrc('#galleryHeroImage', heroBg); // gallery.html
  setHTML('#heroTitle', CMS.hero.title);
  setText('#heroSubtitle', CMS.hero.subtitle);
  /* Force hero text color to white after CMS is applied */
  const heroTitleEl = $('#heroTitle');
  if (heroTitleEl) {
    heroTitleEl.style.color = '#ffffff';
    const heroTitleEm = heroTitleEl.querySelector('em');
    if (heroTitleEm) {
      heroTitleEm.style.color = 'rgba(16,137,141,.85)';
    }
  }
  /* Ribbon */
  setText('#ribbonHours', CMS.hours.weekdays);
  setText('#ribbonLocation', CMS.contact.location);
  setText('#ribbonPhone', CMS.contact.phone);
  /* Hours section */
  setText('#hoursMain', CMS.hours.weekdays);
  setText('#hoursNote', CMS.hours.note);
  setText('#weekdays', CMS.hours.weekdays);
  setText('#hoursFri', CMS.hours.weekend);
  setText('#hoursSat', CMS.hours.weekend);
  setText('#weekend', CMS.hours.weekend);
  /* Hours + contact combined */
  setText('#chWeekdays', CMS.hours.weekdays);
  setText('#chWeekend', CMS.hours.weekend);

  /* Hide loading screen and show content */
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }
  document.body.classList.add('loaded');
  /* Location text */
  setText('#locationText', CMS.contact.location);
  setText('#contactLocation', CMS.contact.location);
  setText('#contactPhone', CMS.contact.phone);
  /* Map buttons */
  const mapLink = CMS.contact.mapLink || '#';
  $$('#mapBtn, #mapCtaBtn, #contactMapLink, #footerMapLink').forEach(el => { if (el) el.href = mapLink; });
  /* Map embed */
  const mapHolder = $('#mapHolder');
  if (mapHolder && CMS.contact.mapEmbed) {
    /* CMS embed replaces the default iframe entirely */
    mapHolder.innerHTML = CMS.contact.mapEmbed;
  }
  /* Phone links */
  const phoneHref = 'tel:' + String(CMS.contact.phone || '').replace(/\s/g, '');
  $$('#contactPhoneLink, #footerPhoneLink').forEach(el => { if (el) el.href = phoneHref; });
  /* WhatsApp links */
  const waHref = 'https://wa.me/' + waNumber();
  $$('#contactWhatsapp, #footerWhatsapp').forEach(el => { if (el) el.href = waHref; });
  /* Instagram links */
  const ig = CMS.contact.instagram || '#';
  $$('#contactInstagram, #footerInstagram').forEach(el => { if (el) el.href = ig; });

  /* Render dynamic sections */
  renderMenu();
  renderGalleryCollage(); // homepage gallery preview
  renderGalleryPage(); // gallery.html
}

/* ══════════════════════════════════════════════════════════
   GALLERY COLLAGE PREVIEW (Mint-inspired)
══════════════════════════════════════════════════════════ */
/* Gallery collage images - local restaurant photos (best premium-looking images) */
const GALLERY_COLLAGE_IMAGES = [
  { src: 'images/675772930_1718572172468135_3862005809227626299_n.jpg' },
  { src: 'images/678352779_3521845807967879_7740450839255360474_n.jpg' },
  { src: 'images/680228466_2211989232943677_3634368663083771844_n.jpg' },
  { src: 'images/685135541_961893026248276_1504091768444187613_n.jpg' },
  { src: 'images/685367027_1412110181037882_7765213718003905728_n.jpg' },
  { src: 'images/680955822_1344781454139297_6978356503707640895_n.jpg' },
  { src: 'images/678970533_1295548631908131_1707416251078806017_n.jpg' },
  { src: 'images/677060175_985488247288140_9014419277983557865_n.jpg' },
  { src: 'images/675752819_4169191613297879_3048624094248974435_n.jpg' },
  { src: 'images/678553470_2018148545749192_3242176292359839990_n.jpg' }
];

function renderGalleryCollage() {
  const grid = document.getElementById('galleryCollageGrid');
  if (!grid) return;

  grid.innerHTML = GALLERY_COLLAGE_IMAGES.map(img => `
    <div class="gallery-collage-item reveal">
      <img src="${img.src}" alt="Medusa gallery" loading="lazy">
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════════════
   MENU — 4 defined categories in order + any extras from CMS
══════════════════════════════════════════════════════════ */
/* Mint-style stock cover photos for the "Taste it" cards.
   Click → opens the actual Medusa menu pages in the lightbox. */
const MENU_COVERS = {
  breakfast:   'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&h=1200&q=80',
  food:        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&h=1200&q=80',
  medusaTaste: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&h=1200&q=80',
  drinks:      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&h=1200&q=80'
};

const MENU_META = {
  breakfast:    { label: 'Breakfast',     desc: 'Morning plates and fresh starts' },
  food:         { label: 'Food',          desc: 'Main dishes and beach favorites' },
  medusaTaste:   { label: 'Medusa Taste',  desc: 'Our signature specialties' },
  drinks:       { label: 'Drinks',        desc: 'Coffee, juices and refreshing drinks' },
  kids:         { label: 'Kids',          desc: 'For the little guests' }
};
/* Display order — these 4 are always shown first if they have images */
const MENU_ORDER = ['breakfast', 'food', 'medusaTaste', 'drinks'];

function titleCase(s) { return String(s || '').replace(/[-_]+/g, ' ').replace(/\b\w/g, m => m.toUpperCase()); }

function renderMenu() {
  const grid = $('#menuCategoryGrid');
  if (!grid) return;

  const menuMap = getValidMenuMap();

  /* Build ordered list: preferred order first, then any extras */
  const orderedKeys = [
    ...MENU_ORDER.filter(k => menuMap[k]),
    ...Object.keys(menuMap).filter(k => !MENU_ORDER.includes(k))
  ];

  if (!orderedKeys.length) {
    grid.innerHTML = `<div class="menu-empty reveal">
      <h3>Menu will be updated soon.</h3>
      <p>Please check back shortly.</p>
    </div>`;
    observeReveals();
    return;
  }

  grid.innerHTML = orderedKeys.map(k => {
    const cover  = MENU_COVERS[k] || menuMap[k][0];
    const meta   = MENU_META[k] || {};
    const label  = meta.label || titleCase(k);
    return `<button class="menu-card reveal" data-menu="${k}">
      <span class="menu-card-img"><img src="${cover}" alt="${label}" loading="lazy"></span>
      <span class="menu-card-content"><h3>${label}</h3></span>
    </button>`;
  }).join('');

  $$('[data-menu]').forEach(card => {
    card.onclick = () => openLightbox(menuMap[card.dataset.menu] || [], 0);
  });

  /* If a stock cover fails (e.g. offline), swap to the local menu page image. */
  $$('#menuCategoryGrid .menu-card img').forEach(img => {
    img.addEventListener('error', () => {
      const card = img.closest('.menu-card');
      const k    = card && card.dataset.menu;
      const local = k && (menuMap[k] || [])[0];
      if (local && img.src !== local) { img.src = local; return; }
      if (card) card.remove();
      if (!$('#menuCategoryGrid .menu-card')) {
        grid.innerHTML = `<div class="menu-empty reveal">
          <h3>Menu will be updated soon.</h3><p>Please check back shortly.</p>
        </div>`;
      }
      observeReveals();
    }, { once: true });
  });

  observeReveals();
}

/* ══════════════════════════════════════════════════════════
   INLINE GALLERY (index.html #gallery-inline)
   Hides items that have no src (already handled by CSS :has)
   Also builds lightbox set from visible items only.
══════════════════════════════════════════════════════════ */
function renderGalleryInline() {
  const grid = $('#galleryInlineGrid');
  if (!grid) return;

  /* Collect all valid gallery images from the masonry grid for the lightbox */
  const visibleImgs = $$('[data-gallery="inline"]', grid).filter(img => img.src && img.src !== window.location.href);

  visibleImgs.forEach((img, i) => {
    img.dataset.index = i; // reindex for lightbox continuity
    img.onclick = () => {
      openLightbox(visibleImgs.map(im => im.src), i);
    };
    img.style.cursor = 'pointer';
  });

  /* Hide parent .gm-item if img src is empty — fallback for browsers without :has */
  $$('.gm-item', grid).forEach(item => {
    const img = $('img', item);
    if (!img || !img.getAttribute('src')) {
      item.style.display = 'none';
    }
  });

  observeReveals();
}

/* ══════════════════════════════════════════════════════════
   GALLERY PAGE (gallery.html)
══════════════════════════════════════════════════════════ */
function renderGalleryPage() {
  const holder = $('#gallerySections');
  if (!holder) return;

  const meta = {
    space:   ['Space',        'Indoor Dining',    'Warm wood, soft daylight and relaxed seating made for long seaside moments.'],
    terrace: ['Terrace',      'Outdoor Seating',  'Open-air setting with garden views, sea breeze and golden-hour ambience.'],
    cafe:    ['Cafe',         'Drinks & Coffee',  'Refreshing drinks and coffee moments served in a calm beach atmosphere.'],
    bistro:  ['Bistro / Food','Kitchen Moments',  'Colorful plates, breakfast favorites and beach-side bistro dishes.']
  };

  holder.innerHTML = Object.keys(meta).map(k => {
    let imgs = validImageUrls(CMS.gallery && CMS.gallery[k]);
    if (!imgs.length) imgs = validImageUrls(DEFAULT_CMS.gallery[k]); /* fallback */
    return `<section class="gallery-section">
      <div class="container">
        <div class="eyebrow">${meta[k][1]}</div>
        <h2 class="title">${meta[k][0]}</h2>
        <p class="lead">${meta[k][2]}</p>
        <div class="gallery-grid">
          ${imgs.map((src, i) => `<img class="reveal" src="${src}" alt="${meta[k][0]} ${i + 1}" data-gallery="${k}" data-index="${i}" loading="lazy">`).join('')}
          ${!imgs.length ? `<div class="placeholder reveal">No images yet for ${meta[k][0]}.</div>` : ''}
        </div>
      </div>
    </section>`;
  }).join('');

  $$('[data-gallery]', holder).forEach(img => {
    img.onclick = () => {
      const k = img.dataset.gallery;
      let set = validImageUrls(CMS.gallery && CMS.gallery[k]);
      if (!set.length) set = validImageUrls(DEFAULT_CMS.gallery[k]);
      openLightbox(set, Number(img.dataset.index));
    };
  });

  observeReveals();
}

/* ══════════════════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════════════════ */
let activeSet = [], activeIndex = 0;

function openLightbox(images, index = 0) {
  if (!images?.length) return;
  activeSet = images; activeIndex = index;
  $('.lightbox')?.classList.add('open');
  renderLightbox();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  $('.lightbox')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  setSrc('.lightbox-img', activeSet[activeIndex]);
  $('.lightbox-img')?.classList.remove('zoomed');
  setText('.lb-counter', `${activeIndex + 1} / ${activeSet.length}`);
}

function moveLightbox(step) {
  activeIndex = (activeIndex + step + activeSet.length) % activeSet.length;
  renderLightbox();
}

$('.lb-close')?.addEventListener('click', closeLightbox);
$('.lightbox')?.addEventListener('click', e => { if (e.target.classList.contains('lightbox')) closeLightbox(); });
$('.lb-prev')?.addEventListener('click', () => moveLightbox(-1));
$('.lb-next')?.addEventListener('click', () => moveLightbox(1));
$('.lightbox-img')?.addEventListener('click', e => e.currentTarget.classList.toggle('zoomed'));

document.addEventListener('keydown', e => {
  if (!$('.lightbox')?.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') moveLightbox(1);
  if (e.key === 'ArrowLeft')  moveLightbox(-1);
});

let touchX = 0;
$('.lightbox')?.addEventListener('touchstart', e => touchX = e.changedTouches[0].clientX, { passive: true });
$('.lightbox')?.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 45) moveLightbox(dx < 0 ? 1 : -1);
}, { passive: true });

/* ══════════════════════════════════════════════════════════
   RESERVATION FORM → WhatsApp
══════════════════════════════════════════════════════════ */
function handleReservation(e) {
  e.preventDefault();
  const v = id => (document.getElementById(id)?.value || '');

  const name = v('res-name') || '';
  const phone = v('res-phone') || '';
  const guests = v('res-guests') || '2';
  const date = v('res-date') || '';
  const time = v('res-time') || '';
  const message = v('res-message') || '';

  const text = `🌊 Medusa Reservation\n\nName: ${name}\nPhone/Email: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}\n\nMessage: ${message}`;

  window.open('https://wa.me/' + waNumber() + '?text=' + encodeURIComponent(text), '_blank');

  /* Show success message */
  const success = $('#reservationSuccess');
  if (success) {
    success.style.display = 'flex';
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => { success.style.display = 'none'; }, 8000);
  }
}
window.handleReservation = handleReservation;

/* ══════════════════════════════════════════════════════════
   REVEAL (scroll-triggered fade-in)
══════════════════════════════════════════════════════════ */
function revealTopContentImmediately() {
  const topLimit = window.innerHeight * 1.15;
  $$('.reveal').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < topLimit && r.bottom > -80) el.classList.add('is-visible', 'visible');
  });
}

let _revealObserver;
function observeReveals() {
  revealTopContentImmediately();
  if (!_revealObserver) {
    _revealObserver = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible', 'is-visible');
        _revealObserver.unobserve(e.target);
      }
    }), { threshold: .08, rootMargin: '0px 0px -6% 0px' });
  }
  $$('.reveal:not(.visible):not(.is-visible)').forEach(el => _revealObserver.observe(el));
}

/* ══════════════════════════════════════════════════════════
   NAV — scroll + mobile + dropdowns
══════════════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  $('.nav')?.classList.toggle('scrolled', scrollY > 40);
}, { passive: true });

$('.nav-toggle')?.addEventListener('click', () => {
  $('.nav-links')?.classList.toggle('mobile-open');
});

/* Close mobile nav when a link is clicked */
$$('.nav-link, .drop-link, .btn').forEach(el => {
  el.addEventListener('click', () => {
    $('.nav-links')?.classList.remove('mobile-open');
  });
});

function setupTopDropdowns() {
  const items = $$('.has-dropdown');
  items.forEach(item => {
    const trigger = $('.dropdown-trigger', item);
    if (!trigger) return;

    trigger.addEventListener('click', e => {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        const open = item.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(open));
      }
    });

    item.addEventListener('mouseenter', () => trigger.setAttribute('aria-expanded', 'true'));
    item.addEventListener('mouseleave', () => {
      trigger.setAttribute('aria-expanded', 'false');
      item.classList.remove('open');
    });
  });

  document.addEventListener('click', e => {
    if (e.target.closest('.has-dropdown')) return;
    items.forEach(item => {
      item.classList.remove('open');
      $('.dropdown-trigger', item)?.setAttribute('aria-expanded', 'false');
    });
  });

  /* "data-open-menu" links open lightbox for that category */
  $$('[data-open-menu]').forEach(link => {
    link.addEventListener('click', e => {
      const key  = link.dataset.openMenu;
      const imgs = getValidMenuMap()?.[key] || [];
      if (imgs.length) {
        e.preventDefault();
        setTimeout(() => openLightbox(imgs, 0), 80);
      }
    });
  });
}

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  revealTopContentImmediately();
  setupTopDropdowns();
  
  /* Scroll down indicator click handler */
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const nextSection = document.querySelector('.about-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
window.addEventListener('load', revealTopContentImmediately);

loadCMS().then(data => {
  CMS = data;
  applyCMS();
  revealTopContentImmediately();
  observeReveals();
});
