import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import VMenu from './VMenu';

/**
 * VProductFilter 컴포넌트
 * VIDENCE 상품 필터. 카테고리 탭 + 필터/정렬 컨트롤
 *
 * Props:
 * @param {array} categories - 카테고리 목록 [{ label: string, value: string }] [Required]
 * @param {string} activeCategory - 활성화된 카테고리 값 [Optional]
 * @param {array} sortOptions - 정렬 옵션 목록 [{ label: string, value: string }] [Optional]
 * @param {string} selectedSort - 선택된 정렬 값 [Optional]
 * @param {number} filterCount - 적용된 필터 수 [Optional, 기본값: 0]
 * @param {function} onCategoryChange - 카테고리 변경 핸들러 [Optional]
 * @param {function} onSortChange - 정렬 변경 핸들러 [Optional]
 * @param {function} onFilterClick - 필터 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VProductFilter
 *   categories={[
 *     { label: 'ALL', value: 'all' },
 *     { label: 'JACKET', value: 'jacket' },
 *     { label: 'JUMPER', value: 'jumper' },
 *   ]}
 *   activeCategory="all"
 *   sortOptions={[
 *     { label: 'NEW ITEM', value: 'new' },
 *     { label: 'PRICE LOW', value: 'price_asc' },
 *   ]}
 *   selectedSort="new"
 * />
 */
function VProductFilter({
  categories = [],
  activeCategory,
  sortOptions = [],
  selectedSort,
  filterCount = 0,
  onCategoryChange,
  onSortChange,
  onFilterClick,
  sx = {},
}) {
  const selectedSortOption = sortOptions.find((opt) => opt.value === selectedSort);
  const sortLabel = selectedSortOption?.label || 'NEW ITEM';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        ...sx,
      }}
    >
      {/* Category Tabs */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}
      >
        {categories.map((category) => (
          <VMenu
            key={category.value}
            label={category.label}
            isActive={activeCategory === category.value}
            hasUnderline={activeCategory === category.value}
            onClick={() => onCategoryChange?.(category.value)}
          />
        ))}
      </Box>

      {/* Filter & Sort Controls */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2.125,
        }}
      >
        {/* Filter Button */}
        <Box
          component="button"
          onClick={onFilterClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            p: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: 11,
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '1.1px',
              color: 'primary.main',
              textTransform: 'uppercase',
            }}
          >
            FILTER
          </Typography>
          {filterCount > 0 && (
            <Typography
              sx={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontSize: 11,
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '1.1px',
                color: 'primary.main',
              }}
            >
              {filterCount}
            </Typography>
          )}
          <SlidersHorizontal size={16} color="#222" />
        </Box>

        {/* Sort Dropdown */}
        <Box
          component="button"
          onClick={() => {
            // In a real implementation, this would open a dropdown menu
            if (sortOptions.length > 0) {
              const currentIndex = sortOptions.findIndex((opt) => opt.value === selectedSort);
              const nextIndex = (currentIndex + 1) % sortOptions.length;
              onSortChange?.(sortOptions[nextIndex].value);
            }
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            p: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '1.3px',
              color: 'primary.main',
              textTransform: 'uppercase',
            }}
          >
            {sortLabel}
          </Typography>
          <ChevronDown size={15} color="#222" />
        </Box>
      </Box>
    </Box>
  );
}

export default VProductFilter;
