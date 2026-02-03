import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VBannerCard 컴포넌트
 * VIDENCE 배너 카드. 프로모션/컬렉션 배너용
 *
 * Props:
 * @param {string} image - 배너 이미지 URL [Required]
 * @param {string} category - 카테고리 라벨 [Required]
 * @param {string} size - 배너 크기 ('small' | 'large') [Optional, 기본값: 'small']
 * @param {string} title - 메인 타이틀 (large only) [Optional]
 * @param {string} subtitle - 서브 타이틀 (large only) [Optional]
 * @param {string} ctaLabel - CTA 버튼 텍스트 (large only) [Optional]
 * @param {number} width - 카드 너비 [Optional]
 * @param {number} imageHeight - 이미지 높이 [Optional, 기본값: 450]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {function} onCtaClick - CTA 버튼 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VBannerCard
 *   image="/images/banner.jpg"
 *   category="GIFT COLLECTION"
 * />
 * <VBannerCard
 *   image="/images/banner.jpg"
 *   category="GIFT COLLECTION"
 *   size="large"
 *   title="CUBIC CYLINDER KEYRING"
 *   ctaLabel="BAGS"
 * />
 */
function VBannerCard({
  image,
  category,
  size = 'small',
  title,
  subtitle,
  ctaLabel,
  width,
  imageHeight = 450,
  onClick,
  onCtaClick,
  sx = {},
}) {
  const isLarge = size === 'large';
  const defaultWidth = isLarge ? 684 : 336;
  const cardWidth = width || defaultWidth;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: cardWidth,
        flexShrink: 0,
        ...sx,
      }}
    >
      {/* Banner Image Container */}
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
          alt={category}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Large Banner Overlay Content */}
        {isLarge && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              color: 'common.white',
            }}
          >
            {/* Category Label */}
            <Typography
              sx={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontSize: 13,
                fontWeight: 400,
                lineHeight: 1.8,
                letterSpacing: '2.6px',
                textTransform: 'uppercase',
              }}
            >
              {category}
            </Typography>

            {/* Title */}
            {title && (
              <Typography
                sx={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '4.8px',
                  textTransform: 'uppercase',
                  whiteSpace: 'pre-line',
                  mt: 0.5,
                }}
              >
                {title}
              </Typography>
            )}

            {/* Subtitle */}
            {subtitle && (
              <Typography
                sx={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: 1.8,
                  letterSpacing: '2.6px',
                  mt: 1,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}

        {/* CTA Button (Large only) */}
        {isLarge && ctaLabel && (
          <Box
            component="button"
            onClick={(e) => {
              e.stopPropagation();
              onCtaClick?.();
            }}
            sx={{
              position: 'absolute',
              bottom: 24,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 26,
              px: 0,
              borderBottom: '1px solid',
              borderColor: 'primary.main',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
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
              {ctaLabel}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Product Info (Small only) */}
      {!isLarge && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            pt: 2,
            pb: 4.25,
            px: 2,
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: 13,
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '1.3px',
              color: 'primary.main',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default VBannerCard;
