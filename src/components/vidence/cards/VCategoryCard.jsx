import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VCategoryCard 컴포넌트
 * VIDENCE 카테고리 카드. 이미지 + 오버레이 + 라벨
 *
 * Props:
 * @param {string} image - 카테고리 이미지 URL [Required]
 * @param {string} label - 카테고리 라벨 [Required]
 * @param {number} width - 카드 너비 [Optional, 기본값: 346]
 * @param {number} height - 카드 높이 [Optional, 기본값: 500]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VCategoryCard image="/images/clothing.jpg" label="CLOTHING" />
 */
function VCategoryCard({
  image,
  label,
  width = 346,
  height = 500,
  onClick,
  sx = {},
}) {
  return (
    <Box
      component="button"
      onClick={ onClick }
      sx={ {
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        border: 'none',
        p: 0,
        cursor: onClick ? 'pointer' : 'default',
        '&:hover .category-overlay': onClick ? {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        } : {},
        ...sx,
      } }
    >
      {/* Background Image */}
      <Box
        component="img"
        src={ image }
        alt={ label }
        sx={ {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        } }
      />

      {/* Overlay */}
      <Box
        className="category-overlay"
        sx={ {
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease',
        } }
      />

      {/* Label */}
      <Typography
        sx={ {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: '"Pretendard Variable", sans-serif',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '2.8px',
          color: 'common.white',
          textAlign: 'center',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        } }
      >
        { label }
      </Typography>
    </Box>
  );
}

export default VCategoryCard;
