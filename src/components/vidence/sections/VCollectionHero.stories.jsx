import VCollectionHero from './VCollectionHero';

const sampleImage = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&h=900&fit=crop';

export default {
  title: 'Custom Component/VIDENCE/Sections/VCollectionHero',
  component: VCollectionHero,
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: '히어로 배경 이미지 URL',
    },
    title: {
      control: 'text',
      description: '컬렉션 타이틀 텍스트',
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: '오버레이 투명도 (0-1)',
    },
    height: {
      control: 'number',
      description: '섹션 높이 (px)',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    image: sampleImage,
    title: 'LOVEMOMENT COLLECTION',
    overlayOpacity: 0.2,
    height: 812,
  },
};

export const DarkOverlay = {
  args: {
    image: sampleImage,
    title: 'WINTER COLLECTION',
    overlayOpacity: 0.4,
    height: 812,
  },
};

export const LightOverlay = {
  args: {
    image: sampleImage,
    title: 'SPRING ESSENTIALS',
    overlayOpacity: 0.1,
    height: 812,
  },
};

export const ShortHeight = {
  args: {
    image: sampleImage,
    title: 'NEW ARRIVALS',
    overlayOpacity: 0.2,
    height: 500,
  },
};
