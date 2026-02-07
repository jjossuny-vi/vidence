import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VMenu } from '../shared';
import VideoScrubbing from '../../media/VideoScrubbing';

/**
 * VHeroSection 컴포넌트
 * VIDENCE 메인 히어로 섹션. 전체 화면 이미지/비디오 + 제목 + CTA
 * 스크롤 시 비디오가 프레임 단위로 재생되는 스크러빙 효과 지원
 *
 * Props:
 * @param {string} image - 히어로 이미지 URL [Optional]
 * @param {string} video - 히어로 비디오 URL (VideoScrubbing 사용) [Optional]
 * @param {Array} headline - 제목 텍스트 배열 (각 줄) [Required]
 * @param {string} breadcrumbLabel - 좌측 세로 라벨 텍스트 [Optional, 기본값: 'JUST DROPPED THIS WEEK']
 * @param {string} ctaLabel - CTA 버튼 텍스트 [Optional, 기본값: 'Discover']
 * @param {function} onCtaClick - CTA 클릭 핸들러 [Optional]
 * @param {number} height - 섹션 높이 [Optional, 기본값: 1000]
 * @param {object} scrollRange - 비디오 스크롤 범위 { start: 0, end: 1 } [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VHeroSection
 *   video="/assets/video/hero-main.mp4"
 *   headline={['WEEKEND', 'EDITION']}
 * />
 *
 * <VHeroSection
 *   image="/images/hero.jpg"
 *   headline={['THE', 'WINTER', 'BLAZER']}
 * />
 */
function VHeroSection({
  image,
  video,
  headline = ['WEEKEND', 'EDITION'],
  breadcrumbLabel = 'JUST DROPPED THIS WEEK',
  ctaLabel = 'Discover',
  onCtaClick,
  height = 1000,
  scrollRange = { start: 0, end: 0.5 },
  sx = {},
}) {
  const containerRef = useRef(null);
  const useVideo = Boolean(video);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 600, sm: 800, md: height },
        ...sx,
      }}
    >
      {/* Hero Container */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 2,
          width: '100%',
          height: { xs: 600, sm: 800, md: height },
          overflow: 'hidden',
        }}
      >
        {/* Background Media (Video or Image) */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          {useVideo ? (
            /* Video Background with Scrubbing */
            <VideoScrubbing
              src={video}
              containerRef={containerRef}
              scrollRange={scrollRange}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          ) : (
            /* Image Background */
            <Box
              component="img"
              src={image}
              alt="Hero"
              sx={{
                position: 'absolute',
                top: '-5%',
                left: 0,
                width: '100%',
                height: '235%',
                objectFit: 'cover',
              }}
            />
          )}
          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              pointerEvents: 'none',
            }}
          />
        </Box>

        {/* Headline */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            // Mobile: left-aligned with padding, Desktop: center with offset
            left: { xs: 24, md: '50%' },
            transform: { xs: 'translateY(-50%)', md: 'translate(-50%, -50%)' },
            ml: { xs: 0, md: -33 },
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
          }}
        >
          {headline.map((line, index) => (
            <Typography
              key={index}
              variant="display1"
              component="div"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                color: 'primary.main',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>

        {/* Left Breadcrumb - Hidden on mobile */}
        <Box
          sx={{
            position: 'absolute',
            left: 30,
            top: 106,
            width: 37,
            height: height - 106,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 16,
              height: 164,
            }}
          >
            <Box
              sx={{
                transform: 'rotate(-90deg)',
                whiteSpace: 'nowrap',
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
                {breadcrumbLabel}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CTA Button */}
        <Box
          sx={{
            position: 'absolute',
            // Mobile: left-aligned with padding, Desktop: centered
            left: { xs: 24, md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            bottom: { xs: 80, md: height - 900 },
            zIndex: 1,
          }}
        >
          <VMenu
            label={ctaLabel}
            hasUnderline
            onClick={onCtaClick}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default VHeroSection;
