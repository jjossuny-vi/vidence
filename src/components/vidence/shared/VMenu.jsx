import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VMenu 컴포넌트
 * VIDENCE 메뉴 아이템. GNB, CTA 버튼 등에서 재사용
 *
 * Props:
 * @param {string} label - 메뉴 텍스트 [Required]
 * @param {boolean} isActive - 활성 상태 여부 [Optional, 기본값: false]
 * @param {boolean} hasUnderline - 하단 밑줄 표시 여부 [Optional, 기본값: false]
 * @param {string} variant - 메뉴 스타일 ('default' | 'light') [Optional, 기본값: 'default']
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VMenu label="BAGS" />
 * <VMenu label="Discover" isActive hasUnderline />
 */
function VMenu({
  label,
  isActive = false,
  hasUnderline = false,
  variant = 'default',
  onClick,
  sx = {},
}) {
  const isLight = variant === 'light';

  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 34,
        px: 0,
        py: 0,
        border: 'none',
        backgroundColor: 'transparent',
        cursor: onClick ? 'pointer' : 'default',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '1px',
          backgroundColor: isLight ? 'common.white' : 'primary.main',
          opacity: hasUnderline ? 1 : 0,
          transition: 'opacity 0.2s ease',
        },
        '&:hover::after': onClick ? {
          opacity: 1,
        } : {},
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Pretendard Variable", sans-serif',
          fontSize: 13,
          fontWeight: isActive ? 700 : 400,
          lineHeight: 1.2,
          letterSpacing: '1.3px',
          color: isLight ? 'common.white' : 'primary.main',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default VMenu;
