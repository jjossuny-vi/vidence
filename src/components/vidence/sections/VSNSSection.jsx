import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VHorizontalDivider } from '../shared';
import { VSNSCard } from '../cards';

/**
 * VSNSSection 컴포넌트
 * VIDENCE SNS 피드 갤러리 섹션
 *
 * Props:
 * @param {Array} feeds - SNS 피드 배열 [{image, hasVideo}] [Required]
 * @param {string} description - 섹션 설명 텍스트 [Optional]
 * @param {function} onFeedClick - 피드 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VSNSSection
 *   feeds={[
 *     { image: '/images/sns1.jpg', hasVideo: false },
 *     { image: '/images/sns2.jpg', hasVideo: true },
 *   ]}
 * />
 */
function VSNSSection({
  feeds = [],
  description = 'Share your own style on Instagram',
  onFeedClick,
  sx = {},
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'common.white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 12.5,
        py: 12.5,
        ...sx,
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

      {/* SNS Feeds Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 7.5,
          px: 20,
          width: '100%',
        }}
      >
        {/* Feeds Grid */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 0.5,
            width: 1200,
            mx: 'auto',
          }}
        >
          {feeds.slice(0, 4).map((feed, index) => (
            <VSNSCard
              key={index}
              image={feed.image}
              hasVideo={feed.hasVideo}
              width={393.333}
              height={466}
              onClick={() => onFeedClick?.(index, feed)}
            />
          ))}
        </Box>

        {/* Horizontal Divider */}
        <Box
          sx={{
            width: '100%',
          }}
        >
          <VHorizontalDivider activeIndex={0} />
        </Box>
      </Box>
    </Box>
  );
}

export default VSNSSection;
