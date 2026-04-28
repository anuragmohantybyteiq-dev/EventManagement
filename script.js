// ===========================
// DATA
// ===========================

const eventsData = [
  {
    id: 1,
    title: "The Laurent Garden Wedding",
    category: "Wedding",
    description: "An intimate garden ceremony adorned with cascading florals, ambient candlelight, and a bespoke dining experience under the stars.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
      "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80",
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600&q=80"
    ],
    services: ["Floral Decoration", "Luxury Catering", "Photography & Videography", "Sound & Lighting"],
    fullDescription: "The Laurent Garden Wedding was a breathtaking celebration of love, meticulously crafted over six months of planning. Set against the backdrop of a sprawling estate garden, we transformed the outdoor space into an ethereal wonderland. Thousands of white roses, pampas grass, and eucalyptus garlands draped every arch and table. The al fresco dinner featured a curated 5-course menu with seasonal, locally sourced ingredients. As dusk fell, the garden glowed with warm Edison lights and floating candles on the ornamental pond.",
    color: "#F2D4C8"
  },
  {
    id: 2,
    title: "Nexus Annual Corporate Gala",
    category: "Corporate",
    description: "A sophisticated corporate gala for 400 guests featuring award ceremonies, keynote presentations, and a champagne reception.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
    ],
    services: ["Stage & AV Setup", "Gourmet Catering", "Award Trophies", "Event Photography"],
    fullDescription: "The Nexus Annual Corporate Gala brought together 400 of the company's top executives, clients, and partners for an unforgettable evening of celebration and recognition. We designed the ballroom with a sleek black-and-gold palette that exuded professionalism and prestige. The evening featured a cocktail reception, a three-course gala dinner, and the highly anticipated awards ceremony. Our technical team managed seamless AV production for live streaming the event to remote teams across three continents.",
    color: "#C9A96E"
  },
  {
    id: 3,
    title: "Isabelle's 30th Birthday Soirée",
    category: "Birthday",
    description: "A glamorous 30th birthday celebration with a Gatsby-inspired theme, jazz band, and custom cocktail experience.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80",
      "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&q=80",
      "https://images.unsplash.com/photo-1597528380439-7df11a2b9529?w=600&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80"
    ],
    services: ["Themed Decoration", "Custom Cake", "Live Entertainment", "Photo Booth"],
    fullDescription: "Isabelle's 30th birthday soirée was a dazzling Great Gatsby affair that transported guests back to the roaring twenties. We transformed a city-center venue with art deco installations, feather centrepieces, and cascading gold balloon arches. A live jazz quartet set the mood as guests sipped on bespoke cocktails from our roving mixologist bar. The highlight of the evening was the unveiling of Isabelle's five-tier custom birthday cake, adorned with edible gold and hand-painted florals.",
    color: "#D4876B"
  },
  {
    id: 4,
    title: "The Harrington Estate Private Dinner",
    category: "Private",
    description: "An exclusive private dining experience for 12 distinguished guests in the Harrington family estate's historic hall.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554679665-f5537f187268?w=600&q=80",
      "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
      "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?w=600&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80"
    ],
    services: ["Fine Dining Catering", "Butler Service", "Floral Table Design", "Wine Pairing"],
    fullDescription: "The Harrington Estate Private Dinner was the epitome of refined elegance — an intimate gathering of twelve distinguished guests in the estate's centuries-old banquet hall. We curated every detail with exquisite care: hand-pressed linen tablecloths, sterling silver cutlery, and a breathtaking floral runner of ivory peonies and garden roses. Our executive chef crafted a personalised seven-course tasting menu, each course paired with a rare vintage from the family's private cellar.",
    color: "#A6604A"
  },
  {
    id: 5,
    title: "Bloom Spring Bridal Showcase",
    category: "Wedding",
    description: "A seasonal bridal showcase celebrating the beauty of spring with pastel florals, bespoke table settings, and a live harpist.",
    image: "https://images.unsplash.com/photo-1561494563-61007cbe4f54?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80",
      "https://images.unsplash.com/photo-1609017909889-d7b582c072f7?w=600&q=80",
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&q=80",
      "https://images.unsplash.com/photo-1518231025591-eee9b18d9dc5?w=600&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80"
    ],
    services: ["Floral Design", "Styling & Décor", "Photography", "Catering Samples"],
    fullDescription: "Our annual Bloom Spring Bridal Showcase was an invitation for engaged couples to step into their dream wedding. We built immersive styled vignettes across a grand historic venue, each room showcasing a different aesthetic — from whimsical bohemian to sleek modern minimalism. Over 200 couples attended, consulting with our team of wedding planners, florists, caterers, and photographers. A live harpist played throughout the afternoon, and guests were treated to cake tastings and champagne.",
    color: "#F2D4C8"
  },
  {
    id: 6,
    title: "TechSummit 2024 Conference",
    category: "Corporate",
    description: "A two-day technology conference for 800 professionals featuring panel discussions, product launches, and networking dinners.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
      "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=600&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80"
    ],
    services: ["Venue Management", "AV & Streaming", "Delegate Catering", "Conference Photography"],
    fullDescription: "TechSummit 2024 was one of the largest technology conferences we have had the privilege of managing. Over two full days, 800 industry professionals gathered to hear from 30+ speakers, attend hands-on workshops, and preview the latest innovations from 50 exhibitors. Our logistics team coordinated every moving part — from registration and delegate badges to stage management, live streaming infrastructure, and a closing-night networking dinner for 600.",
    color: "#C9A96E"
  }
];

const reviewsData = [
  {
    id: 1,
    name: "Amelia & James Thornton",
    role: "Wedding Clients",
    rating: 5,
    text: "Lumière Events turned our wedding into the most magical day of our lives. Every single detail was thought of before we even asked. Our guests are still talking about the floral arrangements months later.",
    initial: "A"
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Head of Events, Nexus Corp",
    rating: 5,
    text: "For our annual gala of 400 guests, the Lumière team delivered flawlessly. Their professionalism and creative vision elevated our brand. We have already booked them for next year's event.",
    initial: "S"
  },
  {
    id: 3,
    name: "David & Priya Okonkwo",
    role: "Private Dining Clients",
    rating: 5,
    text: "The private dinner they organized for us was extraordinary. From the table styling to the chef's menu — every element felt deeply personal and considered. An unforgettable evening.",
    initial: "D"
  },
  {
    id: 4,
    name: "Charlotte Beaumont",
    role: "Birthday Celebration Client",
    rating: 5,
    text: "I had a very specific vision for my 40th, and Lumière executed it beyond perfection. The Gatsby theme, the jazz band, the cocktails — it felt like stepping into a film. Pure magic.",
    initial: "C"
  },
  {
    id: 5,
    name: "Marcus & Elena Rossi",
    role: "Wedding Clients",
    rating: 5,
    text: "From the first consultation to the very last dance, Lumière made us feel like royalty. The coordination was seamless and the creativity was outstanding. Worth every single penny.",
    initial: "M"
  }
];

// ===========================
// NAVBAR
// ===========================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.querySelector('.mobile-menu-close');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (navbar.classList.contains('always-scrolled')) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileClose) {
      mobileClose.addEventListener('click', closeMobileMenu);
    }

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===========================
// TESTIMONIAL SLIDER
// ===========================
function initTestimonialSlider() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');

  if (!track) return;

  // Render testimonials
  track.innerHTML = reviewsData.map(review => `
    <div class="testimonial-card fade-in">
      <div class="testimonial-stars">
        ${'<span class="star">★</span>'.repeat(review.rating)}
      </div>
      <p class="testimonial-text">"${review.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${review.initial}</div>
        <div class="author-info">
          <strong>${review.name}</strong>
          <span>${review.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  let currentIndex = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  
  function getVisibleCards() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    const visible = getVisibleCards();
    return Math.max(0, Math.ceil(reviewsData.length / visible) - 1);
  }

  // Render dots
  if (dotsContainer) {
    for (let i = 0; i <= getMaxIndex(); i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function goToSlide(index) {
    const visible = getVisibleCards();
    const maxIndex = getMaxIndex();
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    
    const cardWidth = cards[0].offsetWidth + 32; // card width + gap
    
    // Calculate how many cards to shift.
    // If it's the last page, we shift just enough to show the very last card, preserving the full row (no gaps!)
    let shiftAmount = currentIndex * visible;
    const maxPossibleShift = Math.max(0, reviewsData.length - visible);
    if (shiftAmount > maxPossibleShift) {
        shiftAmount = maxPossibleShift;
    }
    
    track.style.transform = `translateX(-${shiftAmount * cardWidth}px)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Auto-play
  setInterval(() => {
    const maxIndex = getMaxIndex();
    goToSlide(currentIndex < maxIndex ? currentIndex + 1 : 0);
  }, 5000);
}

// ===========================
// FEATURED EVENTS (Home Page)
// ===========================
function renderFeaturedEvents() {
  const container = document.getElementById('featuredEvents');
  if (!container) return;

  const featured = eventsData.slice(0, 3);
  container.innerHTML = featured.map(event => `
    <div class="event-card fade-in" onclick="window.location.href='event-details.html?id=${event.id}'">
      <div class="event-card-image">
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <span class="event-card-badge">${event.category}</span>
      </div>
      <div class="event-card-body">
        <h4>${event.title}</h4>
        <p>${event.description}</p>
        <div class="event-card-footer">
          <div class="event-meta">
            <span>✦</span>
            <span>Curated Experience</span>
          </div>
          <a href="event-details.html?id=${event.id}" class="view-link">View Details →</a>
        </div>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

// ===========================
// ALL EVENTS (events.html)
// ===========================
function renderAllEvents(filter = 'All') {
  const container = document.getElementById('allEvents');
  if (!container) return;

  const filtered = filter === 'All'
    ? eventsData
    : eventsData.filter(e => e.category === filter);

  container.innerHTML = filtered.map((event, i) => `
    <div class="event-card fade-in fade-in-delay-${(i % 3) + 1}" onclick="window.location.href='event-details.html?id=${event.id}'">
      <div class="event-card-image">
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <span class="event-card-badge">${event.category}</span>
      </div>
      <div class="event-card-body">
        <h4>${event.title}</h4>
        <p>${event.description}</p>
        <div class="event-card-footer">
          <div class="event-meta">
            <span>✦</span>
            <span>Signature Event</span>
          </div>
          <a href="event-details.html?id=${event.id}" class="view-link">View Details →</a>
        </div>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

function initEventsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllEvents(btn.dataset.filter);
    });
  });

  renderAllEvents('All');
}

// ===========================
// EVENT DETAILS PAGE
// ===========================
function renderEventDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const event = eventsData.find(e => e.id === id) || eventsData[0];

  // Hero
  const heroImg = document.getElementById('detailHeroImg');
  const heroTitle = document.getElementById('detailHeroTitle');
  const heroBadge = document.getElementById('detailHeroBadge');
  if (heroImg) heroImg.src = event.image;
  if (heroTitle) heroTitle.textContent = event.title;
  if (heroBadge) heroBadge.textContent = event.category;

  // Description
  const descEl = document.getElementById('detailDescription');
  if (descEl) descEl.textContent = event.fullDescription;

  const titleEl = document.getElementById('detailTitle');
  if (titleEl) titleEl.textContent = event.title;

  // Gallery
  const galleryEl = document.getElementById('detailGallery');
  if (galleryEl) {
    galleryEl.innerHTML = event.gallery.map(img => `
      <div class="gallery-img">
        <img src="${img}" alt="Event gallery" loading="lazy">
      </div>
    `).join('');
  }

  // Services
  const servicesEl = document.getElementById('detailServices');
  if (servicesEl) {
    servicesEl.innerHTML = event.services.map(s => `
      <div class="service-item">
        <span class="service-icon">✦</span>
        <span>${s}</span>
      </div>
    `).join('');
  }

  // Populate related events
  const relatedEl = document.getElementById('relatedEvents');
  if (relatedEl) {
    const related = eventsData.filter(e => e.id !== event.id).slice(0, 3);
    relatedEl.innerHTML = related.map(e => `
      <div class="event-card fade-in" onclick="window.location.href='event-details.html?id=${e.id}'">
        <div class="event-card-image">
          <img src="${e.image}" alt="${e.title}" loading="lazy">
          <span class="event-card-badge">${e.category}</span>
        </div>
        <div class="event-card-body">
          <h4>${e.title}</h4>
          <p>${e.description.substring(0, 80)}...</p>
          <div class="event-card-footer">
            <div class="event-meta"><span>✦</span><span>Signature Event</span></div>
            <a href="event-details.html?id=${e.id}" class="view-link">View →</a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ===========================
// CONTACT FORM
// ===========================
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Use Web3Forms to send the email without templates
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    
    // ADDED: Include access key and default subject programmatically
    object.access_key = "e5eadad5-92a3-4f74-839f-75dbbb4a4c7f";
    object.subject = "New Contact Form Submission";
    
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let jsonRes = await response.json();
        if (response.status === 200) {
            const successMsg = document.getElementById('successMessage');
            if (successMsg) {
                successMsg.classList.add('show');
                setTimeout(() => successMsg.classList.remove('show'), 5000);
            }
            form.reset();
        } else {
            alert('Failed to send message: ' + jsonRes.message);
        }
    })
    .catch(error => {
        console.error('Web3Forms Error:', error);
        alert('Something went wrong while sending the message. Please try again.');
    })
    .finally(() => {
        btn.textContent = original;
        btn.disabled = false;
    });
  });
}

// ===========================
// DASHBOARD
// ===========================
function initDashboard() {
  const tableBody = document.getElementById('inquiriesTableBody');
  if (!tableBody) return;

  const sampleInquiries = [
    { name: "Priya Sharma", event: "Wedding", date: "12 Apr 2026", status: "confirmed" },
    { name: "Rohan Mehta", event: "Corporate", date: "20 Mar 2026", status: "completed" },
    { name: "Ananya Kapoor", event: "Birthday", date: "05 May 2026", status: "pending" },
    { name: "Vikram & Nisha Gupta", event: "Private", date: "28 May 2026", status: "confirmed" },
    { name: "Aditya Patel", event: "Corporate", date: "15 Jun 2026", status: "pending" }
  ];

  tableBody.innerHTML = sampleInquiries.map((item, i) => `
    <tr>
      <td>${String(i + 1).padStart(3, '0')}</td>
      <td>${item.name}</td>
      <td>${item.event}</td>
      <td>${item.date}</td>
      <td><span class="status-badge status-${item.status}">${item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span></td>
      <td><a href="contact.html" style="color: var(--rose); font-size: 0.82rem;">View</a></td>
    </tr>
  `).join('');
}

// ===========================
// COUNTER ANIMATION
// ===========================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const increment = target / 60;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + suffix;
        }, 20);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ===========================
// SECURITY: DISABLE INSPECT
// ===========================
function initDisableInspect() {
  // Disable right-click menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // Disable keyboard shortcuts for DevTools and Source Code
  document.addEventListener('keydown', (e) => {
    // F12 key
    if (e.key === 'F12') {
      e.preventDefault();
    }
    // Ctrl + Shift + I (Inspect) or Ctrl + Shift + J (Console) or Ctrl + Shift + C (Element Inspector)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
    }
    // Ctrl + U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
    }
  });
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initTestimonialSlider();
  renderFeaturedEvents();
  initEventsFilter();
  renderEventDetails();
  initContactForm();
  initDashboard();
  initCounters();
  initDisableInspect();
});
