// ===== GALLERY IMAGES =====
const imageData = [
  { id: 1, caption: 'Guest room', category: 'Rooms & Suites' },
  { id: 2, caption: 'Breakfast Lounge', category: 'Amenities' },
  { id: 3, caption: 'Hotel exterior', category: 'Exterior' },
  { id: 4, caption: 'Front Office', category: '' },
  { id: 5, caption: 'Hotel exterior', category: 'Exterior' },
  { id: 6, caption: 'Hotel lobby', category: 'Lobby' },
  { id: 7, caption: 'Front desk with friendly staff', category: '' },
  { id: 8, caption: 'Front desk', category: '' },
  { id: 9, caption: 'Lobby with sitting area', category: '' },
  { id: 10, caption: 'Guest room with queen bed(s)', category: 'Rooms & Suites' },
  { id: 11, caption: 'pool', category: 'Amenities' },
  { id: 12, caption: 'Guest room with two beds', category: 'Rooms & Suites' },
  { id: 13, caption: 'Guest room with flat-screen TV', category: 'Rooms & Suites' },
  { id: 14, caption: 'Guest room with sofa sleeper', category: 'Rooms & Suites' },
  { id: 15, caption: 'Front Office', category: 'Lobby' },
  { id: 16, caption: 'Guest room with flat-screen TV', category: 'Rooms & Suites' },
  { id: 17, caption: 'Guest room with sitting area', category: 'Rooms & Suites' },
  { id: 18, caption: 'King suite', category: 'Rooms & Suites' },
  { id: 19, caption: 'Front Office', category: 'Lobby' },
  { id: 20, caption: 'outdoor pool', category: 'Amenities' },
  { id: 21, caption: 'Breakfast area', category: 'Breakfast Area' },
  { id: 22, caption: 'Breakfast area', category: '' },
  { id: 23, caption: 'Enjoy breakfast in this seating area', category: '' },
  { id: 24, caption: 'Relax on the sundeck', category: '' },
  { id: 25, caption: 'Outdoor pool', category: '' },
  { id: 26, caption: 'Hotel exterior', category: 'Exterior' },
  { id: 27, caption: 'Amenity', category: 'Amenities' },
];


const allImages = imageData.map(d => ({ ...d, url: `Assets/${d.id}.jpeg` }));

let currentCategory = 'All Photos';
let currentIndex = 0;
let filteredImages = [...allImages];
let activeTab = 'photos';

function getFiltered() {
  return currentCategory === 'All Photos'
    ? allImages
    : allImages.filter(img => img.category === currentCategory);
}

function renderGallery() {
  filteredImages = getFiltered();
  if (filteredImages.length === 0) return;
  if (currentIndex >= filteredImages.length) currentIndex = 0;

  const img = filteredImages[currentIndex];
  document.getElementById('gallery-main-img').src = img.url;
  document.getElementById('gallery-main-img').alt = img.caption;
  document.getElementById('gallery-caption').textContent = img.caption;
  document.getElementById('gallery-counter').textContent = `${currentIndex + 1} / ${filteredImages.length}`;

  // Thumbnails
  const strip = document.getElementById('thumbnail-strip');
  strip.innerHTML = '';
  const maxThumb = Math.min(filteredImages.length, 10);
  for (let i = 0; i < maxThumb; i++) {
    const btn = document.createElement('button');
    btn.className = 'thumbnail-button' + (i === currentIndex ? ' active' : '');
    btn.onclick = (function (idx) { return function () { currentIndex = idx; renderGallery(); }; })(i);
    const tImg = document.createElement('img');
    tImg.src = filteredImages[i].url;
    tImg.alt = `Thumbnail ${i + 1}`;
    tImg.className = 'thumbnail-image';
    btn.appendChild(tImg);
    strip.appendChild(btn);
  }
  if (filteredImages.length > 10) {
    const more = document.createElement('div');
    more.className = 'thumbnail-more';
    more.textContent = `+${filteredImages.length - 10} more`;
    strip.appendChild(more);
  }
}

function galleryNext() {
  currentIndex = (currentIndex + 1) % filteredImages.length;
  renderGallery();
}

function galleryPrev() {
  currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
  renderGallery();
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  currentIndex = 0;
  document.querySelectorAll('.category-button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery();
}

function switchTab(tab) {
  activeTab = tab;
  document.getElementById('photos-tab').style.display = tab === 'photos' ? 'block' : 'none';
  document.getElementById('virtual-tab').style.display = tab === 'virtual' ? 'block' : 'none';
  document.getElementById('category-filters').style.display = tab === 'photos' ? 'flex' : 'none';
  document.getElementById('tab-photos').className = 'tab-button ' + (tab === 'photos' ? 'active' : 'inactive');
  document.getElementById('tab-virtual').className = 'tab-button ' + (tab === 'virtual' ? 'active' : 'inactive');
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') galleryNext();
  if (e.key === 'ArrowLeft') galleryPrev();
  if (e.key === 'Escape') window.location.href = 'index.html';
});

// Init
renderGallery();