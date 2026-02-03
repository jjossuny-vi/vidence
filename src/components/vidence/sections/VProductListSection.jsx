import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VListTitle from '../shared/VListTitle';
import VProductFilter from '../shared/VProductFilter';
import VProductCard from '../cards/VProductCard';
import VBannerCard from '../cards/VBannerCard';
import VBoxButton from '../shared/VBoxButton';

/**
 * VProductListSection 컴포넌트
 * VIDENCE 상품 목록 섹션. 타이틀 + 필터 + 상품 그리드 + 더보기 버튼
 *
 * Props:
 * @param {string} title - 섹션 타이틀 [Required]
 * @param {string} description - 섹션 설명 [Optional]
 * @param {array} categories - 카테고리 목록 [{ label, value }] [Optional]
 * @param {string} activeCategory - 활성화된 카테고리 [Optional]
 * @param {array} sortOptions - 정렬 옵션 [{ label, value }] [Optional]
 * @param {string} selectedSort - 선택된 정렬 [Optional]
 * @param {number} filterCount - 적용된 필터 수 [Optional]
 * @param {array} products - 상품 목록. 배너는 type: 'banner' 추가하여 포함 [Optional]
 * @param {boolean} hasMore - 더보기 버튼 표시 여부 [Optional, 기본값: true]
 * @param {string} moreLabel - 더보기 버튼 텍스트 [Optional, 기본값: 'MORE']
 * @param {function} onCategoryChange - 카테고리 변경 핸들러 [Optional]
 * @param {function} onSortChange - 정렬 변경 핸들러 [Optional]
 * @param {function} onFilterClick - 필터 클릭 핸들러 [Optional]
 * @param {function} onProductClick - 상품 클릭 핸들러 [Optional]
 * @param {function} onMoreClick - 더보기 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VProductListSection
 *   title="OUTER"
 *   description="COMBINING CHIC AND MODERNITY"
 *   categories={[{ label: 'ALL', value: 'all' }]}
 *   products={[{ id: 1, image: '...', title: '...', price: 298 }]}
 * />
 */
function VProductListSection({
  title,
  description,
  categories = [],
  activeCategory,
  sortOptions = [],
  selectedSort,
  filterCount = 0,
  products = [],
  hasMore = true,
  moreLabel = 'MORE',
  onCategoryChange,
  onSortChange,
  onFilterClick,
  onProductClick,
  onMoreClick,
  sx = {},
}) {
  // Merge products and banners for grid layout
  const renderGridItem = (item, index) => {
    if (item.type === 'banner') {
      return (
        <Grid
          key={`banner-${item.id || index}`}
          size={{ xs: 12, sm: item.size === 'large' ? 8 : 4, md: item.size === 'large' ? 6 : 3 }}
        >
          <VBannerCard
            image={item.image}
            category={item.category}
            size={item.size}
            title={item.title}
            ctaLabel={item.ctaLabel}
            width="100%"
            onClick={() => onProductClick?.(item)}
          />
        </Grid>
      );
    }

    return (
      <Grid
        key={`product-${item.id || index}`}
        size={{ xs: 6, sm: 4, md: 3 }}
      >
        <VProductCard
          image={item.image}
          title={item.title}
          price={item.price}
          originalPrice={item.originalPrice}
          discountRate={item.discountRate}
          description={item.description}
          isNew={item.isNew}
          isCollection={item.isCollection}
          isOutOfStock={item.isOutOfStock}
          isPreOrder={item.isPreOrder}
          hasCarousel={item.hasCarousel}
          colorOptions={item.colorOptions}
          isLiked={item.isLiked}
          width="100%"
          onClick={() => onProductClick?.(item)}
        />
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        ...sx,
      }}
    >
      {/* Section Title */}
      <VListTitle title={title} description={description} />

      {/* Filter & Products Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          px: { xs: 2, md: 5 },
          py: 5,
        }}
      >
        {/* Filter Bar */}
        {categories.length > 0 && (
          <Box sx={{ width: '100%', maxWidth: 1380 }}>
            <VProductFilter
              categories={categories}
              activeCategory={activeCategory}
              sortOptions={sortOptions}
              selectedSort={selectedSort}
              filterCount={filterCount}
              onCategoryChange={onCategoryChange}
              onSortChange={onSortChange}
              onFilterClick={onFilterClick}
            />
          </Box>
        )}

        {/* Product Grid */}
        <Box sx={{ width: '100%', maxWidth: 1380 }}>
          <Grid container spacing={1.5}>
            {products.map((product, index) => renderGridItem(product, index))}
          </Grid>
        </Box>

        {/* More Button */}
        {hasMore && (
          <VBoxButton
            label={moreLabel}
            variant="outlined"
            size="large"
            onClick={onMoreClick}
          />
        )}
      </Box>
    </Box>
  );
}

export default VProductListSection;
