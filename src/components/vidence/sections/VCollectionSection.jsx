import Box from '@mui/material/Box';
import { VCategoryCard } from '../cards';

/**
 * VCollectionSection 컴포넌트
 * VIDENCE 카테고리 컬렉션 섹션
 *
 * Props:
 * @param {Array} categories - 카테고리 배열 [{image, label}] [Required]
 * @param {function} onCategoryClick - 카테고리 클릭 핸들러 [Optional]
 * @param {number} cardWidth - 카드 너비 [Optional, 기본값: 346]
 * @param {number} cardHeight - 카드 높이 [Optional, 기본값: 500]
 * @param {number} gap - 카드 간격 [Optional, 기본값: 30]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VCollectionSection
 *   categories={[
 *     { image: '/images/clothing.jpg', label: 'CLOTHING' },
 *     { image: '/images/shoes.jpg', label: 'SHOES' },
 *   ]}
 * />
 */
function VCollectionSection({
  categories = [],
  onCategoryClick,
  cardWidth = 346,
  cardHeight = 500,
  gap = 30,
  sx = {},
}) {
  return (
    <Box
      sx={ {
        position: 'relative',
        width: '100%',
        backgroundColor: 'common.white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 12 },
        px: { xs: 2, md: 0 },
        ...sx,
      } }
    >
      <Box
        sx={ {
          display: 'grid',
          // Mobile: 2 columns, Desktop: 4 columns
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: `repeat(4, ${cardWidth}px)` },
          gap: { xs: 2, md: `${gap}px` },
          width: { xs: '100%', md: 'auto' },
        } }
      >
        { categories.map((category, index) => (
          <VCategoryCard
            key={ category.label || index }
            image={ category.image }
            label={ category.label }
            width="100%"
            height={ { xs: 250, sm: 350, md: cardHeight } }
            onClick={ () => onCategoryClick?.(index, category) }
          />
        )) }
      </Box>
    </Box>
  );
}

export default VCollectionSection;
