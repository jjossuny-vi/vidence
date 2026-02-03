import VCollectionSection from '../../components/vidence/sections/VCollectionSection';

export default {
  title: 'Section/VIDENCE/VCollectionSection',
  component: VCollectionSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    categories: {
      control: 'object',
      description: '카테고리 배열 [{image, label}]',
    },
    cardWidth: {
      control: { type: 'number', min: 200, max: 500 },
      description: '카드 너비',
    },
    cardHeight: {
      control: { type: 'number', min: 300, max: 700 },
      description: '카드 높이',
    },
    gap: {
      control: { type: 'number', min: 10, max: 60 },
      description: '카드 간격',
    },
    onCategoryClick: {
      action: 'categoryClicked',
      description: '카테고리 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    categories: [
      { image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop', label: 'CLOTHING' },
      { image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=600&fit=crop', label: 'SHOES' },
      { image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop', label: 'ACCESSORY' },
      { image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=600&fit=crop', label: 'BAG COLLECTION' },
    ],
    cardWidth: 346,
    cardHeight: 500,
    gap: 30,
  },
};
