🚧 This project is currently under development.
--

🌍 WorldTripClub (세계일주클럽)

WorldTripClub은 여행을 준비하는 사용자가
환율, 주요 도시 정보, 이동 흐름을
한 화면에서 직관적으로 확인할 수 있도록 설계한 웹 서비스입니다.



📌 프로젝트 기획 의도

여행을 준비할 때 환율, 도시 정보, 시간대, 날씨 등을
각각 다른 사이트에서 확인해야 하는 불편함을 느꼈고,

이를 하나의 홈 화면에서 통합 제공하고자 본 프로젝트를 기획했습니다.

특히 “세계일주”라는 콘셉트에 맞게
주요 글로벌 도시를 중심으로 정보를 빠르게 파악할 수 있도록 구성했습니다.



🖥️ 메인 화면 구성

1️⃣ Hero Section

서비스의 콘셉트를 전달하는 헤드라인 영역

World Map 기반의 시각적 안내

Get Started 버튼을 통해 주요 기능으로 자연스럽게 유도

2️⃣ Exchange Rates

주요 통화 기준 환율 정보 제공

원/달러 (USD)

원/유로 (EUR)

원/엔화 (JPY)

원/위안 (CNY)

카드 형태로 구성하여 한눈에 비교 가능

3️⃣ World Cities

주요 글로벌 도시 정보 제공

NYC, FRA, TYO, PEK

각 도시는 다음 정보를 포함

현지 시간

날씨 정보

원형 카드 UI로 시각적 구분을 강화


4️⃣ Travel Planner

출발지와 도착지를 기준으로 한 이동 정보 영역

기본 출발지는 ICN (인천) 으로 설정

향후 비행 시간 계산, 일정 관리 기능 확장 가능하도록 설계



🧱 설계 특징

피그마를 활용한 사전 화면 설계(Wireframe)

기능 단위로 명확히 구분된 섹션 구조

공통 UI 요소는 컴포넌트 단위로 분리 가능하도록 설계

확장성을 고려한 구조 (API 연동, 로그인, 게시판 등)



🚀 향후 확장 계획

회원 로그인 / 게시판 기능 추가

외부 API 연동

환율 API

날씨 API

시간대 API

세계일주 루트 관리 및 일정 계산 기능

🛠️ 사용 기술 (예정)

Frontend: React

Design: Figma

Backend: Spring Boot (예정)

API: Exchange / Weather / Timezone API


## 프로젝트 구조

```
worldtripclub/
├─ README.md ✅ (지금 만든 설명)
├─ design/
│ └─ wireframe.png ✅ (피그마 캡처)
├─ docs/
│ └─ planning.md (선택)
└─ .gitignore
```











