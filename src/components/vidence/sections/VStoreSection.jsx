import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VMenu } from '../shared';

/**
 * VStoreSection 컴포넌트
 * VIDENCE 팝업 스토어 소개 섹션
 *
 * Props:
 * @param {string} image - 스토어 이미지 URL [Required]
 * @param {string} storeLabel - 좌측 세로 라벨 [Optional, 기본값: '@SUNGSU - POPUP STORE']
 * @param {string} description - 설명 텍스트 [Optional]
 * @param {string} ctaLabel - CTA 버튼 텍스트 [Optional, 기본값: 'Discover']
 * @param {function} onCtaClick - CTA 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VStoreSection image="/images/store.jpg" />
 */
function VStoreSection({
  image = '/store-visual.png',
  storeLabel = '@SUNGSU - POPUP STORE',
  description = "Reflecting the true value of our products.\nWe believe in the unique beauty that develops over time.",
  ctaLabel = 'Discover',
  onCtaClick,
  sx = {},
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 1035,
        backgroundColor: 'common.white',
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 10,
            width: '100%',
          }}
        >
          {/* Store Image */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 760,
            }}
          >
            <Box
              component="img"
              src={image}
              alt="Store"
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Vertical Label */}
            <Box
              sx={{
                position: 'absolute',
                left: 30,
                top: 0,
                width: 37,
                height: '100%',
                display: 'flex',
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
                  width: '100%',
                  height: 262,
                }}
              >
                <Box
                  sx={{
                    transform: 'rotate(-90deg)',
                    whiteSpace: 'nowrap',
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Pretendard Variable", sans-serif',
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 'normal',
                      letterSpacing: '2.8px',
                      color: 'common.white',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                    }}
                  >
                    {storeLabel}
                  </Typography>
                </Box>
              </Box>
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
                fontSize: 13,
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '1.3px',
                color: 'primary.main',
                textAlign: 'center',
                whiteSpace: 'pre-line',
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
    </Box>
  );
}

export default VStoreSection;
