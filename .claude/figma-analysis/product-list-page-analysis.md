# Figma Design Analysis: Product List Page

## Overview

**Figma File**: VIbe-coding
**분석 대상 프레임**:
- `0:2565` - Hero Section
- `0:2530` - ProductShowcase Section

---

## Frame 1: Hero Section (0:2565)

### 설명
전체 화면을 채우는 히어로 섹션. 배경 이미지 위에 중앙 정렬된 컬렉션 타이틀이 표시됨.

### 구조
```
Hero
└── Property 1=Hero_01, device=PC (1600x812)
    ├── image 94 (배경 이미지)
    │   └── 반투명 오버레이 (rgba(0,0,0,0.2))
    └── "LOVEMOMENT COLLECTION" (중앙 타이틀)
```

### 스타일 토큰

| 요소 | 스타일 |
|------|--------|
| 배경 | 전체 너비 이미지 + 20% 블랙 오버레이 |
| 타이틀 폰트 | Zalando Sans SemiExpanded ExtraBold |
| 타이틀 크기 | 20px |
| 자간 | 4px (200%) |
| 정렬 | 수평/수직 중앙 |
| 텍스트 색상 | White |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| image | string | - | 히어로 배경 이미지 URL |
| title | string | - | 컬렉션 타이틀 텍스트 |
| overlayOpacity | number | 0.2 | 오버레이 투명도 |

---

## Frame 2: ProductShowcase Section (0:2530)

### 설명
상품 목록 페이지의 메인 섹션. 카테고리 타이틀, 필터, 상품 그리드로 구성됨.

### 전체 구조
```
ProductShowcase
├── ListTitle (섹션 타이틀)
│   ├── 카테고리 제목 (H3: "OUTER")
│   └── 설명 텍스트
│
└── ProductList (상품 목록)
    ├── 2depth (카테고리 탭)
    │   └── Menu13[] (JACKET, JUMPER, COAT, DOWN...)
    │
    ├── Filter (필터 영역)
    │   ├── FILTER 버튼
    │   └── 정렬 드롭다운 (NEW ITEM)
    │
    ├── li[] (상품 행)
    │   └── ProductImage[] (상품 카드 4개/행)
    │
    └── more frame (더보기)
        └── BoxButton ("ADD TO CART" / "MORE")
```

---

## 재사용 컴포넌트 분석

### 1. Menu13 (카테고리 탭 아이템)

**위치**: `2depth` 내부

**Variants**:
| Variant | 상태 | 스타일 |
|---------|------|--------|
| Active | 선택됨 | Bold + 하단 border |
| Default | 미선택 | Regular |

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | "BAGS" | 메뉴 텍스트 |
| isActive | boolean | false | 활성화 여부 |

**스타일**:
- Font: Zalando Sans SemiExpanded
- Size: 13px
- Letter Spacing: 1.3px (10%)
- Height: 34px
- Active: Bold + border-bottom

---

### 2. ProductImage (상품 카드)

**위치**: 상품 그리드 내 각 아이템

**Variants**:

| Variant | 설명 | 특징 |
|---------|------|------|
| Default | 기본 상품 카드 | 이미지 + 상품명 + 가격 |
| WithNew | NEW 태그 포함 | 좌상단 "NEW" 라벨 |
| WithCarousel | 이미지 캐로셀 | 좌우 화살표 + 인디케이터 + 컬러 스와치 |
| OutOfStock | 품절 | 반투명 오버레이 + "OUT OF STOCK" 텍스트 |
| WithSale | 할인가 표시 | 취소선 원가 + 할인가 + 할인율 |

**구조**:
```
ProductImage
├── Picture (이미지 영역, 336x450)
│   ├── 배경 플레이스홀더 (#efefef)
│   ├── Main image
│   ├── [Optional] NEW 태그
│   ├── [Optional] COLLECTION 태그
│   ├── [Optional] 품절 오버레이
│   ├── [Optional] 캐로셀 네비게이션
│   └── [Optional] 컬러 스와치 + Like 버튼
│
└── Product info (상품 정보)
    ├── 상품명 (Pretendard SemiBold 14px)
    ├── [Optional] 부가 설명
    └── 가격 (Zalando Sans 12px)
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| image | string | - | 상품 이미지 URL |
| name | string | - | 상품명 |
| price | number | - | 가격 |
| originalPrice | number | null | 원가 (할인 시) |
| discountRate | number | null | 할인율 (%) |
| isNew | boolean | false | NEW 태그 표시 |
| isCollection | boolean | false | COLLECTION 태그 표시 |
| isOutOfStock | boolean | false | 품절 여부 |
| hasCarousel | boolean | false | 캐로셀 UI 표시 |
| colorOptions | array | [] | 컬러 옵션 배열 |

---

### 3. Banner (배너 카드)

**위치**: 상품 그리드 내 프로모션 배너

**Variants**:

| Variant | 크기 | 설명 |
|---------|------|------|
| property1="1" | 336px (1열) | 이미지 + 하단 라벨 |
| property1="2" | 684px (2열) | 이미지 + 중앙 오버레이 텍스트 |

**property1="1" (작은 배너)**:
```
Banner (336x450+info)
├── Picture (이미지)
└── Product info
    └── "GIFT COLLECTION" 라벨
```

**property1="2" (큰 배너)**:
```
Banner (684x450)
├── Picture (이미지)
└── 중앙 오버레이
    ├── "GIFT COLLECTION" (서브 타이틀)
    ├── "CUBIC CYLINDER KEYRING" (메인 타이틀)
    └── "BAGS" 버튼
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| image | string | - | 배너 이미지 |
| size | "small" \| "large" | "small" | 배너 크기 |
| category | string | - | 카테고리 라벨 |
| title | string | - | 메인 타이틀 (large only) |
| subtitle | string | - | 서브 타이틀 (large only) |
| ctaLabel | string | - | CTA 버튼 텍스트 (large only) |

---

### 4. Like (좋아요 버튼)

**위치**: ProductImage (캐로셀 variant) 내부

**구조**:
```
Like (28x28)
└── Heart Icon (SVG)
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isLiked | boolean | false | 좋아요 상태 |
| onClick | function | - | 클릭 핸들러 |

---

### 5. IconSmall (작은 아이콘)

**위치**: Filter 드롭다운, 네비게이션

**Variants**:
- down (아래 화살표)
- left/right (좌우 화살표)

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | "up" \| "down" \| "left" \| "right" | "down" | 방향 |

---

### 6. BoxButton (박스 버튼)

**위치**: 더보기, 장바구니 담기 등

**구조**:
```
BoxButton (284x60)
├── Border: 1px solid #222
├── Background: white
└── Text: "ADD TO CART" / "MORE"
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | "ADD TO CART" | 버튼 텍스트 |
| onClick | function | - | 클릭 핸들러 |
| fullWidth | boolean | false | 전체 너비 여부 |

---

### 7. ListTitle (섹션 타이틀)

**위치**: ProductShowcase 상단

**구조**:
```
ListTitle
├── 카테고리 제목 (H3)
│   Font: Zalando Sans SemiExpanded ExtraBold
│   Size: 36px
│   Letter Spacing: 7.2px (20%)
│
└── 설명 텍스트
    Font: Zalando Sans SemiExpanded Regular
    Size: 13px
    Line Height: 1.8
    Letter Spacing: 2.6px (20%)
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | 카테고리 제목 |
| description | string | - | 설명 텍스트 (줄바꿈 지원) |

---

### 8. Filter (필터 컨트롤)

**위치**: 카테고리 탭 오른쪽

**구조**:
```
Filter
├── FILTER 버튼 + 카운트
└── 정렬 드롭다운 (NEW ITEM ▼)
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| filterCount | number | 0 | 적용된 필터 수 |
| sortOptions | array | [] | 정렬 옵션 배열 |
| selectedSort | string | "NEW ITEM" | 선택된 정렬 |
| onFilterClick | function | - | 필터 클릭 핸들러 |
| onSortChange | function | - | 정렬 변경 핸들러 |

---

## 타이포그래피 시스템

| 용도 | 폰트 | Weight | Size | Letter Spacing |
|------|------|--------|------|----------------|
| H3 (카테고리 제목) | Zalando Sans SemiExpanded | ExtraBold (800) | 36px | 20% (7.2px) |
| H4 (배너 타이틀) | Zalando Sans SemiExpanded | ExtraBold (800) | 24px | 20% (4.8px) |
| H5 (히어로 타이틀) | Zalando Sans SemiExpanded | ExtraBold (800) | 20px | 20% (4px) |
| Menu (활성) | Zalando Sans SemiExpanded | Bold (700) | 13px | 10% (1.3px) |
| Menu (비활성) | Zalando Sans SemiExpanded | Regular (400) | 13px | 10% (1.3px) |
| Sub category | Zalando Sans SemiExpanded | Regular (400) | 13px | 20% (2.6px) |
| Description | Zalando Sans SemiExpanded | Regular (400) | 11px | 10% (1.1px) |
| Body Primary | Pretendard | SemiBold (600) | 14px | 2% (0.28px) |
| Body Script | Pretendard | Regular (400) | 12px | 0 |
| Price | Zalando Sans SemiExpanded | Regular (400) | 12px | 10% (1.2px) |

---

## 컬러 토큰

| 토큰 | HEX | 용도 |
|------|-----|------|
| --primary | #222222 | 기본 텍스트, 버튼 테두리 |
| --secondary | #7d8487 | 보조 텍스트, 부가 설명 |
| --white | #ffffff | 배경, 버튼 배경 |
| --gray | #efefef | 플레이스홀더 배경, 비활성 인디케이터 |
| --red | #d50004 | 할인율 강조 |
| --translucent-b20 | rgba(0,0,0,0.2) | 히어로 오버레이 |
| --translucent-b40 | rgba(34,34,34,0.4) | 품절 오버레이 |

---

## 레이아웃 사양

| 요소 | 값 |
|------|-----|
| 전체 컨테이너 너비 | 1600px |
| 상품 그리드 너비 | 1380px |
| 상품 카드 너비 | 336px |
| 상품 이미지 높이 | 450px |
| 행당 상품 수 | 4개 |
| 상품 간격 | 12px (행 내), 20px (행 간) |
| 섹션 패딩 | 40px |

---

## 기존 컴포넌트와의 매핑

| Figma 컴포넌트 | 기존 컴포넌트 | 재사용 가능 여부 |
|----------------|--------------|-----------------|
| Hero | VHeroSection | 확장 필요 (오버레이 스타일 다름) |
| Menu13 | VMenu | ✅ 재사용 가능 |
| ProductImage | VProductCard | 확장 필요 (variants 추가) |
| Banner | - | 🆕 신규 생성 필요 |
| Like | - | 🆕 신규 생성 필요 |
| BoxButton | - | 🆕 신규 생성 필요 |
| ListTitle | - | 🆕 신규 생성 필요 |
| Filter | - | 🆕 신규 생성 필요 |

---

## 구현 우선순위

### Phase 1: 기본 컴포넌트
1. `VBoxButton` - 박스 버튼 컴포넌트
2. `VLikeButton` - 좋아요 버튼 컴포넌트
3. `VCategoryTab` - 카테고리 탭 (Menu13 기반)

### Phase 2: 카드 컴포넌트 확장
4. `VProductCard` 확장 - variants 추가 (캐로셀, 품절, 할인가 등)
5. `VBannerCard` - 배너 카드 컴포넌트 (small/large)

### Phase 3: 섹션 컴포넌트
6. `VListTitle` - 섹션 타이틀 컴포넌트
7. `VProductFilter` - 필터 컨트롤 컴포넌트
8. `VProductListSection` - 상품 목록 섹션 (전체 통합)

### Phase 4: 페이지 컴포넌트
9. `VProductListPage` - 상품 목록 페이지
