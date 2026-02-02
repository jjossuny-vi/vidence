import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Play } from 'lucide-react';

/**
 * VSNSCard 컴포넌트
 * VIDENCE SNS 피드 카드. 이미지 + 비디오 아이콘 (선택)
 *
 * Props:
 * @param {string} image - SNS 이미지 URL [Required]
 * @param {boolean} hasVideo - 비디오 아이콘 표시 여부 [Optional, 기본값: false]
 * @param {number} width - 카드 너비 [Optional, 기본값: 393.333]
 * @param {number} height - 카드 높이 [Optional, 기본값: 466]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VSNSCard image="/images/sns.jpg" />
 * <VSNSCard image="/images/sns-video.jpg" hasVideo />
 */
function VSNSCard({
  image,
  hasVideo = false,
  width = 393.333,
  height = 466,
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
        alignItems: 'center',
        width,
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
      <Box
        sx={ {
          position: 'relative',
          width: '100%',
          height,
          overflow: 'hidden',
        } }
      >
        {/* SNS Image */}
        <Box
          component="img"
          src={ image }
          alt="SNS feed"
          sx={ {
            position: 'absolute',
            top: '-3%',
            left: 0,
            width: '100%',
            height: '128%',
            objectFit: 'cover',
          } }
        />

        {/* Video Icon */}
        { hasVideo && (
          <Box
            sx={ {
              position: 'absolute',
              top: 20,
              right: 20,
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
            } }
          >
            <Play size={ 16 } fill="currentColor" />
          </Box>
        ) }
      </Box>
    </Box>
  );
}

export default VSNSCard;
