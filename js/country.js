// Country Information Data
const countryData = {
  asia: {
    japan: {
      name: "일본",
      capital: "도쿄",
      language: "일본어",
      currency: "엔 (JPY)",
      timezone: "Asia/Tokyo",
      embassy: "주일대한민국대사관 (도쿄)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "일본은 동아시아에 위치한 섬나라로, 혼슈, 홋카이도, 규슈, 시코쿠 4개의 주요 섬과 수많은 작은 섬들로 이루어져 있습니다. 전통과 현대가 조화를 이루는 독특한 문화를 가지고 있으며, 벚꽃, 온천, 사무라이, 애니메이션 등으로 유명합니다.",
      flag: "🇯🇵",
      lat: 35.6762,
      lng: 139.6503
    },
    korea: {
      name: "대한민국",
      capital: "서울",
      language: "한국어",
      currency: "원 (KRW)",
      timezone: "Asia/Seoul",
      embassy: "해당없음 (본국)",
      travelAlert: "해당없음",
      description: "한반도 남부에 위치한 나라로, 빠른 경제 성장과 IT 기술의 발전으로 세계적인 주목을 받고 있습니다. K-POP, K-드라마, 한식 등 한류 문화가 전 세계적으로 인기를 끌고 있습니다.",
      flag: "🇰🇷",
      lat: 37.5665,
      lng: 126.9780
    },
    china: {
      name: "중국",
      capital: "베이징",
      language: "중국어(만다린)",
      currency: "위안 (CNY)",
      timezone: "Asia/Shanghai",
      embassy: "주중대한민국대사관 (베이징)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "세계에서 가장 인구가 많은 나라로, 5000년의 유구한 역사와 문화를 자랑합니다. 만리장성, 자금성, 병마용 등 수많은 역사 유적과 현대적인 도시들이 공존하는 거대한 국가입니다.",
      flag: "🇨🇳",
      lat: 39.9042,
      lng: 116.4074
    },
    thailand: {
      name: "태국",
      capital: "방콕",
      language: "태국어",
      currency: "바트 (THB)",
      timezone: "Asia/Bangkok",
      embassy: "주태국대한민국대사관 (방콕)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "동남아시아의 중심에 위치한 나라로, '미소의 나라'라고 불립니다. 화려한 불교 사원, 맛있는 음식, 아름다운 해변으로 유명하며, 전 세계 관광객들에게 인기 있는 여행지입니다.",
      flag: "🇹🇭",
      lat: 13.7563,
      lng: 100.5018
    }
  },
  europe: {
    france: {
      name: "프랑스",
      capital: "파리",
      language: "프랑스어",
      currency: "유로 (EUR)",
      timezone: "Europe/Paris",
      embassy: "주프랑스대한민국대사관 (파리)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "서유럽에 위치한 나라로, 예술, 패션, 요리의 중심지입니다. 에펠탑, 루브르 박물관, 베르사유 궁전 등 세계적인 명소들이 있으며, 와인과 치즈로도 유명합니다.",
      flag: "🇫🇷",
      lat: 48.8566,
      lng: 2.3522
    },
    germany: {
      name: "독일",
      capital: "베를린",
      language: "독일어",
      currency: "유로 (EUR)",
      timezone: "Europe/Berlin",
      embassy: "주독일대한민국대사관 (베를린)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "중부 유럽의 경제 강국으로, 풍부한 역사와 문화유산을 자랑합니다. 노이슈반슈타인 성, 베를린 장벽, 옥토버페스트 등으로 유명하며, 자동차 공업과 맥주로도 잘 알려져 있습니다.",
      flag: "🇩🇪",
      lat: 52.5200,
      lng: 13.4050
    },
    italy: {
      name: "이탈리아",
      capital: "로마",
      language: "이탈리아어",
      currency: "유로 (EUR)",
      timezone: "Europe/Rome",
      embassy: "주이탈리아대한민국대사관 (로마)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "남유럽의 장화 모양 반도 국가로, 고대 로마 제국의 발상지입니다. 콜로세움, 베네치아, 피사의 사탑 등 수많은 세계문화유산과 피자, 파스타 등 세계적인 요리로 유명합니다.",
      flag: "🇮🇹",
      lat: 41.9028,
      lng: 12.4964
    },
    spain: {
      name: "스페인",
      capital: "마드리드",
      language: "스페인어",
      currency: "유로 (EUR)",
      timezone: "Europe/Madrid",
      embassy: "주스페인대한민국대사관 (마드리드)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "이베리아 반도에 위치한 나라로, 열정적인 플라멩코, 투우, 축구로 유명합니다. 사그라다 파밀리아, 알함브라 궁전 등 독특한 건축물과 타파스, 파에야 등 맛있는 음식으로 유명합니다.",
      flag: "🇪🇸",
      lat: 40.4168,
      lng: -3.7038
    }
  },
  "north-america": {
    usa: {
      name: "미국",
      capital: "워싱턴 D.C.",
      language: "영어",
      currency: "달러 (USD)",
      timezone: "America/New_York",
      embassy: "주미대한민국대사관 (워싱턴)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "북아메리카 대륙에 위치한 세계 최강대국으로, 50개 주로 이루어져 있습니다. 자유의 여신상, 그랜드 캐니언, 할리우드 등으로 유명하며, 다양한 문화가 공존하는 나라입니다.",
      flag: "🇺🇸",
      lat: 38.9072,
      lng: -77.0369
    },
    canada: {
      name: "캐나다",
      capital: "오타와",
      language: "영어, 프랑스어",
      currency: "캐나다 달러 (CAD)",
      timezone: "America/Toronto",
      embassy: "주캐나다대한민국대사관 (오타와)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "북아메리카 북부에 위치한 나라로, 세계에서 두 번째로 넓은 영토를 가지고 있습니다. 나이아가라 폭포, 로키산맥, 메이플 시럽으로 유명하며, 깨끗한 자연환경을 자랑합니다.",
      flag: "🇨🇦",
      lat: 45.4215,
      lng: -75.6972
    }
  },
  oceania: {
    australia: {
      name: "호주",
      capital: "캔버라",
      language: "영어",
      currency: "호주 달러 (AUD)",
      timezone: "Australia/Sydney",
      embassy: "주호주대한민국대사관 (캔버라)",
      travelAlert: "1단계 (남색) - 여행유의",
      description: "오세아니아 대륙에 위치한 나라로, 독특한 야생동물과 자연경관으로 유명합니다. 시드니 오페라하우스, 그레이트 배리어 리프, 캥거루와 코알라 등으로 잘 알려져 있습니다.",
      flag: "🇦🇺",
      lat: -35.2809,
      lng: 149.1300
    }
  }
};

// Country select options by continent
const countryOptions = {
  asia: [
    { value: "korea", name: "대한민국" },
    { value: "japan", name: "일본" },
    { value: "china", name: "중국" },
    { value: "thailand", name: "태국" }
  ],
  europe: [
    { value: "france", name: "프랑스" },
    { value: "germany", name: "독일" },
    { value: "italy", name: "이탈리아" },
    { value: "spain", name: "스페인" }
  ],
  "north-america": [
    { value: "usa", name: "미국" },
    { value: "canada", name: "캐나다" }
  ],
  oceania: [
    { value: "australia", name: "호주" }
  ]
};

// Update country selector based on continent
function updateCountrySelector(continent) {
  const countrySelect = document.getElementById("countrySelect");
  countrySelect.innerHTML = '<option value="">국가 선택</option>';
  
  if (continent && countryOptions[continent]) {
    countryOptions[continent].forEach(country => {
      const option = document.createElement("option");
      option.value = country.value;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
    countrySelect.disabled = false;
  } else {
    countrySelect.disabled = true;
  }
}

// Display country information
function displayCountryInfo(continent, country) {
  const data = countryData[continent]?.[country];
  
  if (!data) return;
  
  // Update basic info
  document.getElementById("countryName").textContent = data.name;
  document.getElementById("capital").textContent = data.capital;
  document.getElementById("language").textContent = data.language;
  document.getElementById("currency").textContent = data.currency;
  document.getElementById("embassy").textContent = data.embassy;
  document.getElementById("travelAlert").textContent = data.travelAlert;
  
  // Update local time
  updateLocalTime(data.timezone);
  
  // Update weather (mock data)
  updateWeather();
  
  // Update description
  const infoContent = document.getElementById("countryInfo");
  infoContent.innerHTML = `
    <div class="country-flag">
      <div style="font-size: 6rem;">${data.flag}</div>
    </div>
    <div class="country-description">
      ${data.description}
    </div>
  `;
  
  // Update map location
  if (window.map && data.lat && data.lng) {
    updateMapLocation(data.lat, data.lng, data.name);
  }
}

// Leaflet Maps Integration (무료 오픈소스)
let map;
let marker;

function initMap() {
  // Default location (Seoul, Korea)
  const defaultLocation = [37.5665, 126.9780];
  
  // Initialize map
  map = L.map('map', {
    center: defaultLocation,
    zoom: 6,
    zoomControl: false // 우리가 만든 커스텀 버튼 사용
  });
  
  // Add tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
  
  // Add marker
  marker = L.marker(defaultLocation, {
    title: "대한민국"
  }).addTo(map);
  
  // Add popup to marker
  marker.bindPopup("<b>대한민국</b><br>서울").openPopup();
}

function updateMapLocation(lat, lng, name) {
  const location = [lat, lng];
  
  if (map) {
    // Smooth animation to new location
    map.flyTo(location, 6, {
      duration: 1.5
    });
    
    if (marker) {
      marker.setLatLng(location);
      marker.bindPopup(`<b>${name}</b>`).openPopup();
    }
  }
}

// Zoom controls
function zoomIn() {
  if (map) {
    map.zoomIn();
  }
}

function zoomOut() {
  if (map) {
    map.zoomOut();
  }
}

// Update local time
function updateLocalTime(timezone) {
  const now = new Date();
  const timeString = now.toLocaleTimeString("ko-KR", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  document.getElementById("localTime").textContent = timeString;
}

// Update weather (mock data)
function updateWeather() {
  const weatherOptions = ["☀️ 맑음 25°C", "⛅ 구름 20°C", "🌧️ 비 18°C", "🌤️ 화창 28°C"];
  const randomWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
  document.getElementById("weather").textContent = randomWeather;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const continentSelect = document.getElementById("continentSelect");
  const countrySelect = document.getElementById("countrySelect");
  
  // Continent change event
  continentSelect.addEventListener("change", (e) => {
    const continent = e.target.value;
    updateCountrySelector(continent);
    
    // Clear country info
    document.getElementById("countryInfo").innerHTML = `
      <div class="info-placeholder">
        <p>국가를 선택하세요.</p>
      </div>
    `;
  });
  
  // Country change event
  countrySelect.addEventListener("change", (e) => {
    const country = e.target.value;
    const continent = continentSelect.value;
    
    if (country && continent) {
      displayCountryInfo(continent, country);
    }
  });
  
  // Map zoom controls
  document.getElementById("zoomIn")?.addEventListener("click", zoomIn);
  document.getElementById("zoomOut")?.addEventListener("click", zoomOut);
  
  // Initialize Leaflet Map
  initMap();
  
  console.log("🗺️ Country page initialized with Leaflet.js!");
});
