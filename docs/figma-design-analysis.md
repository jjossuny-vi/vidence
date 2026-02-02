# VIDENCE 메인 페이지 디자인 분석

> Figma 디자인 시스템 분석 문서
> 작성일: 2026-01-31

---

## 개요

VIDENCE 메인 페이지는 총 9개의 섹션으로 구성되어 있습니다. 각 섹션은 브랜드의 "Modern, Sophisticated, Warmth" 정체성을 반영하며, Toteme 스타일의 절제된 레이아웃을 따릅니다.

### 페이지 구조

| 순서 | 섹션명 | Node ID | 설명 |
|------|--------|---------|------|
| 1 | GNB | 8:2516 | 글로벌 네비게이션 바 |
| 2 | Hero Section | 0:2301 | 메인 히어로 이미지 |
| 3 | Video Section | 0:2310 | 비디오/이미지 갤러리 |
| 4 | Store Section | 0:2327 | 팝업 스토어 소개 |
| 5 | Collection Section | 0:2337 | 카테고리 컬렉션 |
| 6 | Episode Section | 0:2343 | 에피소드 캐로셀 |
| 7 | MD Section | 0:2389 | MD 추천 상품 |
| 8 | SNS Section | 0:2400 | SNS 피드 갤러리 |
| 9 | Footer | 8:2556 | 푸터 |

### 공통 디자인 토큰

#### 색상 (Colors)
```
--primary: #222222 (Charcoal - 기본 텍스트/UI)
--white: #FFFFFF (배경)
--gray: #EFEFEF (구분선, 비활성)
--translucent-b20: rgba(0,0,0,0.2) (이미지 오버레이)
```

#### 타이포그래피 (Typography)
| 스타일 | 폰트 | 굵기 | 크기 | 자간 | 행간 |
|--------|------|------|------|------|------|
| H/H2 | Zalando Sans SemiExpanded | Bold (700) | 40px | 0 | 1.2 |
| H/H4 | Zalando Sans SemiExpanded | ExtraBold (800) | 24px | 4.8px | 1.2 |
| H/Menu | Zalando Sans SemiExpanded | Bold (700) | 13px | 1.3px | 1.2 |
| H/Menu_off | Zalando Sans SemiExpanded | Regular (400) | 13px | 1.3px | 1.2 |
| Title/Sub_secondary | Zalando Sans SemiExpanded | Bold (700) | 14px | 2.8px | 1.2 |
| Title/Price | Zalando Sans SemiExpanded | Regular (400) | 12px | 1.2px | 1.2 |
| Title/Title18 | Zalando Sans SemiExpanded | Bold (700) | 18px | 0 | 1.4 |
| Body/Body_primary | Pretendard | SemiBold (600) | 14px | 0.28px | 1.2 |

---

## 1. GNB (Global Navigation Bar)

**Node ID:** `8:2516`
**Figma URL:** [GNB](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=8-2516)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│  [Menu Items]          VIDENCE           [User Menu] [Icons]    │
│  NEW IN CLOTHING...                      COLLECTIONS...  Q 👤 🛒 │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **Logo** | "VIDENCE" 브랜드 로고 | 43px, Bold, tracking: 4.3px |
| **Menu13** | 메뉴 아이템 (재사용) | 13px, Bold/Regular, tracking: 1.3px |
| **GnbIcon_s** | 아이콘 (검색, 프로필, 장바구니) | 30x30px |

### 스펙

- **높이:** 100px
- **너비:** 1600px (고정)
- **패딩:** 좌우 40px, 상하 30px
- **메뉴 간격:** 26px
- **아이콘 간격:** 20px

### 상태

| 상태 | 스타일 |
|------|--------|
| Default | H/Menu_off (Regular) |
| Active | H/Menu (Bold) + border-bottom 1px solid #222 |
| Hover | H/Menu (Bold) |

### 하위 컴포넌트

```
GNB
├── Header (h: 100px)
│   └── gnb (flex, justify-between)
│       ├── menu (left)
│       │   └── Menu13 × 5
│       ├── Logo (center)
│       └── User Menu (right)
│           ├── Menu13 × 2
│           └── Icons (GnbIcon_s × 3)
```

---

## 2. Hero Section

**Node ID:** `0:2301`
**Figma URL:** [Hero Section](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=0-2301)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│ ↑                                                               │
│ J  THE                    [Full-screen Hero Image]              │
│ U  WINTER                                                       │
│ S  BLAZER                                                       │
│ T                                                               │
│ ↓                              Discover                         │
│                            ━━━━━━━━━━━━━━                        │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **Main Image** | 전체 화면 히어로 이미지 | 1600x1000px, 오버레이 rgba(0,0,0,0.05) |
| **Headline** | 제품 타이틀 | H/H2 (40px Bold) |
| **Breadcrumb** | 세로 방향 카테고리 | 90° 회전, "OUTER / JACKET" |
| **Menu13** | CTA 버튼 | "Discover", border-bottom |
| **HorizontalDivider** | 페이지 구분선 | 400px, 3단 분할 |

### 스펙

- **섹션 높이:** 1000px
- **이미지:** 전체 영역 커버
- **헤드라인 위치:** left: calc(50% - 531px), top: calc(50% - 13px)
- **Breadcrumb:** left: 30px, 세로 중앙 정렬, 회전 -90°

### HorizontalDivider 컴포넌트

```
HorizontalDivider (w: 400px, center)
├── Divider Active (flex: 1, h: 2px, bg: #222)
├── Divider Inactive (flex: 1, h: 2px, bg: #efefef)
└── Divider Inactive (flex: 1, h: 2px, bg: #efefef)
```

---

## 3. Video Section

**Node ID:** `0:2310`
**Figma URL:** [Video Section](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=0-2310)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│ ↑                                                               │
│ D  ┌──────────────┐┌────────────────────────────┐              │
│ O  │              ││                            │              │
│ N  │   [Video]    ││      [Static Image]        │              │
│ O  │     ▶️       ││                            │              │
│    │              ││                            │              │
│ ↓  └──────────────┘└────────────────────────────┘              │
│                                                                 │
│         "Share your own style complete with ORR..."             │
│                          Discover                               │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **Video Thumbnail** | 비디오 썸네일 + 재생 버튼 | 500x690px |
| **Static Image** | 정적 이미지 | flex: 1, h: 690px |
| **Play Button** | 재생 아이콘 | 50x50px, 중앙 배치 |
| **MainSection** | 텍스트 영역 | 중앙 정렬 |
| **Breadcrumb** | 세로 방향 라벨 | "DONO COLLECTION 'SWITCH ON'" |

### 스펙

- **섹션 높이:** 1035px
- **이미지 컨테이너:** 1200px (500px + 4px gap + 696px)
- **이미지 높이:** 690px
- **하단 여백:** 80px
- **텍스트 스타일:** H/Menu_off (13px Regular)

---

## 4. Store Section

**Node ID:** `0:2327`
**Figma URL:** [Store Section](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=0-2327)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│ ↑                                                               │
│ @  ┌───────────────────────────────────────────────────────┐   │
│ S  │                                                       │   │
│ U  │              [Full-width Store Image]                 │   │
│ N  │                                                       │   │
│ G  └───────────────────────────────────────────────────────┘   │
│ S                                                               │
│ U       "ORR stands for 'Original Realize,'..."                 │
│ ↓                       Discover                                │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **Store Image** | 팝업 스토어 이미지 | 1600x760px, object-fit: cover |
| **Vertical Label** | 세로 방향 라벨 | "@SUNGSU - POPUP STORE", 흰색, 14px Bold |
| **Description** | 브랜드 설명 텍스트 | 13px Regular, 중앙 정렬 |
| **Menu13** | CTA 버튼 | "Discover" |

### 스펙

- **섹션 높이:** 1035px
- **이미지 높이:** 760px
- **갭:** 80px (이미지 ↔ 텍스트)
- **세로 라벨:** left: 30px, 흰색 텍스트

---

## 5. Collection Section

**Node ID:** `0:2337`
**Figma URL:** [Collection Section](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=0-2337)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│    ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐             │
│    │        │  │        │  │        │  │        │             │
│    │CLOTHING│  │ SHOES  │  │ACCESSORY│ │BAG COLL│             │
│    │        │  │        │  │        │  │        │             │
│    └────────┘  └────────┘  └────────┘  └────────┘             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **CategoryImage** | 카테고리 카드 (재사용) | 346x500px |

### CategoryImage 컴포넌트

```
CategoryImage (w: 346px, h: 500px)
├── Background Image (cover)
├── Overlay (rgba(0,0,0,0.2))
└── Label (centered)
    └── Title/Sub_secondary (14px Bold, white, tracking: 2.8px)
```

### 스펙

- **배경:** 흰색 (#FFFFFF)
- **카드 크기:** 346x500px
- **카드 간격:** 30px
- **오버레이:** rgba(0,0,0,0.2)
- **라벨:** 중앙 정렬, 흰색, 14px Bold

---

## 6. Episode Section

**Node ID:** `0:2343`
**Figma URL:** [Episode Section](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=0-2343)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│                        EPISODE                    (dark bg)     │
│                                                                 │
│   ┌─────────┐    ┌─────────────────┐    ┌─────────┐           │
│   │ [prev]  │ ← │   [Main Image]   │ →  │ [next]  │           │
│   │ (small) │    │                  │    │ (small) │           │
│   └─────────┘    │   EPISODE 8      │    └─────────┘           │
│                  │   Why did you... │                           │
│                  └─────────────────┘                           │
│                        Discover                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **Section Title** | "EPISODE" | H/H4 (24px ExtraBold, white) |
| **EpisodeImage** | 에피소드 카드 (재사용) | 메인: 802px, 사이드: 534px |
| **Arrow Icons** | 좌우 네비게이션 | 14x15.75px |
| **Menu13** | CTA 버튼 | "Discover" |

### EpisodeImage 컴포넌트

```
EpisodeImage
├── Cover (이미지)
└── title
    ├── Episode Number (12px Regular, tracking: 1.2px)
    └── Episode Title (18px Bold, line-height: 1.4)
```

### 스펙

- **배경:** #222222 (dark)
- **메인 카드:** 802x479px
- **사이드 카드:** 534x319px
- **카드 간격:** 159px
- **타이틀 색상:** #222 (카드 내부는 밝은 배경)

---

## 7. MD Section (Product Grid)

**Node ID:** `0:2389`
**Figma URL:** [MD Section](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=0-2389)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│     "Share your own style complete with ORR on Instagram..."    │
│                                                                 │
│   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐    →        │
│   │        │  │        │  │        │  │        │              │
│   │[Product│  │[Product│  │[Product│  │[Product│              │
│   │ Image] │  │ Image] │  │ Image] │  │ Image] │              │
│   │        │  │        │  │        │  │        │              │
│   ├────────┤  ├────────┤  ├────────┤  ├────────┤              │
│   │Title   │  │Title   │  │Title   │  │Title   │              │
│   └────────┘  └────────┘  └────────┘  └────────┘              │
│                       ━━━━━━━━━━━━━━                            │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **MainSection** | 상단 텍스트 | 13px Regular |
| **ProductImage** | 상품 카드 (재사용) | 336x542px |
| **HorizontalDivider** | 페이지 구분선 | 400px |
| **Instagram Icon** | 인스타그램 아이콘 | 40x40px |

### ProductImage 컴포넌트

```
ProductImage (w: 336px, h: 542px)
├── Picture (h: 450px)
│   ├── Background (#efefef)
│   └── Main image (object-fit: cover)
└── Product info
    └── Product details
        └── Title (Pretendard SemiBold, 14px, tracking: 0.28px)
```

### 스펙

- **배경:** 흰색
- **카드 너비:** 336px
- **이미지 높이:** 450px
- **카드 간격:** 32px
- **전체 컨테이너:** 1440px
- **패딩:** 상하 60px

---

## 8. SNS Section

**Node ID:** `0:2400`
**Figma URL:** [SNS Section](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=0-2400)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│     "Share your own style complete with ORR on Instagram..."    │
│                                                                 │
│   ┌─────────┐┌─────────┐┌─────────┐┌─────────┐                │
│   │         ││    ▶️   ││         ││         │                │
│   │ [SNS    ││ [SNS    ││ [SNS    ││ [SNS    │                │
│   │  Image] ││  Image] ││  Image] ││  Image] │                │
│   │         ││         ││         ││         │                │
│   └─────────┘└─────────┘└─────────┘└─────────┘                │
│                       ━━━━━━━━━━━━━━                            │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **MainSection** | 상단 텍스트 | 13px Regular, 중앙 정렬 |
| **SnsImage** | SNS 피드 이미지 (재사용) | 393.333x466px |
| **Video Icon** | 비디오 표시 아이콘 | 36x36px (선택적) |
| **HorizontalDivider** | 페이지 구분선 | 400px |

### SnsImage 컴포넌트

```
SnsImage (w: 393.333px)
├── cover (h: 466px, overflow: clip)
│   ├── Background Image
│   └── Video Icon (optional, top-right)
```

### 스펙

- **배경:** 흰색
- **이미지 너비:** 393.333px (4등분)
- **이미지 높이:** 466px
- **이미지 간격:** 4px
- **컨테이너:** 1200px
- **좌우 패딩:** 160px
- **섹션 간격:** 100px (상단), 60px (하단)

---

## 9. Footer

**Node ID:** `8:2556`
**Figma URL:** [Footer](https://www.figma.com/design/dATFXxAPyDfCV546uHGJhf/VIbe-coding?node-id=8-2556)

### 레이아웃

```
┌─────────────────────────────────────────────────────────────────┐
│ SUPPORT        POLICY           ABOUT US       CS CENTER        │
│ NOTICES        TERMS OF...      ABOUT THE...   1:1 LIVE CHAT    │
│ FAQS           PRIVACY...       STORE...       WEEKDAYS 09:00   │
│ MEMBERSHIP...  EXCHANGE...      CONTACT US     +82-1588-6941    │
│ DOWNLOAD APP   SHIPPING...                     WEEKDAYS 14:00   │
│                CCPA...                         🌐 UNITED STATES │
│                ACCESSIBILITY                                    │
│                COOKIE...                                        │
│                                                                 │
│ © 2026 ORR. All Rights Reserved.                               │
└─────────────────────────────────────────────────────────────────┘
```

### 구성 요소

| 컴포넌트 | 설명 | 스타일 |
|----------|------|--------|
| **Section Title** | 섹션 제목 | 14px Bold, tracking: 2.8px |
| **Support Links** | 링크 아이템 | 12px Regular, h: 30px |
| **Country Selector** | 국가 선택 | Icon + Text + Arrow |
| **Copyright** | 저작권 표시 | 12px Regular |

### 구조

```
Footer
├── Main Container (justify-between)
│   └── Content Container (p: 40px, gap: 50px)
│       ├── Info Sections (gap: 120px)
│       │   ├── Support Section (w: 174px)
│       │   ├── Policy Section (w: 208px)
│       │   ├── About Us Section (w: 140px)
│       │   └── CS Center Section (w: 178px)
│       │       ├── Live Chat Info
│       │       ├── Phone Info
│       │       └── Country Selector
│       └── Company Info Section
│           └── Copyright
```

### 스펙

- **배경:** 흰색
- **상단 보더:** 1px solid #222
- **패딩:** 40px
- **섹션 간격:** 120px
- **링크 높이:** 30px (padding: 8px 0)
- **링크 스타일:** 12px Regular, tracking: 1.2px

---

## 공통 컴포넌트 목록

### 재사용 컴포넌트

| 컴포넌트명 | 사용 섹션 | 설명 |
|------------|-----------|------|
| **Menu13** | GNB, Hero, Video, Store, Episode, MD | 메뉴/CTA 버튼 |
| **Breadcrumb** | Hero, Video | 세로 방향 카테고리 라벨 |
| **HorizontalDivider** | Hero, MD, SNS | 페이지 구분선 (3단 분할) |
| **CategoryImage** | Collection | 카테고리 카드 |
| **EpisodeImage** | Episode | 에피소드 카드 |
| **ProductImage** | MD | 상품 카드 |
| **SnsImage** | SNS | SNS 피드 이미지 |
| **GnbIcon_s** | GNB, Episode | 아이콘 (30x30px) |

### 구현 우선순위

1. **High Priority (공통)**
   - Menu13
   - HorizontalDivider
   - Breadcrumb

2. **Medium Priority (섹션별)**
   - CategoryImage
   - ProductImage
   - SnsImage
   - EpisodeImage

3. **Low Priority (특수)**
   - GnbIcon_s (아이콘 세트)
   - Country Selector

---

## 반응형 고려사항

현재 디자인은 **Desktop (1600px)** 기준입니다.

### 브레이크포인트 제안

| 브레이크포인트 | 너비 | 그리드 |
|----------------|------|--------|
| Desktop XL | 1600px+ | 기본 레이아웃 |
| Desktop | 1200px - 1599px | 컨테이너 축소 |
| Tablet | 768px - 1199px | 2컬럼 그리드 |
| Mobile | ~ 767px | 1컬럼, 스택 레이아웃 |

### 모바일 대응 포인트

- GNB → 햄버거 메뉴 + 드로어
- Collection → 2x2 또는 가로 스크롤
- Episode → 단일 카드 + 스와이프
- MD Section → 2컬럼 또는 가로 스크롤
- Footer → 아코디언 형태

---

## 구현 시 주의사항

1. **폰트**: Zalando Sans SemiExpanded는 커스텀 폰트입니다. 라이선스 확인 필요.
2. **이미지**: Figma 에셋 URL은 7일 후 만료됩니다. 실제 이미지 에셋으로 교체 필요.
3. **아이콘**: lucide-react 또는 커스텀 SVG 사용.
4. **스타일링**: MUI sx prop 사용, Tailwind 미사용.
5. **Grid**: `import Grid from '@mui/material/Grid'` (Grid2 아님)
