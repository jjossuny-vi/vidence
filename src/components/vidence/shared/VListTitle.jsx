import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * VListTitle 컴포넌트
 * VIDENCE 섹션 타이틀. 카테고리 제목 + 설명 텍스트
 *
 * Props:
 * @param {string} title - 카테고리 제목 [Required]
 * @param {string} description - 설명 텍스트 (줄바꿈 지원) [Optional]
 * @param {string} align - 정렬 ('left' | 'center') [Optional, 기본값: 'left']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VListTitle
 *   title="OUTER"
 *   description="COMBINING CHIC AND MODERNITY,\nTHE ORR COLLECTION CREATIVELY INTERPRETS EVERY SEASON."
 * />
 */
function VListTitle({
  title,
  description,
  align = 'left',
  sx = {},
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        gap: 1.5,
        py: 5,
        px: { xs: 2, md: align === 'left' ? '110px' : 2 },
        pr: { md: align === 'left' ? '80px' : 2 },
        width: '100%',
        textAlign: align,
        ...sx,
      }}
    >
      {/* Main Title */}
      <Typography
        sx={{
          fontFamily: '"Pretendard Variable", sans-serif',
          fontSize: { xs: 28, md: 36 },
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '7.2px',
          color: 'primary.main',
          textTransform: 'uppercase',
          width: '100%',
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      {description && (
        <Typography
          sx={{
            fontFamily: '"Pretendard Variable", sans-serif',
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 1.8,
            letterSpacing: '2.6px',
            color: 'primary.main',
            textTransform: 'uppercase',
            whiteSpace: 'pre-line',
            width: '100%',
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default VListTitle;
