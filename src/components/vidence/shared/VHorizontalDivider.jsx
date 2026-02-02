import Box from '@mui/material/Box';

/**
 * VHorizontalDivider 컴포넌트
 * VIDENCE 페이지 구분선. 3단 분할로 현재 위치 표시
 *
 * Props:
 * @param {number} activeIndex - 활성 구간 인덱스 (0, 1, 2) [Optional, 기본값: 0]
 * @param {number} width - 구분선 전체 너비 [Optional, 기본값: 400]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VHorizontalDivider />
 * <VHorizontalDivider activeIndex={1} />
 */
function VHorizontalDivider({
  activeIndex = 0,
  width = 400,
  sx = {},
}) {
  return (
    <Box
      sx={ {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        ...sx,
      } }
    >
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          width,
        } }
      >
        { [0, 1, 2].map((index) => (
          <Box
            key={ index }
            sx={ {
              flex: 1,
              height: 2,
              minHeight: 1,
              minWidth: 1,
              backgroundColor: index === activeIndex ? 'primary.main' : 'grey.200',
              transition: 'background-color 0.3s ease',
            } }
          />
        )) }
      </Box>
    </Box>
  );
}

export default VHorizontalDivider;
