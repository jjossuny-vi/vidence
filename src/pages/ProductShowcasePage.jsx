import {
  VAppShell,
  VCollectionHero,
  VProductListSection,
} from '../components/vidence';

/**
 * ProductShowcasePage 컴포넌트
 * VIDENCE 상품 쇼케이스 페이지. VAppShell(GNB + Footer) + 히어로 + 상품 목록 조합
 *
 * Props:
 * @param {string} heroImage - 히어로 배경 이미지 URL [Required]
 * @param {string} heroTitle - 히어로 타이틀 [Required]
 * @param {string} categoryTitle - 카테고리 섹션 타이틀 [Required]
 * @param {string} categoryDescription - 카테고리 설명 [Optional]
 * @param {array} categories - 카테고리 탭 목록 [Optional]
 * @param {string} activeCategory - 활성화된 카테고리 [Optional]
 * @param {array} sortOptions - 정렬 옵션 목록 [Optional]
 * @param {string} selectedSort - 선택된 정렬 [Optional]
 * @param {array} products - 상품 목록 [Required]
 * @param {boolean} hasMore - 더보기 버튼 표시 여부 [Optional, 기본값: true]
 * @param {function} onMenuClick - GNB 메뉴 클릭 핸들러 [Optional]
 * @param {function} onLogoClick - 로고 클릭 핸들러 [Optional]
 * @param {function} onCategoryChange - 카테고리 변경 핸들러 [Optional]
 * @param {function} onSortChange - 정렬 변경 핸들러 [Optional]
 * @param {function} onProductClick - 상품 클릭 핸들러 [Optional]
 * @param {function} onMoreClick - 더보기 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductShowcasePage
 *   heroImage="/images/hero.jpg"
 *   heroTitle="LOVEMOMENT COLLECTION"
 *   categoryTitle="OUTER"
 *   products={[...]}
 * />
 */
function ProductShowcasePage({
  heroImage,
  heroTitle,
  heroOverlayOpacity = 0.2,
  categoryTitle,
  categoryDescription,
  categories = [],
  activeCategory,
  sortOptions = [],
  selectedSort,
  filterCount = 0,
  products = [],
  hasMore = true,
  moreLabel = 'MORE',
  gnbMenuItems,
  gnbUserMenuItems,
  activeMenuIndex,
  onMenuClick,
  onLogoClick,
  onSearchClick,
  onUserClick,
  onCartClick,
  onCategoryChange,
  onSortChange,
  onFilterClick,
  onProductClick,
  onMoreClick,
  onFooterLinkClick,
  sx = {},
}) {
  return (
    <VAppShell
      gnbMenuItems={gnbMenuItems}
      gnbUserMenuItems={gnbUserMenuItems}
      activeMenuIndex={activeMenuIndex}
      onMenuClick={onMenuClick}
      onLogoClick={onLogoClick}
      onSearchClick={onSearchClick}
      onUserClick={onUserClick}
      onCartClick={onCartClick}
      footerProps={{ onLinkClick: onFooterLinkClick }}
      sx={sx}
    >
      {/* Collection Hero */}
      <VCollectionHero
        image={heroImage}
        title={heroTitle}
        overlayOpacity={heroOverlayOpacity}
        height={812}
      />

      {/* Product List Section */}
      <VProductListSection
        title={categoryTitle}
        description={categoryDescription}
        categories={categories}
        activeCategory={activeCategory}
        sortOptions={sortOptions}
        selectedSort={selectedSort}
        filterCount={filterCount}
        products={products}
        hasMore={hasMore}
        moreLabel={moreLabel}
        onCategoryChange={onCategoryChange}
        onSortChange={onSortChange}
        onFilterClick={onFilterClick}
        onProductClick={onProductClick}
        onMoreClick={onMoreClick}
      />
    </VAppShell>
  );
}

export default ProductShowcasePage;
