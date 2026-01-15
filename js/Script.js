// Navigation Toggle for Mobile
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ==================== Image Slider ====================
class ImageSlider {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.dotsContainer = document.getElementById("sliderDots");
    this.currentSlide = 0;
    this.slideInterval = null;

    this.init();
  }

  init() {
    // Create dots
    this.createDots();

    // Set up event listeners
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Add keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // Add touch/swipe support
    this.addSwipeSupport();

    // Start auto-play
    this.startAutoPlay();

    // Pause on hover
    const heroSlider = document.querySelector(".hero-slider");
    heroSlider.addEventListener("mouseenter", () => this.stopAutoPlay());
    heroSlider.addEventListener("mouseleave", () => this.startAutoPlay());
  }

  createDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("slider-dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => this.goToSlide(index));
      this.dotsContainer.appendChild(dot);
    });
    this.dots = document.querySelectorAll(".slider-dot");
  }

  goToSlide(n) {
    this.slides[this.currentSlide].classList.remove("active");
    this.dots[this.currentSlide].classList.remove("active");

    this.currentSlide = n;
    if (this.currentSlide >= this.slides.length) this.currentSlide = 0;
    if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1;

    this.slides[this.currentSlide].classList.add("active");
    this.dots[this.currentSlide].classList.add("active");
  }

  nextSlide() {
    this.goToSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.goToSlide(this.currentSlide - 1);
  }

  startAutoPlay() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoPlay() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  addSwipeSupport() {
    const slider = document.querySelector(".hero-slider");
    let startX = 0;
    let endX = 0;

    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", () => {
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });
  }
}
// ==================================================

// Exchange Rates - Mock Data (실제 API 연동 시 교체)
// This section is now replaced with gallery categories
// const exchangeRates = { ... }

// Currency Exchange Update
function updateCurrencyRates() {
  // Mock data - 실제로는 API에서 가져옴
  const rates = {
    usd: { rate: 1320.5, change: 5.3, percent: 0.4 },
    eur: { rate: 1450.8, change: 8.2, percent: 0.57 },
    jpy: { rate: 900.25, change: -2.1, percent: -0.23 },
    cny: { rate: 185.6, change: 1.5, percent: 0.82 },
  };

  // Update USD
  if (document.getElementById("usd-rate")) {
    document.getElementById(
      "usd-rate"
    ).textContent = `₩${rates.usd.rate.toFixed(2)}`;
    document.getElementById("usd-change").textContent = `${
      rates.usd.change > 0 ? "▲" : "▼"
    } ${Math.abs(rates.usd.change).toFixed(2)} (${rates.usd.percent}%)`;
    document.getElementById("usd-change").className = `currency-change ${
      rates.usd.change > 0 ? "positive" : "negative"
    }`;
  }

  // Update EUR
  if (document.getElementById("eur-rate")) {
    document.getElementById(
      "eur-rate"
    ).textContent = `₩${rates.eur.rate.toFixed(2)}`;
    document.getElementById("eur-change").textContent = `${
      rates.eur.change > 0 ? "▲" : "▼"
    } ${Math.abs(rates.eur.change).toFixed(2)} (${rates.eur.percent}%)`;
    document.getElementById("eur-change").className = `currency-change ${
      rates.eur.change > 0 ? "positive" : "negative"
    }`;
  }

  // Update JPY
  if (document.getElementById("jpy-rate")) {
    document.getElementById(
      "jpy-rate"
    ).textContent = `₩${rates.jpy.rate.toFixed(2)}`;
    document.getElementById("jpy-change").textContent = `${
      rates.jpy.change > 0 ? "▲" : "▼"
    } ${Math.abs(rates.jpy.change).toFixed(2)} (${Math.abs(
      rates.jpy.percent
    )}%)`;
    document.getElementById("jpy-change").className = `currency-change ${
      rates.jpy.change > 0 ? "positive" : "negative"
    }`;
  }

  // Update CNY
  if (document.getElementById("cny-rate")) {
    document.getElementById(
      "cny-rate"
    ).textContent = `₩${rates.cny.rate.toFixed(2)}`;
    document.getElementById("cny-change").textContent = `${
      rates.cny.change > 0 ? "▲" : "▼"
    } ${Math.abs(rates.cny.change).toFixed(2)} (${rates.cny.percent}%)`;
    document.getElementById("cny-change").className = `currency-change ${
      rates.cny.change > 0 ? "positive" : "negative"
    }`;
  }

  // Update time
  if (document.getElementById("update-time")) {
    const now = new Date();
    const timeString = now.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    document.getElementById("update-time").textContent = timeString;
  }
}

// World Cities Time and Weather
const cities = [
  { id: "nyc", timezone: "America/New_York", name: "New York" },
  { id: "fra", timezone: "Europe/Paris", name: "Frankfurt" },
  { id: "tyo", timezone: "Asia/Tokyo", name: "Tokyo" },
  { id: "pek", timezone: "Asia/Shanghai", name: "Beijing" },
];

function updateCityTime(cityId, timezone) {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const timeElement = document.getElementById(`${cityId}-time`);
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

function updateCityWeather(cityId) {
  // Mock weather data (실제 API 연동 시 교체)
  const weatherOptions = ["☀️ 맑음", "⛅ 구름", "🌧️ 비", "❄️ 눈", "🌤️ 화창"];
  const temperatures = ["15°C", "18°C", "22°C", "25°C", "28°C", "12°C"];

  const randomWeather =
    weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
  const randomTemp =
    temperatures[Math.floor(Math.random() * temperatures.length)];

  const weatherElement = document.getElementById(`${cityId}-weather`);
  if (weatherElement) {
    weatherElement.textContent = `${randomWeather} ${randomTemp}`;
  }
}

function updateAllCities() {
  cities.forEach((city) => {
    updateCityTime(city.id, city.timezone);
    updateCityWeather(city.id);
  });
}

// Date Picker - Set minimum date to today
function setupDatePickers() {
  const today = new Date().toISOString().split("T")[0];
  const departureInput = document.getElementById("departure");
  const arrivalInput = document.getElementById("arrival");

  if (departureInput) {
    departureInput.min = today;
    departureInput.addEventListener("change", (e) => {
      if (arrivalInput) {
        arrivalInput.min = e.target.value;
      }
    });
  }

  if (arrivalInput) {
    arrivalInput.min = today;
  }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Hero Section Animation
function animateHero() {
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroButton = document.querySelector(".btn-primary");

  // Animations are now handled by CSS
}

// Add animation keyframes dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: scale(1.1);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Card Hover Effects
function setupCardEffects() {
  const cards = document.querySelectorAll(
    ".rate-card, .city-card, .planner-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });
  });
}

// Travel Planner Button Handler
function setupTravelPlanner() {
  const plannerButton = document.querySelector(".btn-secondary");

  if (plannerButton) {
    plannerButton.addEventListener("click", () => {
      const departure = document.getElementById("departure").value;
      const arrival = document.getElementById("arrival").value;

      if (departure && arrival) {
        const departDate = new Date(departure);
        const arrivalDate = new Date(arrival);
        const days = Math.ceil(
          (arrivalDate - departDate) / (1000 * 60 * 60 * 24)
        );

        if (days > 0) {
          alert(
            `🌍 여행 계획이 시작되었습니다!\n\n출발: ${departure}\n도착: ${arrival}\n여행 기간: ${days}일`
          );
        } else {
          alert("⚠️ 도착 날짜는 출발 날짜 이후여야 합니다.");
        }
      } else {
        alert("⚠️ 출발일과 도착일을 모두 선택해주세요.");
      }
    });
  }
}

// Travel Tips Accordion
function setupTravelTips() {
  const tipHeaders = document.querySelectorAll(".tip-header");

  tipHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const tipItem = header.parentElement;
      const isActive = tipItem.classList.contains("active");

      // Close all other tips
      document.querySelectorAll(".tip-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Toggle current tip
      if (!isActive) {
        tipItem.classList.add("active");
      }
    });
  });
}

// Partners Logo Animation on Scroll
function setupPartnersAnimation() {
  const partnerLogos = document.querySelectorAll(".partner-logo");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);
        }
      });
    },
    { threshold: 0.1 }
  );

  partnerLogos.forEach((logo) => {
    logo.style.opacity = "0";
    logo.style.transform = "translateY(30px)";
    logo.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(logo);
  });
}

// Gallery Category Cards Click Handler
function setupGalleryCards() {
  const rateCards = document.querySelectorAll(".rate-card");

  rateCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.querySelector("h3").textContent;
      alert(
        `🎨 "${category}" 카테고리 갤러리를 탐색합니다!\n\n(실제 구현 시 해당 카테고리 페이지로 이동합니다)`
      );
      // 실제 구현 시: window.location.href = `/gallery?category=${category}`;
    });
  });
}

// Get Started Button Handler
function setupGetStarted() {
  // Search functionality removed as we now have hero search
}

// Hero Search Functionality
function setupHeroSearch() {
  const searchTabs = document.querySelectorAll(".search-tab");
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.getElementById("heroSearch");

  // Tab switching
  searchTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      searchTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const tabType = tab.dataset.tab;
      let placeholder = "";

      switch (tabType) {
        case "all":
          placeholder = "여행지, 출갤러리, 호텔 등";
          break;
        case "hotel":
          placeholder = "호텔명, 지역명을 검색하세요";
          break;
        case "gallery":
          placeholder = "갤러리, 박물관을 검색하세요";
          break;
        case "restaurant":
          placeholder = "음식점, 카페를 검색하세요";
          break;
      }

      searchInput.placeholder = placeholder;
    });
  });

  // Search button click
  searchButton.addEventListener("click", performSearch);

  // Enter key press
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  function performSearch() {
    const query = searchInput.value.trim();
    const activeTab = document.querySelector(".search-tab.active");
    const tabType = activeTab ? activeTab.dataset.tab : "all";

    if (query) {
      alert(
        `🔍 검색 중...\n\n카테고리: ${getTabName(
          tabType
        )}\n검색어: ${query}\n\n(실제 검색 기능은 백엔드 연동 시 작동합니다)`
      );
      // 실제 구현 시: window.location.href = `/search?q=${query}&type=${tabType}`;
    } else {
      alert("⚠️ 검색어를 입력해주세요.");
      searchInput.focus();
    }
  }

  function getTabName(tabType) {
    const names = {
      all: "전체 검색",
      hotel: "호텔",
      gallery: "출갤러리",
      restaurant: "음식점",
    };
    return names[tabType] || "전체 검색";
  }
}

// Scroll Animation Observer
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".rate-card, .city-card, .planner-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize image slider
  const slider = new ImageSlider();

  // Update city times and weather
  updateAllCities();

  // Update currency rates
  updateCurrencyRates();

  // Update currency rates every 30 seconds
  setInterval(updateCurrencyRates, 30000);

  // Update times every minute
  setInterval(() => {
    cities.forEach((city) => {
      updateCityTime(city.id, city.timezone);
    });
  }, 60000);

  // Update weather every 10 minutes
  setInterval(() => {
    cities.forEach((city) => {
      updateCityWeather(city.id);
    });
  }, 600000);

  // Setup date pickers
  setupDatePickers();

  // Setup animations
  animateHero();
  setupCardEffects();
  setupScrollAnimations();

  // Setup button handlers
  setupTravelPlanner();
  setupGetStarted();

  // Setup Hero Search
  setupHeroSearch();

  // Setup Travel Tips accordion
  setupTravelTips();

  // Setup Partners animation
  setupPartnersAnimation();

  // Setup Gallery Cards interaction
  setupGalleryCards();

  console.log("🌍 WorldTripClub initialized successfully!");
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
    }
  }, 250);
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Sticky Search Bar on Scroll
function setupStickySearch() {
  const stickySearch = document.getElementById("stickySearch");
  const heroSection = document.querySelector(".hero");
  const stickySearchInput = document.getElementById("stickySearchInput");
  const stickySearchButton = document.querySelector(".sticky-search-button");

  if (!stickySearch || !heroSection) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateStickySearch() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollY = window.scrollY;

    // Show sticky search when scrolled past hero section
    if (scrollY > heroBottom) {
      stickySearch.classList.add("visible");
    } else {
      stickySearch.classList.remove("visible");
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateStickySearch);
      ticking = true;
    }
  });

  // Sticky search button functionality
  if (stickySearchButton) {
    stickySearchButton.addEventListener("click", () => {
      performStickySearch();
    });
  }

  // Sticky search input enter key
  if (stickySearchInput) {
    stickySearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performStickySearch();
      }
    });
  }

  function performStickySearch() {
    const query = stickySearchInput.value.trim();
    if (query) {
      alert(
        `🔍 검색 중...\n\n검색어: ${query}\n\n(실제 검색 기능은 백엔드 연동 시 작동합니다)`
      );
      // 실제 구현 시: window.location.href = `/search?q=${query}`;
    } else {
      alert("⚠️ 검색어를 입력해주세요.");
      stickySearchInput.focus();
    }
  }

  // Initial check
  updateStickySearch();
}

// Currency and Language Selector Handlers
function setupFooterSelectors() {
  const currencySelector = document.getElementById("currencySelector");
  const languageSelector = document.getElementById("languageSelector");

  if (currencySelector) {
    currencySelector.addEventListener("change", (e) => {
      const selectedCurrency = e.target.value;
      console.log(`Currency changed to: ${selectedCurrency}`);
      // 실제 구현 시: 통화 변경 로직 추가
      // updateCurrencyDisplay(selectedCurrency);
    });
  }

  if (languageSelector) {
    languageSelector.addEventListener("change", (e) => {
      const selectedLanguage = e.target.value;
      console.log(`Language changed to: ${selectedLanguage}`);
      // 실제 구현 시: 언어 변경 로직 추가
      // changeLanguage(selectedLanguage);
    });
  }
}

// Initialize sticky search and footer selectors
document.addEventListener("DOMContentLoaded", () => {
  setupStickySearch();
  setupFooterSelectors();
});
