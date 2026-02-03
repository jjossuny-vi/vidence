import VBannerCard from './VBannerCard';
import Stack from '@mui/material/Stack';

const sampleImage = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop';
const sampleImageRed = 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop';

export default {
  title: 'Custom Component/VIDENCE/Cards/VBannerCard',
  component: VBannerCard,
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: '배너 이미지 URL',
    },
    category: {
      control: 'text',
      description: '카테고리 라벨',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: '배너 크기',
    },
    title: {
      control: 'text',
      description: '메인 타이틀 (large only)',
    },
    subtitle: {
      control: 'text',
      description: '서브 타이틀 (large only)',
    },
    ctaLabel: {
      control: 'text',
      description: 'CTA 버튼 텍스트 (large only)',
    },
    width: {
      control: 'number',
      description: '카드 너비',
    },
    imageHeight: {
      control: 'number',
      description: '이미지 높이',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
    },
    onCtaClick: {
      action: 'ctaClicked',
      description: 'CTA 버튼 클릭 핸들러',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    image: sampleImage,
    category: 'GIFT COLLECTION',
    size: 'small',
    imageHeight: 450,
  },
};

export const SmallBanner = {
  args: {
    image: sampleImage,
    category: 'GIFT COLLECTION',
    size: 'small',
    width: 336,
    imageHeight: 450,
  },
};

export const LargeBanner = {
  args: {
    image: sampleImageRed,
    category: 'GIFT COLLECTION',
    size: 'large',
    title: 'CUBIC CYLINDER\nKEYRING',
    ctaLabel: 'Discover',
    width: 684,
    imageHeight: 450,
  },
};

export const AllVariants = {
  render: () => (
    <Stack spacing={4} alignItems="flex-start">
      <VBannerCard
        image={sampleImage}
        category="GIFT COLLECTION"
        size="small"
        width={336}
        imageHeight={450}
      />
      <VBannerCard
        image={sampleImageRed}
        category="GIFT COLLECTION"
        size="large"
        title={'CUBIC CYLINDER\nKEYRING'}
        ctaLabel="Discover"
        width={684}
        imageHeight={450}
      />
    </Stack>
  ),
};
