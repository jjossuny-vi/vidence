import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VMenu, VBreadcrumb } from '../shared';

/**
 * VHeroSection 컴포넌트
 * VIDENCE 메인 히어로 섹션. 전체 화면 이미지 + 제목 + CTA
 *
 * Props:
 * @param {string} image - 히어로 이미지 URL [Required]
 * @param {Array} headline - 제목 텍스트 배열 (각 줄) [Required]
 * @param {string} category - 상위 카테고리 [Optional, 기본값: 'OUTER']
 * @param {string} subcategory - 하위 카테고리 [Optional, 기본값: 'JACKET']
 * @param {string} ctaLabel - CTA 버튼 텍스트 [Optional, 기본값: 'Discover']
 * @param {function} onCtaClick - CTA 클릭 핸들러 [Optional]
 * @param {number} height - 섹션 높이 [Optional, 기본값: 1000]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VHeroSection
 *   image="/images/hero.jpg"
 *   headline={['THE', 'WINTER', 'BLAZER']}
 * />
 */
function VHeroSection({
  image,
  headline = ['WEEKEND', 'EDITION'],
  category = 'OUTER',
  subcategory = 'JACKET',
  breadcrumbLabel = 'JUST DROPPED THIS WEEK',
  ctaLabel = 'Discover',
  onCtaClick,
  height = 1000,
  sx = {},
}) {
  return (
    <Box
      sx={ {
        position: 'relative',
        width: '100%',
        height: { xs: 600, sm: 800, md: height },
        ...sx,
      } }
    >
      {/* Hero Container */}
      <Box
        sx={ {
          position: 'absolute',
          left: 0,
          bottom: 2,
          width: '100%',
          height: { xs: 600, sm: 800, md: height },
          overflow: 'hidden',
        } }
      >
        {/* Background Image */}
        <Box
          sx={ {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          } }
        >
          <Box
            component="img"
            src={ image }
            alt="Hero"
            sx={ {
              position: 'absolute',
              top: '-5%',
              left: 0,
              width: '100%',
              height: '235%',
              objectFit: 'cover',
            } }
          />
          {/* Overlay */}
          <Box
            sx={ {
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
            } }
          />
        </Box>

        {/* Headline */}
        <Box
          sx={ {
            position: 'absolute',
            top: '50%',
            // Mobile: left-aligned with padding, Desktop: center with offset
            left: { xs: 24, md: '50%' },
            transform: { xs: 'translateY(-50%)', md: 'translate(-50%, -50%)' },
            ml: { xs: 0, md: -33 },
            display: 'flex',
            flexDirection: 'column',
          } }
        >
          { headline.map((line, index) => (
            <Typography
              key={ index }
              variant="display1"
              component="div"
              sx={ {
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                color: 'primary.main',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              } }
            >
              { line }
            </Typography>
          )) }
        </Box>

        {/* Left Breadcrumb - Hidden on mobile */}
        <Box
          sx={ {
            position: 'absolute',
            left: 30,
            top: 106,
            width: 37,
            height: height - 106,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          } }
        >
          <Box
            sx={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 16,
              height: 164,
            } }
          >
            <Box
              sx={ {
                transform: 'rotate(-90deg)',
                whiteSpace: 'nowrap',
              } }
            >
              <Typography
                sx={ {
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '1.3px',
                  color: 'primary.main',
                  textTransform: 'uppercase',
                } }
              >
                { breadcrumbLabel }
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CTA Button */}
        <Box
          sx={ {
            position: 'absolute',
            // Mobile: left-aligned with padding, Desktop: centered
            left: { xs: 24, md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            bottom: { xs: 80, md: height - 900 },
          } }
        >
          <VMenu
            label={ ctaLabel }
            hasUnderline
            onClick={ onCtaClick }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default VHeroSection;
