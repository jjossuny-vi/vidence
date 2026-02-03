import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VCollectionHero 컴포넌트
 * VIDENCE 컬렉션 히어로 섹션. 전체 화면 이미지 + 중앙 타이틀
 *
 * Props:
 * @param {string} image - 히어로 배경 이미지 URL [Required]
 * @param {string} title - 컬렉션 타이틀 텍스트 [Required]
 * @param {number} overlayOpacity - 오버레이 투명도 (0-1) [Optional, 기본값: 0.2]
 * @param {number} height - 섹션 높이 [Optional, 기본값: 812]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VCollectionHero
 *   image="/images/hero.jpg"
 *   title="LOVEMOMENT COLLECTION"
 * />
 */
function VCollectionHero({
  image,
  title,
  overlayOpacity = 0.2,
  height = 812,
  onClick,
  sx = {},
}) {
  return (
    <Box
      component={onClick ? 'button' : 'div'}
      onClick={onClick}
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 500, sm: 650, md: height },
        overflow: 'hidden',
        backgroundColor: 'common.white',
        border: 'none',
        p: 0,
        cursor: onClick ? 'pointer' : 'default',
        ...sx,
      }}
    >
      {/* Background Image */}
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

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      />

      {/* Centered Title */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Pretendard Variable", sans-serif',
            fontSize: { xs: 14, sm: 16, md: 20 },
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: { xs: '2px', sm: '3px', md: '4px' },
            color: 'common.white',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default VCollectionHero;
