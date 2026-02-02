import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VProductCard } from '../cards';

// 상수 정의
const CONTAINER_WIDTH = 1200;
const VISIBLE_CARDS = 4;
const CARD_GAP = 24;
const CARD_WIDTH = (CONTAINER_WIDTH - CARD_GAP * (VISIBLE_CARDS - 1)) / VISIBLE_CARDS;

/**
 * VMDSection 컴포넌트
 * VIDENCE MD 추천 상품 섹션
 *
 * 동작 흐름:
 * 1. 1200px 고정 영역에 4개의 상품 카드가 표시됨
 * 2. 최대 8개 상품까지 지원
 * 3. 좌/우 화살표 클릭 시 상품이 한 칸씩 이동
 * 4. 처음/끝에 도달하면 해당 방향 화살표 비활성화
 *
 * Props:
 * @param {Array} products - 상품 배열 [{image, title}], 최대 8개 [Required]
 * @param {string} description - 섹션 설명 텍스트 [Optional]
 * @param {function} onProductClick - 상품 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VMDSection
 *   products={[
 *     { image: '/images/product1.jpg', title: 'Product 1' },
 *   ]}
 * />
 */
function VMDSection({
  products = [],
  description = 'Share your own style complete with ORR on Instagram by tagging #orr or #orr_today',
  onProductClick,
  sx = {},
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 최대 8개로 제한
  const displayProducts = products.slice(0, 8);
  const maxIndex = Math.max(0, displayProducts.length - VISIBLE_CARDS);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: 880,
        backgroundColor: 'common.white',
        ...sx,
      }}
    >
      {/* Content */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 7.5,
        }}
      >
        {/* Description */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
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
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Products Carousel */}
        <Box
          sx={{
            position: 'relative',
            width: CONTAINER_WIDTH,
          }}
        >
          {/* Previous Arrow */}
          <IconButton
            onClick={handlePrev}
            disabled={!canGoPrev}
            sx={{
              position: 'absolute',
              left: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'primary.main',
              opacity: canGoPrev ? 1 : 0.3,
              zIndex: 1,
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>

          {/* Products Container */}
          <Box
            sx={{
              width: CONTAINER_WIDTH,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: `${CARD_GAP}px`,
                transform: `translateX(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px)`,
                transition: 'transform 0.4s ease',
              }}
            >
              {displayProducts.map((product, index) => (
                <VProductCard
                  key={product.title || index}
                  image={product.image}
                  title={product.title}
                  width={CARD_WIDTH}
                  onClick={() => onProductClick?.(index, product)}
                />
              ))}
            </Box>
          </Box>

          {/* Next Arrow */}
          <IconButton
            onClick={handleNext}
            disabled={!canGoNext}
            sx={{
              position: 'absolute',
              right: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'primary.main',
              opacity: canGoNext ? 1 : 0.3,
              zIndex: 1,
            }}
          >
            <ChevronRight size={24} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default VMDSection;
