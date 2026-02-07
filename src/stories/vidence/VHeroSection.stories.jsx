import VHeroSection from '../../components/vidence/sections/VHeroSection';

export default {
  title: 'Section/VIDENCE/VHeroSection',
  component: VHeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'White' },
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  argTypes: {
    image: {
      control: 'text',
      description: '히어로 이미지 URL (video가 없을 때 사용)',
    },
    video: {
      control: 'text',
      description: '히어로 비디오 URL (스크롤 스크러빙 효과 적용)',
    },
    headline: {
      control: 'object',
      description: '제목 텍스트 배열 (각 줄)',
    },
    breadcrumbLabel: {
      control: 'text',
      description: '좌측 세로 라벨 텍스트',
    },
    ctaLabel: {
      control: 'text',
      description: 'CTA 버튼 텍스트',
    },
    height: {
      control: { type: 'number', min: 600, max: 1200 },
      description: '섹션 높이',
    },
    scrollRange: {
      control: 'object',
      description: '비디오 스크롤 범위 { start: 0, end: 1 }',
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
    headline: ['WEEKEND EDITION'],
    breadcrumbLabel: 'JUST DROPPED THIS WEEK',
    ctaLabel: 'Discover',
    height: 1000,
  },
};

export const WithVideo = {
  args: {
    video: '/src/assets/video/hero-main.mp4',
    headline: ['WEEKEND EDITION'],
    breadcrumbLabel: 'JUST DROPPED THIS WEEK',
    ctaLabel: 'Discover',
    height: 1000,
    scrollRange: { start: 0, end: 0.33 },
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
