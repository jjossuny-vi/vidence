import Box from '@mui/material/Box';
import { Heart } from 'lucide-react';

/**
 * VLikeButton 컴포넌트
 * VIDENCE 좋아요/위시리스트 버튼
 *
 * Props:
 * @param {boolean} isLiked - 좋아요 상태 [Optional, 기본값: false]
 * @param {string} size - 버튼 크기 ('small' | 'medium' | 'large') [Optional, 기본값: 'medium']
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VLikeButton />
 * <VLikeButton isLiked onClick={handleLike} />
 */
function VLikeButton({
  isLiked = false,
  size = 'medium',
  onClick,
  sx = {},
}) {
  const sizeStyles = {
    small: {
      buttonSize: 32,
      iconSize: 16,
    },
    medium: {
      buttonSize: 40,
      iconSize: 20,
    },
    large: {
      buttonSize: 48,
      iconSize: 24,
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.medium;

  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: currentSize.buttonSize,
        height: currentSize.buttonSize,
        p: 1,
        border: 'none',
        backgroundColor: 'transparent',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease',
        '&:hover': onClick ? {
          transform: 'scale(1.1)',
        } : {},
        '&:active': onClick ? {
          transform: 'scale(0.95)',
        } : {},
        ...sx,
      }}
    >
      <Heart
        size={currentSize.iconSize}
        fill={isLiked ? '#222' : 'none'}
        color="#222"
        strokeWidth={1.5}
      />
    </Box>
  );
}

export default VLikeButton;
