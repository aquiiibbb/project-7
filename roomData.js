// ============================================================
//  roomData.js  –  Single source of truth for all room data
//  Include this file in BOTH index.html and room.html
// ============================================================

const ROOMS = [
  {
    id: 'room1',
    type: '1bed',
    title: 'King Bed – Non Smoking (NK)',
    count: '5',
    availability: 'available',
    availabilityLabel: 'Available',
    image: 'Assets/1.jpeg',
    images: ['Assets/1.jpeg', 'Assets/13.jpeg', 'Assets/11.jpeg', 'Assets/14.jpeg'],
    caption: 'King Beds - Non Smoking (NK)',
    specs: [
      { icon: '🛏️', text: '1 King Bed' },
      { icon: '🚭', text: 'Non-Smoking' },
      { icon: '📐', text: '300 sq ft' },
      { icon: '👥', text: 'Max 2 Guests' }
    ],
    features: [
      'Microwave & Coffee maker',
      'Flat TV',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '🍽️', text: 'Microwave' },
      { icon: '☕', text: 'Coffee maker' },
      { icon: '🖥️', text: 'Ergonomic desk' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '📡', text: 'Cable/Satellite' },
      { icon: '🌟', text: 'Premium channels' }
    ],
    maxGuests: 2,
    sqft: 300,
    smoking: false
  },
  {
    id: 'room2',
    type: '1bed',
    title: 'King Bed – Smoking (K)',
    count: '4',
    availability: 'available',
    availabilityLabel: 'Available',
    image: 'Assets/13.jpeg',
    images: ['Assets/13.jpeg', 'Assets/aminities4.jpeg', 'Assets/11.jpeg', 'Assets/1.jpeg'],
    caption: 'King Beds - Smoking (K)',
    specs: [
      { icon: '🛏️', text: '1 King Bed' },
      { icon: '🚬', text: 'Smoking' },
      { icon: '📐', text: '350 sq ft' },
      { icon: '👥', text: 'Max 2 Guests' }
    ],
    features: [
      'Flat TV',
      'Coffee maker',
      'Desk & Free WiFi',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '☕', text: 'Coffee maker' },
      { icon: '🖥️', text: 'Ergonomic desk' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📡', text: 'Cable/Satellite' },
      { icon: '🌟', text: 'Premium channels' },
      { icon: '🚬', text: 'Smoking allowed' }
    ],
    maxGuests: 2,
    sqft: 350,
    smoking: true
  },
  {
    id: 'room3',
    type: 'handicap',
    title: 'Handicap King Room – Non Smoking (HNK)',
    count: '2',
    availability: 'limited',
    availabilityLabel: 'Only 2 Left',
    image: 'Assets/11.jpeg',
    images: ['Assets/11.jpeg', 'Assets/14.jpeg', 'Assets/1.jpeg', 'Assets/11.jpeg'],
    caption: 'Handicap King Room - Non Smoking (HNK)',
    specs: [
      { icon: '🛏️', text: '1 King Bed' },
      { icon: '♿', text: 'Accessible' },
      { icon: '🚭', text: 'Non-Smoking' },
      { icon: '📐', text: '400 sq ft' }
    ],
    features: [
      'Tea/Coffee machine & Bed linen',
      'Bathtub, Shampoo & Conditioner',
      'Body soap & Flat TV',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '☕', text: 'Tea/Coffee machine' },
      { icon: '🛏️', text: 'Premium bed linen' },
      { icon: '🧴', text: 'Body soap & shampoo' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '🛁', text: 'Bathtub' },
      { icon: '♿', text: 'Wheelchair accessible' },
      { icon: '🚪', text: 'Wide doorways' },
      { icon: '🤲', text: 'Grab bars' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '📺', text: 'Flat TV' }
    ],
    maxGuests: 2,
    sqft: 400,
    smoking: false
  },
  {
    id: 'room4',
    type: 'suite',
    title: 'King Business Suite – Non Smoking (BNK)',
    count: '3',
    availability: 'available',
    availabilityLabel: 'Available',
    image: 'Assets/13.jpeg',
    images: ['Assets/13.jpeg', 'Assets/16.jpeg', 'Assets/1.jpeg', 'Assets/18.jpeg'],
    caption: 'King Business Suites - Non Smoking (BNK)',
    specs: [
      { icon: '🛏️', text: '1 King Bed' },
      { icon: '🚭', text: 'Non-Smoking' },
      { icon: '📐', text: '350 sq ft' },
      { icon: '👥', text: 'Max 3 Guests' }
    ],
    features: [
      'Flat TV',
      'Coffee maker',
      'Ergonomic desk & Free WiFi',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '☕', text: 'Coffee maker' },
      { icon: '🖥️', text: 'Ergonomic desk' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '📡', text: 'Cable/Satellite' },
      { icon: '🌟', text: 'Premium channels' },
      { icon: '🏢', text: 'Business center access' }
    ],
    maxGuests: 3,
    sqft: 350,
    smoking: false
  },
  {
    id: 'room5',
    type: '2bed',
    title: 'Two Queen Beds – Non Smoking (NQQ)',
    count: '1',
    availability: 'limited',
    availabilityLabel: 'Only 1 Left',
    image: 'Assets/10.jpeg',
    images: ['Assets/10.jpeg', 'Assets/13.jpeg', 'Assets/12.jpeg', 'Assets/33.jpeg'],
    caption: 'Two Queen Beds - Non Smoking (NQQ)',
    specs: [
      { icon: '🛏️', text: '2 Queen Beds' },
      { icon: '🚭', text: 'Non-Smoking' },
      { icon: '📐', text: '380 sq ft' },
      { icon: '👥', text: 'Max 4 Guests' }
    ],
    features: [
      'Flat TV',
      'Coffee maker & Work desk',
      'Free WiFi',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '☕', text: 'Coffee maker' },
      { icon: '🖥️', text: 'Work desk' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📡', text: 'Cable/Satellite' },
      { icon: '🌟', text: 'Premium channels' }
    ],
    maxGuests: 4,
    sqft: 380,
    smoking: false
  },
  {
    id: 'room6',
    type: 'suite',
    title: 'King Business Suite – Smoking (BK)',
    count: '1',
    availability: 'limited',
    availabilityLabel: 'Only 1 Left',
    image: 'Assets/1.jpeg',
    images: ['Assets/1.jpeg', 'Assets/13.jpeg', 'Assets/11.jpeg', 'Assets/14.jpeg'],
    caption: 'King Business Suites - Smoking (BK)',
    specs: [
      { icon: '🛏️', text: '1 King Bed' },
      { icon: '🚬', text: 'Smoking' },
      { icon: '📐', text: '320 sq ft' },
      { icon: '👥', text: 'Max 3 Guests' }
    ],
    features: [
      'Tea/Coffee machine & Bed linen',
      'Flat TV & Mini fridge',
      'Free WiFi',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '☕', text: 'Tea/Coffee machine' },
      { icon: '🛏️', text: 'Bed linen' },
      { icon: '❄️', text: 'Mini fridge' },
      { icon: '👗', text: 'Cloth hangers' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '🚬', text: 'Smoking allowed' },
      { icon: '🏢', text: 'Business center access' }
    ],
    maxGuests: 3,
    sqft: 320,
    smoking: true
  },
  {
    id: 'room7',
    type: '2bed',
    title: 'Two Queen Beds – Smoking (QQ)',
    count: '6',
    availability: 'available',
    availabilityLabel: 'Available',
    image: 'Assets/13.jpeg',
    images: ['Assets/13.jpeg', 'Assets/aminities4.jpeg', 'Assets/11.jpeg', 'Assets/1.jpeg'],
    caption: 'Two Queen Beds - Smoking (QQ)',
    specs: [
      { icon: '🛏️', text: '2 Queen Beds' },
      { icon: '🚬', text: 'Smoking' },
      { icon: '📐', text: '280 sq ft' },
      { icon: '👥', text: 'Max 4 Guests' }
    ],
    features: [
      'Flat TV',
      'Work desk & Free WiFi',
      'Basic amenities',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '☕', text: 'Coffee maker' },
      { icon: '🖥️', text: 'Work desk' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📡', text: 'Cable channels' },
      { icon: '🚬', text: 'Smoking allowed' },
      { icon: '🧹', text: 'Daily housekeeping' }
    ],
    maxGuests: 4,
    sqft: 280,
    smoking: true
  },
  {
    id: 'room8',
    type: 'handicap',
    title: 'Handicap Two Queen Beds – Non Smoking (HNQQ)',
    count: '3',
    availability: 'available',
    availabilityLabel: 'Available',
    image: 'Assets/1.jpeg',
    images: ['Assets/1.jpeg', 'Assets/11.jpeg', 'Assets/14.jpeg', 'Assets/18.jpeg'],
    caption: 'Handicap Two Queen Beds - Non Smoking (HNQQ)',
    specs: [
      { icon: '🛏️', text: '2 Queen Beds' },
      { icon: '♿', text: 'Accessible' },
      { icon: '🚭', text: 'Non-Smoking' },
      { icon: '📐', text: '320 sq ft' }
    ],
    features: [
      'Flat TV & Mini fridge',
      'Coffee maker & Executive desk',
      'Free WiFi • Max 4 guests',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '♿', text: 'Wheelchair accessible' },
      { icon: '🚿', text: 'Roll-in shower' },
      { icon: '🤲', text: 'Grab bars' },
      { icon: '🚪', text: 'Wide doorways' },
      { icon: '❄️', text: 'Mini fridge' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '☕', text: 'Coffee maker' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '🖥️', text: 'Executive desk' },
      { icon: '📶', text: 'Free WiFi' }
    ],
    maxGuests: 4,
    sqft: 320,
    smoking: false
  },
  {
    id: 'room9',
    type: 'jacuzzi',
    title: 'King Jacuzzi – Non Smoking (SNK)',
    count: '4',
    availability: 'available',
    availabilityLabel: 'Available',
    image: 'Assets/18.jpeg',
    images: ['Assets/18.jpeg', 'Assets/14.jpeg', 'Assets/1.jpeg', 'Assets/20.jpeg'],
    caption: 'King Jacuzzi - Non Smoking (SNK)',
    specs: [
      { icon: '🛏️', text: '1 King Bed' },
      { icon: '🛁', text: 'Jacuzzi' },
      { icon: '🚭', text: 'Non-Smoking' },
      { icon: '📐', text: '250 sq ft' }
    ],
    features: [
      'Private Jacuzzi',
      'Flat TV',
      'Coffee maker & Free WiFi',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '🛁', text: 'Private Jacuzzi' },
      { icon: '☕', text: 'Coffee maker' },
      { icon: '🖥️', text: 'Small desk' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '📡', text: 'Basic cable' },
      { icon: '🧹', text: 'Daily housekeeping' }
    ],
    maxGuests: 2,
    sqft: 250,
    smoking: false
  },
  {
    id: 'room10',
    type: 'jacuzzi',
    title: 'King Jacuzzi – Smoking (SK)',
    count: '1',
    availability: 'limited',
    availabilityLabel: 'Only 1 Left',
    image: 'Assets/11.jpeg',
    images: ['Assets/11.jpeg', 'Assets/29.jpeg', 'Assets/20.jpeg', 'Assets/1.jpeg'],
    caption: 'King Jacuzzi - Smoking (SK)',
    specs: [
      { icon: '🛏️', text: '1 King Bed' },
      { icon: '🛁', text: 'Jacuzzi' },
      { icon: '🚬', text: 'Smoking' },
      { icon: '📐', text: '320 sq ft' }
    ],
    features: [
      'Private Jacuzzi & Premium bedding',
      'Flat TV & Mini fridge',
      'Free WiFi • Max 2 guests',
      'Hair Dryer',
      'Refrigerator',
      'Iron/Board'
    ],
    amenities: [
      { icon: '🛁', text: 'Private Jacuzzi' },
      { icon: '🛏️', text: 'Premium bedding' },
      { icon: '❄️', text: 'Mini fridge' },
      { icon: '🚬', text: 'Smoking allowed' },
      { icon: '🧴', text: 'Luxury toiletries' },
      { icon: '❄️', text: 'Refrigerator' },
      { icon: '💨', text: 'Hair Dryer' },
      { icon: '👔', text: 'Iron and Ironing Board' },
      { icon: '📺', text: 'Flat TV' },
      { icon: '🌟', text: 'Premium channels' },
      { icon: '📶', text: 'Free WiFi' },
      { icon: '🔊', text: 'Bluetooth speaker' }
    ],
    maxGuests: 2,
    sqft: 320,
    smoking: true
  }
];

// ============================================================
//  Helper: Build one room card HTML (used in index.html for
//  the first 3 rooms, and in room.html for all 10)
// ============================================================
function buildRoomCard(room, isIndexPage = false) {
  const featuresHtml = room.features.map(f => `<span>• ${f}</span>`).join('');
  const specsHtml = room.specs.map(s => `<span class="spec">${s.icon} ${s.text}</span>`).join('');

  return `
    <div class="room-card" data-type="${room.type}">
      <div class="room-image" onclick="openRoomModal('${room.id}-modal')" style="cursor:pointer">
        <img src="${room.image}" alt="${room.title}" />
        <span class="room-count">${room.count}</span>
        ${!isIndexPage ? `<span class="availability-badge ${room.availability}">${room.availabilityLabel}</span>` : ''}
        <div class="image-overlay"><span class="view-photos">${isIndexPage ? 'View Details' : '📷 View Details'}</span></div>
      </div>
      <div class="room-details">
        <h3>${room.title}</h3>
        <div class="room-specs">${specsHtml}</div>
        <div class="room-features">
          <div class="feature-row">${featuresHtml}</div>
        </div>
        <button class="room-details-btn" onclick="openRoomModal('${room.id}-modal')">Room Details</button>
      </div>
      <div class="room-pricing">
        <button class="book-room-btn"
          onclick="window.open('https://bookingengine.stayflexi.com/?hotel_id=35780','_blank')">Book Now</button>
      </div>
    </div>`;
}

// ============================================================
//  Helper: Build one room modal HTML
// ============================================================
function buildRoomModal(room) {
  const amenitiesHtml = room.amenities.map(a =>
    `<div class="modal-amenity-item">
      <div class="modal-amenity-icon">${a.icon}</div><span>${a.text}</span>
    </div>`
  ).join('');

  const featuresHtml = room.specs.map(s =>
    `<div class="modal-feature-item">
      <div class="modal-feature-icon">${s.icon}</div><span>${s.text}</span>
    </div>`
  ).join('');

  return `
    <div class="modal-overlay" id="${room.id}-modal" onclick="overlayClose(event,'${room.id}-modal')">
      <div class="room-modal" onclick="event.stopPropagation()">
        <button class="modal-close-btn" onclick="closeModal('${room.id}-modal')">✕</button>
        <div class="modal-header"><h2>Room Details</h2></div>
        <div class="modal-image-section">
          <div class="modal-main-image">
            <img id="${room.id}-img" src="${room.image}" alt="Room" />
            <button class="modal-nav-btn modal-prev" onclick="modalSlide('${room.id}',-1)">‹</button>
            <button class="modal-nav-btn modal-next" onclick="modalSlide('${room.id}',1)">›</button>
            <div class="modal-image-caption">${room.caption}</div>
          </div>
        </div>
        <div class="modal-info-section">
          <h3>${room.title}</h3>
          <p class="modal-bed-info">${room.specs[0].text} • 1 Room</p>
          <div class="modal-features">${featuresHtml}</div>
          <div class="modal-amenities-section">
            <h4>Amenities</h4>
            <h5>Room</h5>
            <div class="modal-amenities-grid">${amenitiesHtml}</div>
            <p class="modal-additional-cost">*May require an additional cost</p>
          </div>
          <div class="modal-pricing">
            <button class="modal-book-btn"
              onclick="window.open('https://bookingengine.stayflexi.com/?hotel_id=35780','_blank')">Book Now</button>
          </div>
        </div>
      </div>
    </div>`;
}

// ============================================================
//  Slider state
// ============================================================
const roomSliderIndex = {};
ROOMS.forEach(r => roomSliderIndex[r.id] = 0);

function modalSlide(roomId, dir) {
  const room = ROOMS.find(r => r.id === roomId);
  if (!room) return;
  const imgs = room.images;
  roomSliderIndex[roomId] = (roomSliderIndex[roomId] + dir + imgs.length) % imgs.length;
  const el = document.getElementById(roomId + '-img');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => { el.src = imgs[roomSliderIndex[roomId]]; el.style.opacity = '1'; }, 150);
}

// ============================================================
//  Modal open / close
// ============================================================
function openRoomModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  // class-based (index.html style)
  if (document.body.classList.contains('use-class-modal')) {
    m.classList.add('open');
  } else {
    m.style.display = 'block';
  }
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('open');
  m.style.display = 'none';
  document.body.style.overflow = '';
}

function overlayClose(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.classList.remove('open');
      m.style.display = 'none';
    });
    document.body.style.overflow = '';
  }
});
