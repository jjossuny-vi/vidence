import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VMenu } from '../shared';
import VideoScrubbing from '../../media/VideoScrubbing';

/**
 * VHeroSection 컴포넌트
 * VIDENCE 메인 히어로 섹션. 전체 화면 이미지/비디오 + 제목 + CTA
 * 스크롤 시 비디오가 프레임 단위로 재생되는 스크러빙 효과 지원
 * 
 * Interaction:
 * 1. Text moves down
 * 2. Video scrubs
 * 3. Section unpins
 *
 * Props:
 * @param {string} image - 히어로 이미지 URL [Optional]
 * @param {string} video - 히어로 비디오 URL (VideoScrubbing 사용) [Optional]
 * @param {Array} headline - 제목 텍스트 배열 (각 줄) [Required]
 * @param {string} ctaLabel - CTA 버튼 텍스트 [Optional, 기본값: 'Discover']
 * @param {function} onCtaClick - CTA 클릭 핸들러 [Optional]
 * @param {number} height - 섹션 높이 [Optional, 기본값: 1000] - *Ignored in sticky mode*
 * @param {object} scrollRange - 비디오 스크롤 범위 { start: 0, end: 1 } [Optional] - *Ignored in sequenced mode*
 * @param {object} sx - 추가 스타일 [Optional]
 */
function VHeroSection({
  image,
  video,
  headline = ['WEEKEND EDITION'],
  ctaLabel = 'Discover',
  onCtaClick,
  height = 1000,
  scrollRange = { start: 0, end: 0.5 },
  sx = {},
}) {
  const outerContainerRef = useRef(null);
  const useVideo = Boolean(video);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!outerContainerRef.current) return;

      const { top, height } = outerContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much of the container has been scrolled
      // Start counting when top aligns with top of viewport (0)
      // End when bottom aligns with bottom of viewport (approximated logic)

      // Ideally: 
      // Progress 0: Section starts at top of viewport
      // Progress 1: Section ends scrolling

      // Since it's sticky, the 'top' will eventually become negative as we scroll past the stickiness
      // But we need to calculate based on the outer container's position relative to the viewport

      const scrollDistance = -top;
      const totalScrollableDistance = height - windowHeight;

      let newProgress = scrollDistance / totalScrollableDistance;
      newProgress = Math.max(0, Math.min(1, newProgress));

      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sequence Logic
  // 0.0 - 0.3: Text Animation (Translate Y)
  // 0.3 - 1.0: Video Scrubbing

  const textAnimationEnd = 0.3;

  let textProgress = 0;
  let videoProgress = 0;

  if (progress < textAnimationEnd) {
    textProgress = progress / textAnimationEnd;
    videoProgress = 0;
  } else {
    textProgress = 1;
    videoProgress = (progress - textAnimationEnd) / (1 - textAnimationEnd);
  }

  return (
    <Box
      ref={outerContainerRef}
      sx={{
        position: 'relative',
        width: '100%',
        height: '400vh', // Sticky track
        ...sx,
      }}
    >
      {/* Sticky Inner Container */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
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
              manualProgress={videoProgress}
              scrollRange={{ start: 0, end: 1 }} // We handle mapping manually
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
            transform: {
              xs: `translateY(calc(-50% + ${textProgress * 100}px))`,
              md: `translate(-50%, calc(-50% + ${textProgress * 150}px))`
            },
            ml: { xs: 0, md: -33 },
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
            opacity: 1 - videoProgress, // Fade out as video starts
            transition: 'transform 0.1s linear, opacity 0.1s linear',
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

        {/* CTA Button */}
        <Box
          sx={{
            position: 'absolute',
            // Mobile: left-aligned with padding, Desktop: centered
            left: { xs: 24, md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            bottom: { xs: 80, md: 100 },
            zIndex: 1,
            opacity: 1 - videoProgress, // Fade out as video starts
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
