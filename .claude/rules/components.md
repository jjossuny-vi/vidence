# Components

---

## VIDENCE (브랜드 전용)

VIDENCE 브랜드를 위한 전용 컴포넌트. Figma 디자인 기반 구현.

### Shared (공통)

- VMenu: 메뉴 아이템. GNB, CTA 버튼 등에서 재사용. label, isActive, hasUnderline, variant 지원 (`components/vidence/shared/VMenu.jsx`)
- VHorizontalDivider: 3단 분할 페이지 구분선. activeIndex로 현재 위치 표시 (`components/vidence/shared/VHorizontalDivider.jsx`)
- VBreadcrumb: 세로 방향 카테고리 라벨. Hero, Video 섹션 좌측 사용 (`components/vidence/shared/VBreadcrumb.jsx`)
- VBoxButton: 박스형 버튼. outlined/filled variant, small/medium/large 크기. 더보기, 장바구니 담기 등 (`components/vidence/shared/VBoxButton.jsx`)
- VLikeButton: 좋아요/위시리스트 버튼. isLiked 상태, small/medium/large 크기 (`components/vidence/shared/VLikeButton.jsx`)
- VListTitle: 섹션 타이틀. 카테고리 제목 + 설명 텍스트. left/center 정렬 (`components/vidence/shared/VListTitle.jsx`)
- VProductFilter: 상품 필터. 카테고리 탭 + 필터/정렬 컨트롤 (`components/vidence/shared/VProductFilter.jsx`)

### Cards (카드)

- VCategoryCard: 카테고리 카드. 이미지 + 오버레이 + 라벨 (`components/vidence/cards/VCategoryCard.jsx`)
- VEpisodeCard: 에피소드 카드. 커버 이미지 + 에피소드 번호/제목. size(large/small) 지원 (`components/vidence/cards/VEpisodeCard.jsx`)
- VProductCard: 상품 카드. 다양한 variants 지원 (NEW 태그, 품절, 할인가, 캐로셀, 컬러 옵션, 좋아요). 이미지 + 상품명 + 가격 (`components/vidence/cards/VProductCard.jsx`)
- VSNSCard: SNS 피드 카드. 이미지 + 비디오 아이콘(선택) (`components/vidence/cards/VSNSCard.jsx`)
- VBannerCard: 배너 카드. 프로모션/컬렉션 배너. small/large 크기. 이미지 + 카테고리 라벨 + 타이틀(large) (`components/vidence/cards/VBannerCard.jsx`)

### Sections (섹션)

- VAppShell: VIDENCE 앱 셸. VGNB(헤더) + VFooter(푸터) 통합 레이아웃. 스크롤 시 GNB sticky + 배경 투명 효과. 모든 VIDENCE 페이지의 기본 레이아웃 (`components/vidence/sections/VAppShell.jsx`)
- VGNB: 글로벌 네비게이션 바. 로고 + 메뉴 + 사용자 아이콘. 스크롤 시 sticky + 배경 투명 전환 (`components/vidence/sections/VGNB.jsx`)
- VHeroSection: 메인 히어로 섹션. 전체 화면 이미지 + 제목 + CTA + 구분선 (`components/vidence/sections/VHeroSection.jsx`)
- VCollectionHero: 컬렉션 히어로 섹션. 전체 화면 이미지 + 중앙 타이틀 + 오버레이. 심플한 컬렉션 배너용 (`components/vidence/sections/VCollectionHero.jsx`)
- VVideoSection: 비디오/이미지 갤러리 섹션. 비디오 썸네일 + 정적 이미지 + 설명 (`components/vidence/sections/VVideoSection.jsx`)
- VStoreSection: 팝업 스토어 소개 섹션. 전체 너비 이미지 + 세로 라벨 + 설명 (`components/vidence/sections/VStoreSection.jsx`)
- VCollectionSection: 카테고리 컬렉션 섹션. VCategoryCard 그리드 (`components/vidence/sections/VCollectionSection.jsx`)
- VEpisodeSection: 에피소드 캐로셀 섹션. 다크 배경 + VEpisodeCard 캐로셀 (`components/vidence/sections/VEpisodeSection.jsx`)
- VMDSection: MD 추천 상품 섹션. VProductCard 그리드 + 설명 (`components/vidence/sections/VMDSection.jsx`)
- VSNSSection: SNS 피드 갤러리 섹션. VSNSCard 그리드 + 설명 (`components/vidence/sections/VSNSSection.jsx`)
- VFooter: 푸터. 링크 섹션 4개 + 저작권 (`components/vidence/sections/VFooter.jsx`)
- VProductListSection: 상품 목록 섹션. 타이틀 + 필터 + 상품 그리드 + 더보기 버튼. VListTitle, VProductFilter, VProductCard, VBannerCard, VBoxButton 통합 (`components/vidence/sections/VProductListSection.jsx`)

### Pages (페이지)

- VidenceMainPage: VIDENCE 메인 페이지. VAppShell 기반으로 모든 섹션 통합 (`pages/VidenceMainPage.jsx`)
- ProductShowcasePage: VIDENCE 상품 쇼케이스 페이지. VAppShell + VCollectionHero + VProductListSection 조합 (`pages/ProductShowcasePage.jsx`)

### 예정 (향후 구현)

- VHeroVisual: 텍스트를 배제한 대형 이미지 섹션 [예정]
- VEditorialGrid: 핀터레스트 스타일 비정형 이미지 배치 [예정]
- VProductDetailZoom: 소재 질감 강조 줌 기능 상세 섹션 [예정]
- VColorFilter: 브랜드 포인트 컬러 기반 필터 바 [예정]

---

## Starter-Kit (범용)

브랜드 독립적인 재사용 가능한 기본 UI 컴포넌트. 어떤 프로젝트에서도 확장/재사용 가능.

### Layout

- PhiSplit: 황금비 분할 레이아웃 (`components/layout/PhiSplit.jsx`)
- SplitScreen: 좌우 분할 레이아웃. ratio, stackAt, stackOrder 지원 (`components/layout/SplitScreen.jsx`)
- HeroStack: 수직 레이아웃. Hero(중앙) + Footer(하단) flex-grow 패턴 (`components/layout/HeroStack.jsx`)
- LineGrid: 그리드 아이템 사이 1px 라인 자동 삽입 (`components/layout/LineGrid.jsx`)
- CenteredAsideLayout: 중앙 + 사이드 레이아웃 (`components/layout/CenteredAsideLayout.jsx`)
- BentoGrid: 벤토 그리드 레이아웃 (`components/layout/BentoGrid.jsx`)
- RatioContainer: 비율 기반 컨테이너 (`components/layout/RatioContainer.jsx`)
- FullPageContainer: 전체 페이지 컨테이너 (`components/layout/FullPageContainer.jsx`)
- StickyBackground: 고정 배경 + 콘텐츠 스크롤 레이아웃. 배경 고정 상태로 콘텐츠 스크롤 후 전체 섹션 스크롤. framer-motion useScroll/useTransform (`components/layout/StickyBackground.jsx`)
- BrokenGridGallery: 브로큰 그리드 갤러리. 비정형 산개 레이아웃 + MouseParallax 내장. items, height, imageScale, spread, zIndex 기반 깊이감 (`components/layout/BrokenGridGallery.jsx`)

### Container

- PageContainer: 반응형 페이지 컨테이너. PC maxWidth 고정, 모바일 100% (`components/container/PageContainer.jsx`)
- SectionContainer: 페이지 섹션 컨테이너. MUI Container 기반. maxWidth, disableGutters, disablePadding, fullHeight, bgcolor, spacing 지원 (`components/container/SectionContainer.jsx`)
- ContentArea: 반응형 콘텐츠 영역. 섹션 내부에서 콘텐츠 maxWidth 제한 및 중앙 정렬. maxWidth, disableGutters 지원 (`components/container/ContentArea.jsx`)
- CarouselContainer: 캐로셀 컨테이너 (`components/container/CarouselContainer.jsx`)

### Card

- CardContainer: 카드 기본 컨테이너. variant, padding, elevation (`components/card/CardContainer.jsx`)
- CustomCard: 미디어+콘텐츠 카드. vertical/horizontal/overlay 레이아웃 (`components/card/CustomCard.jsx`)

### Input

- FileDropzone: 파일 드래그&드롭 영역 (`components/input/FileDropzone.jsx`)
- SearchBar: 검색 입력 바 (`components/input/SearchBar.jsx`)
- TagInput: 태그 입력 필드 (`components/input/TagInput.jsx`)
- UnderlineInput: 밑줄만 있는 텍스트 인풋. size(small/medium/large) (`components/shared/UnderlineInput.jsx`)
- UnderlineSelect: 밑줄만 있는 셀렉트. MUI Select 기반 (`components/shared/UnderlineSelect.jsx`)

### Media

- AspectMedia: 비율 기반 미디어 컨테이너 (`components/media/AspectMedia.jsx`)
- ImageCarousel: 이미지 캐로셀 (`components/media/ImageCarousel.jsx`)
- ImageTransition: 이미지 트랜지션 효과 (`components/media/ImageTransition.jsx`)
- VideoScrubbing: 비디오 스크러빙 (`components/media/VideoScrubbing.jsx`)
- VideoSlide: 가로 스크롤용 비디오 슬라이드. HorizontalScroll 내부에서 세로 스크롤 진행도 기반 비디오 스크러빙. slideIndex, totalSlides 지원 (`components/media/VideoSlide.jsx`)
- CarouselIndicator: 캐로셀 인디케이터 (`components/media/CarouselIndicator.jsx`)
- HorizontalScroll: 세로 스크롤 → 가로 이동 변환 컨테이너. framer-motion 사용 (`components/media/HorizontalScroll.jsx`)
- MaskRevealSection: 스크롤 기반 마스킹 전환. 원형 마스크 확장 + 핫스팟. framer-motion useScroll/useTransform (`components/media/MaskRevealSection.jsx`)

### Navigation

- NavMenu: 네비게이션 메뉴 (`components/navigation/NavMenu.jsx`)
- CategoryTab: 카테고리 탭 (`components/navigation/CategoryTab.jsx`)
- GNB: 반응형 글로벌 네비게이션 바. 데스크탑 메뉴 / 모바일 Drawer (`components/navigation/GNB.jsx`)
- AppShell: 반응형 앱 셸. GNB + 메인 콘텐츠 영역 (`components/navigation/AppShell.jsx`)

### Typography

- FitText: 컨테이너에 맞춤 텍스트 (`components/typography/FitText.jsx`)
- HighlightedTypography: 하이라이트 타이포그래피 (`components/typography/HighlightedTypography.jsx`)
- InlineTypography: 인라인 타이포그래피 (`components/typography/InlineTypography.jsx`)
- StretchedHeadline: 스트레치 헤드라인 (`components/typography/StretchedHeadline.jsx`)
- StyledParagraph: 스타일드 문단 (`components/typography/StyledParagraph.jsx`)
- Title: 타이틀 컴포넌트 (`components/typography/Title.jsx`)
- QuotedContainer: 인용 컨테이너 (`components/typography/QuotedContainer.jsx`)
- SectionTitle: 섹션 타이틀. Adamina 세리프, 중앙 정렬, 반응형 폰트 사이즈 (`components/typography/SectionTitle.jsx`)
- MarqueeText: 스크롤 연동 무한 텍스트. 스크롤 방향에 따라 텍스트 이동. scrollDirection, speed, separator 지원 (`components/typography/MarqueeText.jsx`)

### Shared (범용)

- QuantitySelector: 수량 선택기. - / + 버튼과 숫자 표시 (`components/shared/QuantitySelector.jsx`)
- SelectField: 드롭다운 선택 필드. 라벨 + 선택값 + 화살표 (`components/shared/SelectField.jsx`)
- Breadcrumb: 네비게이션 경로 표시 (`components/shared/Breadcrumb.jsx`)
- ArrowLink: 화살표 링크. → 아이콘 + 텍스트 (`components/shared/ArrowLink.jsx`)
- InteractiveHotspot: 이미지 위 핫스팟. 호버 시 툴팁 노출. position, label, description, tooltipPosition, variant (`components/shared/InteractiveHotspot.jsx`)

### Pages

- Page1: 샘플 페이지 1 (`pages/Page1.jsx`)
- Page2: 샘플 페이지 2 (`pages/Page2.jsx`)
- Page3: 샘플 페이지 3 (`pages/Page3.jsx`)
