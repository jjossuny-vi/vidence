import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VBreadcrumb 컴포넌트
 * VIDENCE 세로 방향 카테고리 라벨. Hero, Video 섹션 좌측에 사용
 *
 * Props:
 * @param {string} category - 상위 카테고리명 [Required]
 * @param {string} subcategory - 하위 카테고리명 [Required]
 * @param {string} variant - 색상 스타일 ('dark' | 'light') [Optional, 기본값: 'dark']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VBreadcrumb category="OUTER" subcategory="JACKET" />
 * <VBreadcrumb category="DONO COLLECTION" subcategory="SWITCH ON" variant="light" />
 */
function VBreadcrumb({
  category,
  subcategory,
  variant = 'dark',
  sx = {},
}) {
  const textColor = variant === 'light' ? 'common.white' : 'primary.main';

  return (
    <Box
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1.25,
        ...sx,
      } }
    >
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(-90deg)',
          whiteSpace: 'nowrap',
        } }
      >
        <Box
          sx={ {
            display: 'flex',
            alignItems: 'center',
            gap: 2.5,
          } }
        >
          <Typography
            sx={ {
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '1.3px',
              color: textColor,
              textTransform: 'uppercase',
            } }
          >
            { category }
          </Typography>
          <Typography
            sx={ {
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '22px',
              letterSpacing: '3.2px',
              color: textColor,
            } }
          >
            /
          </Typography>
          <Typography
            sx={ {
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: 13,
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '1.3px',
              color: textColor,
              textTransform: 'uppercase',
            } }
          >
            { subcategory }
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VBreadcrumb;
