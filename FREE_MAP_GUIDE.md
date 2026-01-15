# 무료 지도 사용 가이드 - Leaflet.js 🗺️

## ✨ 현재 적용된 지도: Leaflet.js + OpenStreetMap

**완전 무료, API 키 불필요, 바로 사용 가능!**

---

## 📋 현재 구현 내용

### 1. 사용 중인 라이브러리
- **Leaflet.js** v1.9.4 - 오픈소스 JavaScript 지도 라이브러리
- **OpenStreetMap** - 무료 지도 타일 제공

### 2. 구현된 기능 ✅
- ✅ 국가 선택 시 해당 위치로 부드러운 애니메이션 이동
- ✅ 마커로 위치 표시 + 팝업 정보
- ✅ 줌 인/아웃 버튼
- ✅ 드래그로 지도 이동
- ✅ 마우스 휠로 줌
- ✅ 모바일 터치 지원
- ✅ 완전 반응형

### 3. 라이센스
- **Leaflet.js**: BSD 2-Clause License (상업적 사용 가능)
- **OpenStreetMap**: Open Data Commons Open Database License (무료 사용)

---

## 🎨 지도 스타일 변경하기

현재는 OpenStreetMap의 기본 스타일을 사용하고 있습니다. 다른 무료 스타일로 변경 가능합니다.

### 옵션 1: CartoDB (깔끔한 스타일)

```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © CartoDB',
  maxZoom: 19
}).addTo(map);
```

### 옵션 2: CartoDB Dark (다크 모드)

```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © CartoDB',
  maxZoom: 19
}).addTo(map);
```

### 옵션 3: Stamen Terrain (지형도)

```javascript
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
  attribution: 'Map tiles by Stamen Design, © OpenStreetMap',
  maxZoom: 18
}).addTo(map);
```

### 옵션 4: Esri World Imagery (위성 사진)

```javascript
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri',
  maxZoom: 19
}).addTo(map);
```

---

## 🚀 추가 기능 구현하기

### 1. 여러 레이어 전환 (일반/위성)

```javascript
// 여러 지도 타일 정의
const streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
const satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

// 기본 레이어로 시작
streetMap.addTo(map);

// 레이어 컨트롤 추가
const baseMaps = {
  "일반 지도": streetMap,
  "위성 지도": satelliteMap
};
L.control.layers(baseMaps).addTo(map);
```

### 2. 커스텀 마커 아이콘

```javascript
const customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38]
});

marker = L.marker(location, { icon: customIcon }).addTo(map);
```

### 3. 원(Circle) 표시

```javascript
// 수도 주변 반경 100km 표시
L.circle([37.5665, 126.9780], {
  color: '#1e88e5',
  fillColor: '#4fc3f7',
  fillOpacity: 0.2,
  radius: 100000 // 미터 단위
}).addTo(map);
```

### 4. 폴리라인(경로) 표시

```javascript
// 서울 -> 부산 경로
const latlngs = [
  [37.5665, 126.9780], // 서울
  [35.1796, 129.0756]  // 부산
];

L.polyline(latlngs, {
  color: '#ff6f00',
  weight: 4,
  opacity: 0.7
}).addTo(map);
```

### 5. 지도 클릭 이벤트

```javascript
map.on('click', function(e) {
  console.log('클릭한 위치:', e.latlng);
  L.popup()
    .setLatLng(e.latlng)
    .setContent(`위도: ${e.latlng.lat.toFixed(4)}<br>경도: ${e.latlng.lng.toFixed(4)}`)
    .openOn(map);
});
```

---

## 🌍 다른 무료 지도 서비스

### 1. **Mapbox** (제한적 무료)
- 월 50,000 타일 뷰 무료
- 더 세련된 디자인
- API 키 필요

```javascript
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '© Mapbox © OpenStreetMap',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: 'YOUR_MAPBOX_TOKEN'
}).addTo(map);
```

### 2. **Jawg Maps** (무료)
- API 키 필요하지만 무료 플랜 제공
- 다양한 스타일

### 3. **Thunderforest** (제한적 무료)
- 월 150,000 타일 요청 무료
- 아웃도어, 자전거 등 특화 지도

---

## 📊 성능 최적화

### 1. 타일 로딩 최적화

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  detectRetina: true, // 레티나 디스플레이 지원
  updateWhenIdle: true, // 이동 중엔 업데이트 안 함
  updateWhenZooming: false, // 줌 중엔 업데이트 안 함
  keepBuffer: 2 // 화면 밖 타일 미리 로드
}).addTo(map);
```

### 2. 마커 클러스터링 (많은 마커 시)

```html
<!-- 플러그인 추가 -->
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css" />
```

```javascript
const markers = L.markerClusterGroup();
// 마커 추가
markers.addLayer(L.marker([37.5665, 126.9780]));
markers.addLayer(L.marker([35.1796, 129.0756]));
map.addLayer(markers);
```

---

## 🔧 문제 해결

### 지도가 제대로 표시되지 않을 때:
1. Leaflet CSS가 제대로 로드되었는지 확인
2. 지도 컨테이너에 명확한 높이가 설정되어 있는지 확인
3. 브라우저 콘솔에서 에러 메시지 확인

### 타일이 로드되지 않을 때:
- 인터넷 연결 확인
- OpenStreetMap 서버 상태 확인
- CORS 에러인 경우 다른 타일 서버 시도

### 모바일에서 느릴 때:
- `updateWhenIdle: true` 옵션 사용
- 마커 수 줄이기 또는 클러스터링 사용
- 최대 줌 레벨 제한

---

## 📚 추가 리소스

- [Leaflet 공식 문서](https://leafletjs.com/)
- [Leaflet 튜토리얼](https://leafletjs.com/examples.html)
- [무료 지도 타일 제공자 목록](https://leaflet-extras.github.io/leaflet-providers/preview/)
- [Leaflet 플러그인](https://leafletjs.com/plugins.html)

---

## 💡 현재 구현된 코드 위치

### HTML (country.html)
```html
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<!-- Leaflet JavaScript -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

### JavaScript (country.js)
```javascript
// initMap() - 지도 초기화
// updateMapLocation() - 위치 업데이트
// zoomIn() / zoomOut() - 줌 컨트롤
```

### CSS (country.css)
```css
.google-map - 지도 컨테이너 스타일
```

---

## ✅ 장점 요약

1. ✨ **완전 무료** - API 키 불필요
2. 🚀 **빠른 로딩** - 가볍고 최적화됨
3. 📱 **모바일 친화적** - 터치 제스처 지원
4. 🎨 **커스터마이징 자유** - 다양한 스타일
5. 🌐 **오픈소스** - 활발한 커뮤니티
6. 📖 **풍부한 문서** - 쉬운 학습
7. 🔌 **플러그인 생태계** - 확장 가능

---

## 🎉 결론

**Leaflet.js + OpenStreetMap**은 소규모에서 대규모 프로젝트까지 사용 가능한 완벽한 무료 지도 솔루션입니다. API 키도 필요 없고, 사용 제한도 없어서 WorldTripClub 프로젝트에 최적입니다!

궁금한 점이 있으시면 언제든지 문의하세요! 🚀

© 2026 WorldTripClub
