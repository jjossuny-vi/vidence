import VHeroSection from '../../components/vidence/sections/VHeroSection';

export default {
  title: 'Custom Component/VIDENCE/VHeroSection',
  component: VHeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'White' },
  },
  decorators: [
    (Story) => (
      <div style={ { marginTop: '-40px', backgroundColor: '#FFFFFF' } }>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    image: {
      control: 'text',
      description: '히어로 이미지 URL',
    },
    headline: {
      control: 'object',
      description: '제목 텍스트 배열 (각 줄)',
    },
    category: {
      control: 'text',
      description: '상위 카테고리',
    },
    subcategory: {
      control: 'text',
      description: '하위 카테고리',
    },
    breadcrumbLabel: {
      control: 'text',
      description: '좌측 브레드크럼 라벨',
    },
    ctaLabel: {
      control: 'text',
      description: 'CTA 버튼 텍스트',
    },
    height: {
      control: { type: 'number', min: 600, max: 1200 },
      description: '섹션 높이',
    },
    onCtaClick: {
      action: 'ctaClicked',
      description: 'CTA 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1600&h=2000&fit=crop',
    headline: ['WEEKEND', 'EDITION'],
    breadcrumbLabel: 'JUST DROPPED THIS WEEK',
    ctaLabel: 'Discover',
    height: 1000,
  },
};

export const SummerCollection = {
  args: {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&h=2000&fit=crop',
    headline: ['THE', 'SUMMER', 'DRESS'],
    breadcrumbLabel: 'NEW ARRIVAL',
    ctaLabel: 'Shop Now',
    height: 1000,
  },
};
