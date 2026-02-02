import VMDSection from '../../components/vidence/sections/VMDSection';

export default {
  title: 'Custom Component/VIDENCE/VMDSection',
  component: VMDSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    products: {
      control: 'object',
      description: '상품 배열 [{image, title}], 최대 8개',
    },
    description: {
      control: 'text',
      description: '섹션 설명 텍스트',
    },
    onProductClick: {
      action: 'productClicked',
      description: '상품 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    products: [
      {
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
        title: 'Cashmere 100 V-neck Knit Gray',
      },
      {
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop',
        title: 'Wool Blend Oversized Blazer',
      },
      {
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
        title: 'Leather Bomber Jacket Black',
      },
      {
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop',
        title: 'Merino Wool Turtleneck Sweater',
      },
      {
        image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=600&fit=crop',
        title: 'Cotton Blend Trench Coat Beige',
      },
      {
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
        title: 'Silk Blouse Ivory',
      },
      {
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop',
        title: 'Linen Wide Pants Navy',
      },
      {
        image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=600&fit=crop',
        title: 'Cashmere Cardigan Charcoal',
      },
    ],
    description: 'Share your own style complete with ORR on Instagram by tagging #orr or #orr_today',
  },
};
