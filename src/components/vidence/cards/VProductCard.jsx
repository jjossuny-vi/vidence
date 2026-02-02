import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VProductCard 컴포넌트
 * VIDENCE 상품 카드. 이미지 + 상품명
 *
 * Props:
 * @param {string} image - 상품 이미지 URL [Required]
 * @param {string} title - 상품명 [Required]
 * @param {number} width - 카드 너비 [Optional, 기본값: 336]
 * @param {number} imageHeight - 이미지 높이 [Optional, 기본값: 450]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VProductCard
 *   image="/images/product.jpg"
 *   title="Cashmere 100 V-neck Knit Gray"
 * />
 */
function VProductCard({
  image,
  title,
  width = 336,
  imageHeight = 450,
  onClick,
  sx = {},
}) {
  return (
    <Box
      component="button"
      onClick={ onClick }
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width,
        flexShrink: 0,
        border: 'none',
        backgroundColor: 'transparent',
        p: 0,
        cursor: onClick ? 'pointer' : 'default',
        ...sx,
      } }
    >
      {/* Product Image */}
      <Box
        sx={ {
          position: 'relative',
          width: '100%',
          height: imageHeight,
          overflow: 'hidden',
          backgroundColor: 'grey.100',
        } }
      >
        <Box
          component="img"
          src={ image }
          alt={ title }
          sx={ {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          } }
        />
      </Box>

      {/* Product Info */}
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          pt: 2,
          pb: 4.25,
          px: 2,
          width: '100%',
        } }
      >
        <Typography
          sx={ {
            fontFamily: '"Pretendard Variable", sans-serif',
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '0.28px',
            color: 'primary.main',
            textAlign: 'left',
            wordBreak: 'break-word',
          } }
        >
          { title }
        </Typography>
      </Box>
    </Box>
  );
}

export default VProductCard;
