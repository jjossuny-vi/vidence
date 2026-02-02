import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VEpisodeCard 컴포넌트
 * VIDENCE 에피소드 카드. 커버 이미지 + 에피소드 정보
 *
 * Props:
 * @param {string} image - 에피소드 커버 이미지 URL [Required]
 * @param {string} episodeNumber - 에피소드 번호 (예: 'EPISODE 8') [Required]
 * @param {string} title - 에피소드 제목 [Required]
 * @param {string} size - 카드 크기 ('large' | 'small') [Optional, 기본값: 'large']
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VEpisodeCard
 *   image="/images/episode.jpg"
 *   episodeNumber="EPISODE 8"
 *   title="Why did you plan Winter Blazer?"
 * />
 */
function VEpisodeCard({
  image,
  episodeNumber,
  title,
  size = 'large',
  onClick,
  sx = {},
}) {
  const isLarge = size === 'large';
  const cardWidth = isLarge ? 802 : 534;
  const cardHeight = isLarge ? 479 : 319;
  const gap = isLarge ? 25 : 16.65;
  const numberSize = isLarge ? 12 : 8;
  const titleSize = isLarge ? 18 : 12;

  return (
    <Box
      component="button"
      onClick={ onClick }
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: `${gap}px`,
        width: cardWidth,
        flexShrink: 0,
        border: 'none',
        backgroundColor: 'transparent',
        p: 0,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.3s ease',
        '&:hover': onClick ? {
          transform: 'scale(1.02)',
        } : {},
        ...sx,
      } }
    >
      {/* Cover Image */}
      <Box
        sx={ {
          position: 'relative',
          width: '100%',
          height: cardHeight,
          overflow: 'hidden',
        } }
      >
        <Box
          component="img"
          src={ image }
          alt={ title }
          sx={ {
            position: 'absolute',
            top: '-25%',
            left: '-8%',
            width: '108%',
            height: '265%',
            objectFit: 'cover',
          } }
        />
      </Box>

      {/* Title Info */}
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isLarge ? 1.375 : 0.9,
          width: '100%',
        } }
      >
        <Typography
          sx={ {
            fontFamily: '"Pretendard Variable", sans-serif',
            fontSize: numberSize,
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: `${numberSize * 0.1}px`,
            color: 'primary.main',
            textTransform: 'uppercase',
          } }
        >
          { episodeNumber }
        </Typography>
        <Typography
          sx={ {
            fontFamily: '"Pretendard Variable", sans-serif',
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.4,
            color: 'primary.main',
          } }
        >
          { title }
        </Typography>
      </Box>
    </Box>
  );
}

export default VEpisodeCard;
