import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * VProductCard 컴포넌트
 * VIDENCE 상품 카드. 다양한 variants 지원
 *
 * Props:
 * @param {string} image - 상품 이미지 URL [Required]
 * @param {string} title - 상품명 [Required]
 * @param {number} price - 가격 [Optional]
 * @param {number} originalPrice - 원가 (할인 시) [Optional]
 * @param {number} discountRate - 할인율 (%) [Optional]
 * @param {string} description - 부가 설명 [Optional]
 * @param {boolean} isNew - NEW 태그 표시 여부 [Optional, 기본값: false]
 * @param {boolean} isCollection - COLLECTION 태그 표시 여부 [Optional, 기본값: false]
 * @param {boolean} isOutOfStock - 품절 여부 [Optional, 기본값: false]
 * @param {boolean} isPreOrder - 예약 주문 여부 [Optional, 기본값: false]
 * @param {boolean} hasCarousel - 캐로셀 UI 표시 여부 [Optional, 기본값: false]
 * @param {array} colorOptions - 컬러 옵션 배열 [Optional]
 * @param {number} currentSlide - 현재 슬라이드 인덱스 [Optional, 기본값: 0]
 * @param {number} totalSlides - 전체 슬라이드 수 [Optional, 기본값: 1]
 * @param {boolean} isLiked - 좋아요 상태 [Optional, 기본값: false]
 * @param {number} width - 카드 너비 [Optional, 기본값: 336]
 * @param {number} imageHeight - 이미지 높이 [Optional, 기본값: 450]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {function} onLikeClick - 좋아요 클릭 핸들러 [Optional]
 * @param {function} onPrevClick - 이전 슬라이드 핸들러 [Optional]
 * @param {function} onNextClick - 다음 슬라이드 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VProductCard
 *   image="/images/product.jpg"
 *   title="Cashmere 100 V-neck Knit Gray"
 *   price={298}
 * />
 * <VProductCard
 *   image="/images/product.jpg"
 *   title="Cashmere 100 V-neck Knit Gray"
 *   price={298}
 *   originalPrice={398}
 *   discountRate={25}
 *   isNew
 * />
 */
function VProductCard({
  image,
  title,
  price,
  originalPrice,
  discountRate,
  description,
  isNew = false,
  isCollection = false,
  isOutOfStock = false,
  isPreOrder = false,
  hasCarousel = false,
  colorOptions = [],
  currentSlide = 0,
  totalSlides = 1,
  isLiked = false,
  width = 336,
  imageHeight = 450,
  onClick,
  onLikeClick,
  onPrevClick,
  onNextClick,
  sx = {},
}) {
  const hasColorOptions = colorOptions.length > 0;
  const showBottomBar = hasCarousel || hasColorOptions;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width,
        flexShrink: 0,
        ...sx,
      }}
    >
      {/* Product Image Container */}
      <Box
        component="button"
        onClick={onClick}
        sx={{
          position: 'relative',
          width: '100%',
          height: imageHeight,
          overflow: 'hidden',
          backgroundColor: 'grey.100',
          border: 'none',
          p: 0,
          cursor: onClick ? 'pointer' : 'default',
        }}
      >
        {/* Main Image */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* NEW Tag */}
        {isNew && !isOutOfStock && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 20,
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
              NEW
            </Typography>
          </Box>
        )}

        {/* PRE-ORDER Tag */}
        {isPreOrder && !isOutOfStock && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 20,
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
              PRE-ORDER
            </Typography>
          </Box>
        )}

        {/* COLLECTION Tag */}
        {isCollection && !isOutOfStock && (
          <Box
            sx={{
              position: 'absolute',
              bottom: showBottomBar ? 66 : 20,
              left: 20,
              px: 1,
              py: 0.75,
              backgroundColor: 'primary.main',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontSize: 10,
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '1px',
                color: 'common.white',
                textTransform: 'uppercase',
              }}
            >
              COLLECTION
            </Typography>
          </Box>
        )}

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(34, 34, 34, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontSize: 13,
                fontWeight: 400,
                lineHeight: 1.8,
                letterSpacing: '2.6px',
                color: 'common.white',
                textTransform: 'uppercase',
              }}
            >
              OUT OF STOCK
            </Typography>
          </Box>
        )}

        {/* Carousel Navigation */}
        {hasCarousel && !isOutOfStock && (
          <>
            {/* Left Arrow */}
            <Box
              component="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrevClick?.();
              }}
              sx={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                p: 0,
              }}
            >
              <ChevronLeft size={24} color="#222" />
            </Box>

            {/* Right Arrow */}
            <Box
              component="button"
              onClick={(e) => {
                e.stopPropagation();
                onNextClick?.();
              }}
              sx={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                p: 0,
              }}
            >
              <ChevronRight size={24} color="#222" />
            </Box>

            {/* Carousel Indicator Bar */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 46,
                left: 0,
                right: 0,
                display: 'flex',
              }}
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    height: 2,
                    backgroundColor: index === currentSlide ? 'primary.main' : 'grey.200',
                  }}
                />
              ))}
            </Box>
          </>
        )}

        {/* Bottom Bar (Color Options + Like) */}
        {showBottomBar && !isOutOfStock && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 46,
              backgroundColor: 'common.white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 1.875,
            }}
          >
            {/* Color Options */}
            <Box sx={{ display: 'flex', gap: 1.25 }}>
              {colorOptions.map((color, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: color,
                  }}
                />
              ))}
            </Box>

            {/* Like Button */}
            <Box
              component="button"
              onClick={(e) => {
                e.stopPropagation();
                onLikeClick?.();
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                p: 1.25,
              }}
            >
              <Heart
                size={20}
                fill={isLiked ? '#222' : 'none'}
                color="#222"
                strokeWidth={1.5}
              />
            </Box>
          </Box>
        )}
      </Box>

      {/* Product Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 1,
          pt: 2,
          pb: 4.25,
          px: 2,
          width: '100%',
          backgroundColor: 'common.white',
        }}
      >
        {/* Product Title */}
        <Typography
          sx={{
            fontFamily: '"Pretendard Variable", sans-serif',
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '0.28px',
            color: 'primary.main',
            textAlign: 'left',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        {description && (
          <Typography
            sx={{
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'text.secondary',
              textAlign: 'left',
            }}
          >
            {description}
          </Typography>
        )}

        {/* Price */}
        {price !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.625 }}>
            {/* Original Price (Strikethrough) */}
            {originalPrice && (
              <Typography
                sx={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontSize: 11,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '1.1px',
                  color: 'text.secondary',
                  textDecoration: 'line-through',
                }}
              >
                ${originalPrice}
              </Typography>
            )}

            {/* Current Price */}
            <Typography
              sx={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontSize: 12,
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '1.2px',
                color: 'primary.main',
              }}
            >
              ${price}
            </Typography>

            {/* Discount Rate */}
            {discountRate && (
              <Typography
                sx={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontSize: 11,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '1.1px',
                  color: 'error.main',
                }}
              >
                {discountRate}%
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default VProductCard;
