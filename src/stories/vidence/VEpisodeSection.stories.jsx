import VEpisodeSection from '../../components/vidence/sections/VEpisodeSection';

export default {
  title: 'Section/VIDENCE/VEpisodeSection',
  component: VEpisodeSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    episodes: {
      control: 'object',
      description: '에피소드 배열 [{image, episodeNumber, title}]',
    },
    activeIndex: {
      control: { type: 'number', min: 0, max: 10 },
      description: '현재 활성 에피소드 인덱스',
    },
    sectionTitle: {
      control: 'text',
      description: '섹션 제목',
    },
    ctaLabel: {
      control: 'text',
      description: 'CTA 버튼 텍스트',
    },
    onPrevClick: {
      action: 'prevClicked',
      description: '이전 버튼 클릭',
    },
    onNextClick: {
      action: 'nextClicked',
      description: '다음 버튼 클릭',
    },
    onEpisodeClick: {
      action: 'episodeClicked',
      description: '에피소드 클릭',
    },
    onCtaClick: {
      action: 'ctaClicked',
      description: 'CTA 클릭',
    },
  },
};

export const Default = {
  args: {
    episodes: [
      {
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 8',
        title: 'Why did you plan Winter Blazer?',
      },
      {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 7',
        title: 'The Story Behind Our Cashmere Collection',
      },
      {
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 6',
        title: 'Craftsmanship: From Thread to Garment',
      },
    ],
    activeIndex: 0,
    sectionTitle: 'EPISODE',
    ctaLabel: 'Discover',
  },
};

export const SingleEpisode = {
  args: {
    episodes: [
      {
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 1',
        title: 'The Only Episode',
      },
    ],
    activeIndex: 0,
    sectionTitle: 'SINGLE EPISODE',
    ctaLabel: 'See More',
  },
};

export const ManyEpisodes = {
  args: {
    episodes: [
      {
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 1',
        title: 'Episode One',
      },
      {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 2',
        title: 'Episode Two',
      },
      {
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 3',
        title: 'Episode Three',
      },
      {
        image: 'https://images.unsplash.com/photo-1529139574466-a302d27f819f?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 4',
        title: 'Episode Four',
      },
      {
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 5',
        title: 'Episode Five',
      },
    ],
    activeIndex: 0,
    sectionTitle: 'MANY EPISODES',
    ctaLabel: 'Explore All',
  },
};

export const CustomStart = {
  args: {
    episodes: [
      {
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 1',
        title: 'First',
      },
      {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 2',
        title: 'Second (Start Here)',
      },
      {
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
        episodeNumber: 'EPISODE 3',
        title: 'Third',
      },
    ],
    activeIndex: 1,
    sectionTitle: 'START AT INDEX 1',
  },
};
