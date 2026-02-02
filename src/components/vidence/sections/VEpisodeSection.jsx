import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VMenu } from '../shared';
import { VEpisodeCard } from '../cards';

/**
 * VEpisodeSection 컴포넌트
 * VIDENCE 에피소드 캐로셀 섹션
 *
 * Props:
 * @param {Array} episodes - 에피소드 배열 [{image, episodeNumber, title}] [Required]
 * @param {number} activeIndex - 현재 활성 에피소드 인덱스 [Optional, 기본값: 0]
 * @param {string} sectionTitle - 섹션 제목 [Optional, 기본값: 'EPISODE']
 * @param {string} ctaLabel - CTA 버튼 텍스트 [Optional, 기본값: 'Discover']
 * @param {function} onPrevClick - 이전 버튼 클릭 핸들러 [Optional]
 * @param {function} onNextClick - 다음 버튼 클릭 핸들러 [Optional]
 * @param {function} onEpisodeClick - 에피소드 클릭 핸들러 [Optional]
 * @param {function} onCtaClick - CTA 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VEpisodeSection
 *   episodes={[
 *     { image: '/images/ep1.jpg', episodeNumber: 'EPISODE 1', title: 'Title 1' },
 *   ]}
 * />
 */
function VEpisodeSection({
  episodes = [],
  activeIndex = 0,
  sectionTitle = 'EPISODE',
  ctaLabel = 'Discover',
  onPrevClick,
  onNextClick,
  onEpisodeClick,
  onCtaClick,
  sx = {},
}) {
  // Calculate visible episodes (prev, current, next)
  const prevIndex = activeIndex > 0 ? activeIndex - 1 : episodes.length - 1;
  const nextIndex = activeIndex < episodes.length - 1 ? activeIndex + 1 : 0;

  return (
    <Box
      sx={ {
        position: 'relative',
        width: '100%',
        height: 1000,
        backgroundColor: 'primary.main',
        overflow: 'hidden',
        ...sx,
      } }
    >
      {/* Section Title */}
      <Typography
        sx={ {
          position: 'absolute',
          top: 183,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: '"Pretendard Variable", sans-serif',
          fontSize: 24,
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '4.8px',
          color: 'common.white',
          textAlign: 'center',
          textTransform: 'uppercase',
        } }
      >
        { sectionTitle }
      </Typography>

      {/* Episodes Container */}
      <Box
        sx={ {
          position: 'absolute',
          top: 268,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '159px',
        } }
      >
        {/* Previous Episode (Small) */}
        { episodes[prevIndex] && (
          <Box
            sx={ {
              opacity: 0.6,
              transform: 'translateX(-100px)',
            } }
          >
            <VEpisodeCard
              image={ episodes[prevIndex].image }
              episodeNumber={ episodes[prevIndex].episodeNumber }
              title={ episodes[prevIndex].title }
              size="small"
              onClick={ () => onEpisodeClick?.(prevIndex) }
            />
          </Box>
        ) }

        {/* Current Episode (Large) */}
        { episodes[activeIndex] && (
          <VEpisodeCard
            image={ episodes[activeIndex].image }
            episodeNumber={ episodes[activeIndex].episodeNumber }
            title={ episodes[activeIndex].title }
            size="large"
            onClick={ () => onEpisodeClick?.(activeIndex) }
          />
        ) }

        {/* Next Episode (Small) */}
        { episodes[nextIndex] && (
          <Box
            sx={ {
              opacity: 0.6,
              transform: 'translateX(100px)',
            } }
          >
            <VEpisodeCard
              image={ episodes[nextIndex].image }
              episodeNumber={ episodes[nextIndex].episodeNumber }
              title={ episodes[nextIndex].title }
              size="small"
              onClick={ () => onEpisodeClick?.(nextIndex) }
            />
          </Box>
        ) }
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={ onPrevClick }
        sx={ {
          position: 'absolute',
          left: 'calc(50% - 483px)',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'common.white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        } }
      >
        <ChevronLeft size={ 24 } />
      </IconButton>

      <IconButton
        onClick={ onNextClick }
        sx={ {
          position: 'absolute',
          right: 'calc(50% - 483px)',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'common.white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        } }
      >
        <ChevronRight size={ 24 } />
      </IconButton>

      {/* CTA Button */}
      <Box
        sx={ {
          position: 'absolute',
          bottom: 43,
          left: '50%',
          transform: 'translateX(-50%)',
        } }
      >
        <VMenu
          label={ ctaLabel }
          hasUnderline
          variant="light"
          onClick={ onCtaClick }
        />
      </Box>
    </Box>
  );
}

export default VEpisodeSection;
