//  footer //
// Terms popup functionality
document.addEventListener('DOMContentLoaded', function () {
  const termsContainer = document.querySelector('.terms-hover-container');
  const termsPopup = document.querySelector('.terms-popup');
  let hoverTimeout;

  if (termsContainer && termsPopup) {
    // Show popup on hover
    termsContainer.addEventListener('mouseenter', function () {
      clearTimeout(hoverTimeout);
      termsPopup.style.opacity = '1';
      termsPopup.style.visibility = 'visible';
      termsPopup.style.transform = 'translateY(0)';
    });

    // Hide popup when leaving
    termsContainer.addEventListener('mouseleave', function () {
      hoverTimeout = setTimeout(function () {
        termsPopup.style.opacity = '0';
        termsPopup.style.visibility = 'hidden';
        termsPopup.style.transform = 'translateY(10px)';
      }, 200); // Small delay to prevent flickering
    });

    // Keep popup open when hovering over it
    termsPopup.addEventListener('mouseenter', function () {
      clearTimeout(hoverTimeout);
    });

    termsPopup.addEventListener('mouseleave', function () {
      hoverTimeout = setTimeout(function () {
        termsPopup.style.opacity = '0';
        termsPopup.style.visibility = 'hidden';
        termsPopup.style.transform = 'translateY(10px)';
      }, 200);
    });
  }
});

// Touch devices support
document.addEventListener('DOMContentLoaded', function () {
  const termsLink = document.querySelector('.terms-link');
  const termsPopup = document.querySelector('.terms-popup');
  let isPopupOpen = false;

  if (termsLink && termsPopup) {
    // Handle touch devices
    termsLink.addEventListener('click', function (e) {
      e.preventDefault();

      if (window.innerWidth <= 768) {
        if (!isPopupOpen) {
          termsPopup.style.opacity = '1';
          termsPopup.style.visibility = 'visible';
          termsPopup.style.transform = 'translateY(0)';
          isPopupOpen = true;
        } else {
          termsPopup.style.opacity = '0';
          termsPopup.style.visibility = 'hidden';
          termsPopup.style.transform = 'translateY(10px)';
          isPopupOpen = false;
        }
      }
    });

    // Close popup when clicking outside on mobile
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768 && isPopupOpen) {
        if (!termsLink.contains(e.target) && !termsPopup.contains(e.target)) {
          termsPopup.style.opacity = '0';
          termsPopup.style.visibility = 'hidden';
          termsPopup.style.transform = 'translateY(10px)';
          isPopupOpen = false;
        }
      }
    });
  }
});

// Smooth scrolling for popup content
document.addEventListener('DOMContentLoaded', function () {
  const popup = document.querySelector('.terms-popup');
  if (popup) {
    popup.addEventListener('wheel', function (e) {
      e.stopPropagation();
    });
  }
});
// ===== IMAGE DATA =====
const hamptonImages = [
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop", alt: "Hotel Exterior" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop", alt: "Hotel Room" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop", alt: "Hotel Lobby" },
  { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop", alt: "Indoor Pool" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop", alt: "Fitness Center" },
  { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop", alt: "Breakfast Area" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop", alt: "Business Center" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop", alt: "Hotel Bathroom" }
];
let hamptonCurrentImage = 0;

function nextImage() {
  hamptonCurrentImage = (hamptonCurrentImage + 1) % hamptonImages.length;
  updateHamptonImage();
}
function previousImage() {
  hamptonCurrentImage = (hamptonCurrentImage - 1 + hamptonImages.length) % hamptonImages.length;
  updateHamptonImage();
}
function updateHamptonImage() {
  const img = document.querySelector('.hampton-main-image');
  const counter = document.querySelector('.hampton-image-counter');
  if (img && counter) {
    img.src = hamptonImages[hamptonCurrentImage].src;
    img.alt = hamptonImages[hamptonCurrentImage].alt;
    counter.textContent = `${hamptonCurrentImage + 1} / ${hamptonImages.length}`;
  }
}

// Booking state
let bookingState = {
  checkinDate: new Date(),
  checkoutDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
  rooms: 1,
  adults: 1,
  children: 0,
  currentDateType: null,
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear()
};

// Date picker functions
function showDatePicker(dateType) {
  bookingState.currentDateType = dateType;
  document.getElementById('date-picker-title').textContent =
    dateType === 'checkin' ? 'Select Check-in Date' : 'Select Check-out Date';
  document.getElementById('date-picker-modal').style.display = 'block';
  renderCalendar();
}

function hideDatePicker() {
  document.getElementById('date-picker-modal').style.display = 'none';
}

function navigateMonth(direction) {
  bookingState.currentMonth += direction;
  if (bookingState.currentMonth > 11) {
    bookingState.currentMonth = 0;
    bookingState.currentYear++;
  } else if (bookingState.currentMonth < 0) {
    bookingState.currentMonth = 11;
    bookingState.currentYear--;
  }
  renderCalendar();
}

function renderCalendar() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  document.getElementById('current-month-display').textContent =
    `${monthNames[bookingState.currentMonth]} ${bookingState.currentYear}`;

  const grid = document.getElementById('date-picker-grid');
  grid.innerHTML = '';

  // Add weekday headers
  dayNames.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.className = 'date-picker-weekday';
    dayElement.textContent = day;
    grid.appendChild(dayElement);
  });

  // Get first day of month and number of days
  const firstDay = new Date(bookingState.currentYear, bookingState.currentMonth, 1);
  const lastDay = new Date(bookingState.currentYear, bookingState.currentMonth + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  // Generate calendar days
  for (let i = 0; i < 42; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const dayElement = document.createElement('div');
    dayElement.className = 'date-picker-day';
    dayElement.textContent = currentDate.getDate();

    // Add classes for styling
    if (currentDate.getMonth() !== bookingState.currentMonth) {
      dayElement.classList.add('other-month');
    }

    if (isToday(currentDate)) {
      dayElement.classList.add('today');
    }

    if (isSelectedDate(currentDate)) {
      dayElement.classList.add('selected');
    }

    // Add click handler
    dayElement.onclick = () => selectDate(currentDate);

    grid.appendChild(dayElement);
  }
}

function isToday(date) {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

function isSelectedDate(date) {
  if (bookingState.currentDateType === 'checkin') {
    return date.toDateString() === bookingState.checkinDate.toDateString();
  } else {
    return date.toDateString() === bookingState.checkoutDate.toDateString();
  }
}

function selectDate(date) {
  if (bookingState.currentDateType === 'checkin') {
    bookingState.checkinDate = date;
    // Auto-adjust checkout if it's before checkin
    if (bookingState.checkoutDate <= date) {
      bookingState.checkoutDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    }
  } else {
    // Don't allow checkout before checkin
    if (date > bookingState.checkinDate) {
      bookingState.checkoutDate = date;
    }
  }

  updateDateDisplays();
  hideDatePicker();
}

function updateDateDisplays() {
  const options = { weekday: 'short', day: '2-digit', month: 'short' };
  document.getElementById('checkin-display').textContent =
    bookingState.checkinDate.toLocaleDateString('en-US', options);
  document.getElementById('checkout-display').textContent =
    bookingState.checkoutDate.toLocaleDateString('en-US', options);
}

// Guest selector functions
function showGuestSelector() {
  document.getElementById('guest-selector-modal').style.display = 'block';
  updateGuestCounters();
}

function hideGuestSelector() {
  document.getElementById('guest-selector-modal').style.display = 'none';
}

function updateGuestCount(type, change) {
  if (type === 'rooms') {
    bookingState.rooms = Math.max(1, bookingState.rooms + change);
  } else if (type === 'adults') {
    bookingState.adults = Math.max(1, bookingState.adults + change);
  } else if (type === 'children') {
    bookingState.children = Math.max(0, bookingState.children + change);
  }
  updateGuestCounters();
}

function updateGuestCounters() {
  document.getElementById('rooms-counter').textContent = bookingState.rooms;
  document.getElementById('adults-counter').textContent = bookingState.adults;
  document.getElementById('children-counter').textContent = bookingState.children;
}

function applyGuestChanges() {
  updateGuestDisplay();
  hideGuestSelector();
}

function updateGuestDisplay() {
  const totalGuests = bookingState.adults + bookingState.children;
  const roomText = bookingState.rooms === 1 ? 'room' : 'rooms';
  const guestText = totalGuests === 1 ? 'guest' : 'guests';

  document.getElementById('guest-display').textContent =
    `${bookingState.rooms} ${roomText}, ${totalGuests} ${guestText}`;
}

// Search function
function performSearch() {
  // Add your search logic here
  console.log('Searching with:', bookingState);
  // You can scroll to rooms section or trigger search
  const roomsSection = document.getElementById('guest-rooms');
  if (roomsSection) {
    roomsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Hotel details function
function showHotelDetails() {

  const modal = document.getElementById('hotelDetailsModal');
  const iframe = document.getElementById('hotelDetailsFrame');

  if (modal && iframe) {
    iframe.src = 's.html';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    console.log('Modal elements not found');
  }

}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  updateDateDisplays();
  updateGuestDisplay();
});

// Close modals when clicking outside
window.onclick = function (event) {
  const dateModal = document.getElementById('date-picker-modal');
  const guestModal = document.getElementById('guest-selector-modal');

  if (event.target === dateModal) {
    hideDatePicker();
  }
  if (event.target === guestModal) {
    hideGuestSelector();
  }
}

// ===== GUEST SELECTOR =====
function openGuestSelector() {
  document.getElementById('guest-selector-modal').style.display = 'block';
  updateGuestCounts();
}
function closeGuestSelector() {
  document.getElementById('guest-selector-modal').style.display = 'none';
}
function changeCount(type, delta) {
  if (type === 'rooms') roomsCount = Math.max(1, roomsCount + delta);
  else if (type === 'adults') adultsCount = Math.max(1, adultsCount + delta);
  else if (type === 'children') childrenCount = Math.max(0, childrenCount + delta);
  updateGuestCounts();
}
function updateGuestCounts() {
  document.getElementById('rooms-count').textContent = roomsCount;
  document.getElementById('adults-count').textContent = adultsCount;
  document.getElementById('children-count').textContent = childrenCount;
}
function applyGuestSelection() {
  updateBookingDisplay();
  closeGuestSelector();
}
function updateBookingDisplay() {
  document.getElementById('checkin-date').textContent =
    checkinDate.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' });
  document.getElementById('checkout-date').textContent =
    checkoutDate.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' });
  let guestText = `${roomsCount} room${roomsCount > 1 ? 's' : ''}, `;
  let totalGuests = adultsCount + childrenCount;
  guestText += `${totalGuests} guest${totalGuests > 1 ? 's' : ''}`;
  document.getElementById('rooms-guests').textContent = guestText;
}

// ===== WINDOW CLICK: close all modals when clicking backdrop =====
window.addEventListener('click', function (event) {
  // date / guest modals (display:block style)
  const dateModal = document.getElementById('date-picker-modal');
  const guestModal = document.getElementById('guest-selector-modal');
  if (event.target === dateModal) closeDatePicker();
  if (event.target === guestModal) closeGuestSelector();

  // hotel details modal (display:block style)
  const hotelModal = document.getElementById('hotelDetailsModal');
  if (hotelModal && event.target === hotelModal) closeHotelDetailsModal();
});

// =========================
// Sections Mapping
// =========================
const sections = ['overview', 'guest-rooms', 'amenities', 'location', 'info', 'reviews', 'contact', 'terms'];

let isManualScrolling = false;

// =========================
// Handle Vertical Scroll
// =========================
function handleScroll() {
  if (isManualScrolling) return;

  const scrollPosition = window.scrollY + 200;
  const navBtns = document.querySelectorAll('.nav-item');

  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i]);

    if (el && scrollPosition >= el.offsetTop) {

      navBtns.forEach(btn => btn.classList.remove('active'));

      if (navBtns[i]) {
        navBtns[i].classList.add('active');
        scrollNavToActive(navBtns[i]);
      }

      break;
    }
  }
}

// =========================
// Auto Horizontal Scroll
// =========================
function scrollNavToActive(activeBtn) {
  const navContainer = document.querySelector('.nav-container');

  if (!navContainer || !activeBtn) return;

  const containerWidth = navContainer.offsetWidth;
  const btnLeft = activeBtn.offsetLeft;
  const btnWidth = activeBtn.offsetWidth;

  const scrollLeft = btnLeft - (containerWidth / 2) + (btnWidth / 2);

  navContainer.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
}

// =========================
// Scroll Event (Debounced)
// =========================
let scrollTimeout;

window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(handleScroll, 50);
});

// =========================
// Click Scroll to Section
// =========================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  isManualScrolling = true;

  const navBtns = document.querySelectorAll('.nav-item');
  const sectionIndex = sections.indexOf(id);

  navBtns.forEach(btn => btn.classList.remove('active'));

  if (sectionIndex !== -1 && navBtns[sectionIndex]) {
    navBtns[sectionIndex].classList.add('active');
    scrollNavToActive(navBtns[sectionIndex]);
  }

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  setTimeout(() => {
    isManualScrolling = false;
  }, 800);
}

// ===== ROOM FILTER =====
function filterRooms(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.room-card').forEach(card => {
    card.style.display = (type === 'all' || card.dataset.type === type) ? 'flex' : 'none';
  });
}

// ===== MODAL OVERLAY (class-based) =====
function openRoomModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
function openAmenitiesModal() {
  openRoomModal('amenities-modal');
}

// ===== READ MORE MODAL =====
function openReadMoreModal() {
  openRoomModal('readmore-modal');
}
function closeReadMoreModal() {
  closeModal('readmore-modal');
}

// ===== HOTEL DETAILS MODAL (iframe) =====
function openHotelDetailsModal() {
  const modal = document.getElementById('hotelDetailsModal');
  const iframe = document.getElementById('hotelDetailsFrame');
  if (modal && iframe) {
    iframe.src = 's.html';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}
function closeHotelDetailsModal() {
  const modal = document.getElementById('hotelDetailsModal');
  const iframe = document.getElementById('hotelDetailsFrame');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (iframe) iframe.src = '';
}

// ===== ESC KEY: close all modals =====
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeDatePicker();
    closeGuestSelector();
    closeHotelDetailsModal();
    closeReadMoreModal();
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

// ===== HOTEL TABS =====
function initHotelTabs() {
  const tabButtons = document.querySelectorAll('.hotel-tab-btn');
  const tabContents = document.querySelectorAll('.hotel-tab-content');
  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const tabName = this.getAttribute('data-tab');
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      this.classList.add('active');
      const targetContent = document.getElementById(tabName + '-content');
      if (targetContent) targetContent.classList.add('active');
    });
  });
}

// ===== ROOM IMAGE SLIDERS =====
const roomImages = {
  room1: ['Assets/room1.jpeg', 'Assets/room1(1).jpeg', 'Assets/room1(2).jpeg', 'Assets/room1(3).jpeg', 'Assets/room1(4).jpeg', 'Assets/room1(5).jpeg', 'Assets/room1(6).jpeg', 'Assets/room1(7).jpeg', 'Assets/room1(8).jpeg'],
  room2: ['Assets/room7.jpeg', 'Assets/room1(1).jpeg', 'Assets/room2.jpeg', 'Assets/room1(3).jpeg', 'Assets/room1(4).jpeg', 'Assets/room1(6).jpeg', 'Assets/room1(7).jpeg', 'Assets/room1(8).jpeg'],
  room3: ['Assets/room7.jpeg', 'Assets/room7(1).jpeg', 'Assets/room7(2).jpeg'],
};
const roomIndexes = { room1: 0, room2: 0, room3: 0 };

function modalSlide(room, dir) {
  const imgs = roomImages[room];
  roomIndexes[room] = (roomIndexes[room] + dir + imgs.length) % imgs.length;
  const imgEl = document.getElementById(room + '-img');
  if (imgEl) imgEl.src = imgs[roomIndexes[room]];
}

// ===== AMENITIES SLIDER =====
const amenImages = [
  "Assets/aminities1.jpeg",
  "Assets/aminities2.jpeg",
  "Assets/aminities3.jpeg",
  "Assets/aminities4.jpeg",
  "Assets/aminities5.jpeg"
];
let amenIndex = 0;

function buildAmenIndicators() {
  const cont = document.getElementById('amen-indicators');
  if (!cont) return;
  cont.innerHTML = '';
  amenImages.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'amenities-indicator' + (i === 0 ? ' active' : '');
    btn.onclick = () => setAmenSlide(i);
    cont.appendChild(btn);
  });
}
function setAmenSlide(i) {
  amenIndex = i;
  const img = document.getElementById('amenities-slide-img');
  if (img) img.src = amenImages[amenIndex];
  document.querySelectorAll('.amenities-indicator').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === amenIndex);
  });
}
function amenSlide(dir) {
  setAmenSlide((amenIndex + dir + amenImages.length) % amenImages.length);
}
setInterval(() => amenSlide(1), 4000);

// ===== CONTACT FORM =====
function handleFormSubmit(e) {
  e.preventDefault();
  alert('Message sent! We will respond within 24 hours.');
}

function bookNow() {
  window.open('https://bookingengine.stayflexi.com/?hotel_id=35780', '_blank');
}

// ===== MAGNOLIA POPUP (legacy, kept for compatibility) =====
function openMagnoliaDetails() {
  const el = document.getElementById('magnoliaDetailsPopup');
  if (el) {
    el.classList.add('magnolia-active');
    document.body.style.overflow = 'hidden';
  }
}
function closeMagnoliaDetails() {
  const el = document.getElementById('magnoliaDetailsPopup');
  if (el) {
    el.classList.remove('magnolia-active');
    document.body.style.overflow = 'auto';
  }
}

// Accessibility Widget JavaScript
let isAccessibilityOpen = false;
let activeSettings = {
  removeImages: false,
  disableAnimations: false,
  monoChrome: false,
  grayScale: false,
  sepia: false,
  highContrast: false,
  invertColors: false,
  wcagContrast: false,
  boldFonts: false
};

let fontSizeLevel = 0;
let zoomLevel = 0;
let lineHeightLevel = 0;

function toggleA11yPanel() {
  isAccessibilityOpen = !isAccessibilityOpen;
  const widget = document.getElementById('accessibilityWidget');

  if (isAccessibilityOpen) {
    widget.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } else {
    widget.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function applyAccessibility(action) {
  const body = document.body;

  switch (action) {
    case 'remove-images':
      activeSettings.removeImages = !activeSettings.removeImages;
      body.classList.toggle('remove-images', activeSettings.removeImages);
      updateButtonState(action, activeSettings.removeImages);
      break;

    case 'disable-animations':
      activeSettings.disableAnimations = !activeSettings.disableAnimations;
      body.classList.toggle('disable-animations', activeSettings.disableAnimations);
      updateButtonState(action, activeSettings.disableAnimations);
      break;

    case 'mono-chrome':
      removeColorFilters();
      activeSettings.monoChrome = !activeSettings.monoChrome;
      body.classList.toggle('mono-chrome', activeSettings.monoChrome);
      updateButtonState(action, activeSettings.monoChrome);
      updateColorButtonStates();
      break;

    case 'gray-scale':
      removeColorFilters();
      activeSettings.grayScale = !activeSettings.grayScale;
      body.classList.toggle('gray-scale', activeSettings.grayScale);
      updateButtonState(action, activeSettings.grayScale);
      updateColorButtonStates();
      break;

    case 'sepia':
      removeColorFilters();
      activeSettings.sepia = !activeSettings.sepia;
      body.classList.toggle('sepia', activeSettings.sepia);
      updateButtonState(action, activeSettings.sepia);
      updateColorButtonStates();
      break;

    case 'high-contrast':
      removeColorFilters();
      activeSettings.highContrast = !activeSettings.highContrast;
      body.classList.toggle('high-contrast', activeSettings.highContrast);
      updateButtonState(action, activeSettings.highContrast);
      updateColorButtonStates();
      break;

    case 'invert-colors':
      removeColorFilters();
      activeSettings.invertColors = !activeSettings.invertColors;
      body.classList.toggle('invert-colors', activeSettings.invertColors);
      updateButtonState(action, activeSettings.invertColors);
      updateColorButtonStates();
      break;

    case 'wcag-contrast':
      removeColorFilters();
      activeSettings.wcagContrast = !activeSettings.wcagContrast;
      body.classList.toggle('wcag-contrast', activeSettings.wcagContrast);
      updateButtonState(action, activeSettings.wcagContrast);
      updateColorButtonStates();
      break;

    case 'bold-fonts':
      activeSettings.boldFonts = !activeSettings.boldFonts;
      body.classList.toggle('bold-fonts', activeSettings.boldFonts);
      updateButtonState(action, activeSettings.boldFonts);
      break;

    case 'increase-font':
      fontSizeLevel = Math.min(fontSizeLevel + 1, 5);
      applyFontSize();
      break;

    case 'decrease-font':
      fontSizeLevel = Math.max(fontSizeLevel - 1, -3);
      applyFontSize();
      break;

    case 'reset-font':
      fontSizeLevel = 0;
      applyFontSize();
      break;

    case 'zoom-increase':
      zoomLevel = Math.min(zoomLevel + 1, 5);
      applyZoom();
      break;

    case 'zoom-decrease':
      zoomLevel = Math.max(zoomLevel - 1, -3);
      applyZoom();
      break;

    case 'increase-line-height':
      lineHeightLevel = Math.min(lineHeightLevel + 1, 5);
      applyLineHeight();
      break;

    case 'decrease-line-height':
      lineHeightLevel = Math.max(lineHeightLevel - 1, -2);
      applyLineHeight();
      break;

    case 'reset-all':
      resetAllSettings();
      break;

    default:
      console.log('Accessibility feature not implemented:', action);
  }

  // Save settings to localStorage
  saveSettings();
}

function removeColorFilters() {
  const body = document.body;
  body.classList.remove('mono-chrome', 'gray-scale', 'sepia', 'high-contrast', 'invert-colors', 'wcag-contrast');

  // Reset all color filter states
  activeSettings.monoChrome = false;
  activeSettings.grayScale = false;
  activeSettings.sepia = false;
  activeSettings.highContrast = false;
  activeSettings.invertColors = false;
  activeSettings.wcagContrast = false;
}

function updateColorButtonStates() {
  const colorActions = ['mono-chrome', 'gray-scale', 'sepia', 'high-contrast', 'invert-colors', 'wcag-contrast'];
  colorActions.forEach(action => {
    const isActive = activeSettings[action.replace('-', '')];
    updateButtonState(action, isActive);
  });
}

function updateButtonState(action, isActive) {
  const button = document.querySelector(`[onclick="applyAccessibility('${action}')"]`);
  if (button) {
    button.classList.toggle('active', isActive);
  }
}

function applyFontSize() {
  const body = document.body;
  const percentage = 100 + (fontSizeLevel * 20); // 20% increments
  body.style.fontSize = `${percentage}%`;
}

function applyZoom() {
  const body = document.body;
  const scale = 1 + (zoomLevel * 0.1); // 10% increments
  body.style.zoom = scale;
}

function applyLineHeight() {
  const body = document.body;
  const lineHeight = 1.5 + (lineHeightLevel * 0.2); // 0.2 increments from base 1.5
  body.style.lineHeight = lineHeight;
}

function resetAllSettings() {
  const body = document.body;

  // Remove all accessibility classes
  body.classList.remove(
    'remove-images', 'disable-animations', 'mono-chrome', 'gray-scale',
    'sepia', 'high-contrast', 'invert-colors', 'wcag-contrast', 'bold-fonts'
  );

  // Reset all styles
  body.style.fontSize = '';
  body.style.zoom = '';
  body.style.lineHeight = '';

  // Reset all settings
  activeSettings = {
    removeImages: false,
    disableAnimations: false,
    monoChrome: false,
    grayScale: false,
    sepia: false,
    highContrast: false,
    invertColors: false,
    wcagContrast: false,
    boldFonts: false
  };

  // Reset levels
  fontSizeLevel = 0;
  zoomLevel = 0;
  lineHeightLevel = 0;

  // Update all button states
  updateAllButtonStates();

  // Clear localStorage
  localStorage.removeItem('accessibilitySettings');
}

function updateAllButtonStates() {
  // Remove active class from all buttons
  const allButtons = document.querySelectorAll('.widget-btn');
  allButtons.forEach(button => {
    button.classList.remove('active');
  });
}

function saveSettings() {
  const settings = {
    activeSettings: activeSettings,
    fontSizeLevel: fontSizeLevel,
    zoomLevel: zoomLevel,
    lineHeightLevel: lineHeightLevel
  };
  localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
}

function loadSettings() {
  const saved = localStorage.getItem('accessibilitySettings');
  if (saved) {
    try {
      const settings = JSON.parse(saved);
      activeSettings = settings.activeSettings || activeSettings;
      fontSizeLevel = settings.fontSizeLevel || 0;
      zoomLevel = settings.zoomLevel || 0;
      lineHeightLevel = settings.lineHeightLevel || 0;

      // Apply saved settings
      applyAllSettings();
    } catch (e) {
      console.error('Error loading accessibility settings:', e);
    }
  }
}

function applyAllSettings() {
  const body = document.body;

  // Apply all active settings
  Object.keys(activeSettings).forEach(key => {
    if (activeSettings[key]) {
      const className = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      body.classList.add(className);
    }
  });

  // Apply font size, zoom, and line height
  applyFontSize();
  applyZoom();
  applyLineHeight();

  // Update button states
  setTimeout(() => {
    Object.keys(activeSettings).forEach(key => {
      if (activeSettings[key]) {
        const action = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        updateButtonState(action, true);
      }
    });
  }, 100);
}

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
  // Shift + A to toggle accessibility panel
  if (e.shiftKey && e.key === 'A') {
    e.preventDefault();
    toggleA11yPanel();
  }

  // ESC to close accessibility panel
  if (e.key === 'Escape' && isAccessibilityOpen) {
    e.preventDefault();
    toggleA11yPanel();
  }
});

// Section collapse/expand functionality
document.addEventListener('DOMContentLoaded', function () {
  // Load saved settings on page load
  loadSettings();

  // Add click handlers for section headers
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const section = this.parentElement;
      const content = section.querySelector('.widget-grid');
      const icon = this.querySelector('.expand-icon');

      if (content.style.display === 'none') {
        content.style.display = 'grid';
        icon.textContent = '▼';
        this.classList.remove('collapsed');
      } else {
        content.style.display = 'none';
        icon.textContent = '▶';
        this.classList.add('collapsed');
      }
    });
  });
});

// Close widget when clicking outside
document.addEventListener('click', function (e) {
  const widget = document.getElementById('accessibilityWidget');
  const fab = document.querySelector('.accessibility-fab');

  if (isAccessibilityOpen &&
    !widget.contains(e.target) &&
    !fab.contains(e.target)) {
    toggleA11yPanel();
  }
});

// Prevent widget content clicks from closing the widget
document.addEventListener('DOMContentLoaded', function () {
  const widget = document.getElementById('accessibilityWidget');
  if (widget) {
    widget.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});
