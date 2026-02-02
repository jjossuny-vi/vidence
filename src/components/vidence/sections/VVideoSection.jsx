import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Play } from 'lucide-react';
import { VMenu } from '../shared';

/**
 * VVideoSection 컴포넌트
 * VIDENCE 비디오/이미지 갤러리 섹션
 *
 * Props:
 * @param {string} videoThumbnail - 비디오 썸네일 이미지 URL [Required]
 * @param {string} staticImage - 정적 이미지 URL [Required]
 * @param {string} description - 섹션 설명 텍스트 [Optional]
 * @param {string} ctaLabel - CTA 버튼 텍스트 [Optional, 기본값: 'Discover']
 * @param {string} breadcrumbCategory - 브레드크럼 카테고리 [Optional]
 * @param {string} breadcrumbSubcategory - 브레드크럼 서브카테고리 [Optional]
 * @param {function} onPlayClick - 재생 버튼 클릭 핸들러 [Optional]
 * @param {function} onCtaClick - CTA 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VVideoSection
 *   videoThumbnail="/images/video-thumb.jpg"
 *   staticImage="/images/static.jpg"
 * />
 */
function VVideoSection({
  videoThumbnail,
  staticImage,
  description = 'Share your own style on Instagram',
  ctaLabel = 'Discover',
  breadcrumbCategory = 'DONO COLLECTION',
  breadcrumbSubcategory = 'SWITCH ON',
  onPlayClick,
  onCtaClick,
  sx = {},
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // 모바일에서 비디오 또는 이미지 랜덤 선택 (컴포넌트 마운트 시 결정)
  const showVideoOnMobile = useMemo(() => Math.random() > 0.5, []);

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
          {/* Video Thumbnail - 데스크톱 400px 고정 (1:2 비율), 모바일 전체 너비 */}
          <Box
            sx={{
              position: 'relative',
              flexShrink: 0,
              width: { xs: '100%', md: 400 },
              height: { xs: 400, md: 600 },
              overflow: 'hidden',
              display: { xs: showVideoOnMobile ? 'block' : 'none', md: 'block' },
            }}
          >
            <Box
              component="img"
              src={videoThumbnail}
              alt="Video thumbnail"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Play Button */}
            <IconButton
              onClick={onPlayClick}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 50,
                height: 50,
                backgroundColor: 'common.white',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              <Play size={24} fill="currentColor" />
            </IconButton>
          </Box>

          {/* Static Image - 데스크톱 800px 고정 (1:2 비율), 모바일 전체 너비 */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: '100%', md: 800 },
              height: { xs: 400, md: 600 },
              overflow: 'hidden',
              display: { xs: showVideoOnMobile ? 'none' : 'block', md: 'block' },
            }}
          >
            <Box
              component="img"
              src={staticImage}
              alt="Product"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
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

      {/* Left Breadcrumb - 데스크톱만 표시 */}
      <Box
        sx={{
          position: 'absolute',
          left: { md: 40, lg: 60 },
          top: '50%',
          transform: 'translateY(-50%)',
          width: 35,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1.25,
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
              {`${breadcrumbCategory} "${breadcrumbSubcategory}"`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default VVideoSection;
