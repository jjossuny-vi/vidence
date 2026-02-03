import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VBoxButton 컴포넌트
 * VIDENCE 박스형 버튼. 테두리가 있는 직사각형 버튼
 *
 * Props:
 * @param {string} label - 버튼 텍스트 [Required]
 * @param {string} variant - 버튼 스타일 ('outlined' | 'filled') [Optional, 기본값: 'outlined']
 * @param {string} size - 버튼 크기 ('small' | 'medium' | 'large') [Optional, 기본값: 'medium']
 * @param {boolean} fullWidth - 전체 너비 여부 [Optional, 기본값: false]
 * @param {boolean} isDisabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VBoxButton label="ADD TO CART" />
 * <VBoxButton label="MORE" variant="outlined" size="large" />
 * <VBoxButton label="DISCOVER" variant="filled" />
 */
function VBoxButton({
  label,
  variant = 'outlined',
  size = 'medium',
  fullWidth = false,
  isDisabled = false,
  onClick,
  sx = {},
}) {
  const isFilled = variant === 'filled';

  const sizeStyles = {
    small: {
      height: 40,
      minWidth: 120,
      fontSize: 11,
      letterSpacing: '2.2px',
    },
    medium: {
      height: 50,
      minWidth: 200,
      fontSize: 12,
      letterSpacing: '2.4px',
    },
    large: {
      height: 60,
      minWidth: 284,
      fontSize: 13,
      letterSpacing: '2.6px',
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.medium;

  return (
    <Box
      component="button"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: currentSize.height,
        minWidth: currentSize.minWidth,
        width: fullWidth ? '100%' : 'auto',
        px: 2.5,
        border: '1px solid',
        borderColor: 'primary.main',
        backgroundColor: isFilled ? 'primary.main' : 'common.white',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        transition: 'all 0.2s ease',
        '&:hover': !isDisabled ? {
          backgroundColor: isFilled ? 'grey.900' : 'grey.50',
        } : {},
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Pretendard Variable", sans-serif',
          fontSize: currentSize.fontSize,
          fontWeight: 400,
          lineHeight: 1.8,
          letterSpacing: currentSize.letterSpacing,
          color: isFilled ? 'common.white' : 'primary.main',
          textTransform: 'uppercase',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default VBoxButton;
