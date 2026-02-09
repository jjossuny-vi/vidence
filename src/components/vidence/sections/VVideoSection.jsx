import { useMemo, useState, useRef, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VMenu } from '../shared';

// 기본 이미지 및 비디오
import defaultFirstImage from '../../../assets/product/main_video_001.png';
import defaultSecondImage from '../../../assets/product/main_video_002.png';
import defaultSecondHoverVideo from '../../../assets/product/main_video_002_hover.mp4';

/**
 * VVideoSection 컴포넌트
 * VIDENCE 이미지 갤러리 섹션 (2컬럼 레이아웃)
 *
 * Props:
 * @param {string} firstImage - 좌측 이미지 URL (1col, 400px) [Optional]
 * @param {string} secondImage - 우측 이미지 URL (2col, 4:3 비율) [Optional]
 * @param {string} secondHoverVideo - 우측 hover 시 재생될 비디오 URL [Optional]
 * @param {string} description - 섹션 설명 텍스트 [Optional]
 * @param {string} ctaLabel - CTA 버튼 텍스트 [Optional, 기본값: 'Discover']
 * @param {function} onCtaClick - CTA 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VVideoSection
 *   firstImage="/images/first.jpg"
 *   secondImage="/images/second.jpg"
 * />
 */
function VVideoSection({
  firstImage = defaultFirstImage,
  secondImage = defaultSecondImage,
  secondHoverVideo = defaultSecondHoverVideo,
  description = 'SS 2026 A Season Touched by Natural Elegance.',
  ctaLabel = 'Discover',
  onCtaClick,
  sx = {},
}) {
  // 모바일에서 첫 번째 또는 두 번째 이미지 랜덤 선택 (컴포넌트 마운트 시 결정)
  const showFirstOnMobile = useMemo(() => Math.random() > 0.5, []);

  // 2col hover 상태 관리
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const videoRef = useRef(null);

  // hover 시 비디오 재생 (1.5배속)
  const handleSecondMouseEnter = useCallback(() => {
    setIsSecondHovered(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, []);

  // hover 해제 시 비디오 정지
  const handleSecondMouseLeave = useCallback(() => {
    setIsSecondHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'common.white',
        py: { xs: 6, md: 10 },
        ...sx,
      }}
    >
      {/* Main Content - 1200px 고정, 가운데 정렬 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 6 },
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, md: 0 },
        }}
      >
        {/* Image Row - 2col 고정 1200px, 가운데 정렬, 1:2 비율 (400px : 800px) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            gap: 0.5,
            width: '100%',
          }}
        >
          {/* First Image - 데스크톱 400px 고정 (1:2 비율), 모바일 전체 너비 */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: '100%', md: 400 },
              height: { xs: 400, md: 600 },
              overflow: 'hidden',
              display: { xs: showFirstOnMobile ? 'block' : 'none', md: 'block' },
            }}
          >
            <Box
              component="img"
              src={firstImage}
              alt="Gallery image 1"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Second Image - 데스크톱 800px 고정 (4:3 비율), 모바일 전체 너비, hover 시 비디오 재생 */}
          <Box
            onMouseEnter={handleSecondMouseEnter}
            onMouseLeave={handleSecondMouseLeave}
            sx={{
              position: 'relative',
              flexShrink: 0,
              width: { xs: '100%', md: 800 },
              height: { xs: 300, md: 600 },
              overflow: 'hidden',
              display: { xs: showFirstOnMobile ? 'none' : 'block', md: 'block' },
              cursor: 'pointer',
            }}
          >
            {/* 기본 이미지 */}
            <Box
              component="img"
              src={secondImage}
              alt="Gallery image 2"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isSecondHovered ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            />
            {/* Hover 비디오 */}
            <Box
              component="video"
              ref={videoRef}
              src={secondHoverVideo}
              muted
              loop
              playsInline
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isSecondHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            />
          </Box>
        </Box>

        {/* Description */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.25,
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: { xs: 11, md: 13 },
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '1.3px',
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
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

export default VVideoSection;
