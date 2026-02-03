import VProductListSection from './VProductListSection';

const sampleImage = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop';
const sampleBannerImage = 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop';

const defaultCategories = [
  { label: 'ALL', value: 'all' },
  { label: 'JACKET', value: 'jacket' },
  { label: 'JUMPER', value: 'jumper' },
  { label: 'COAT', value: 'coat' },
  { label: 'DOWN', value: 'down' },
];

const defaultSortOptions = [
  { label: 'NEW ITEM', value: 'new' },
  { label: 'PRICE LOW', value: 'price_asc' },
  { label: 'PRICE HIGH', value: 'price_desc' },
];

const sampleProducts = [
  {
    id: 1,
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    isNew: true,
  },
  {
    id: 2,
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    description: 'early access to new products, exclusive deals',
    hasCarousel: true,
    colorOptions: ['#aca8a3', '#222'],
  },
  {
    id: 3,
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    isOutOfStock: true,
  },
  {
    id: 4,
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
  },
  {
    id: 5,
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    isPreOrder: true,
  },
  {
    id: 6,
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    originalPrice: 398,
    discountRate: 25,
  },
  {
    id: 7,
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
  },
  {
    id: 8,
    type: 'banner',
    image: sampleBannerImage,
    category: 'GIFT COLLECTION',
    size: 'small',
  },
];

export default {
  title: 'Custom Component/VIDENCE/Sections/VProductListSection',
  component: VProductListSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '섹션 타이틀',
    },
    description: {
      control: 'text',
      description: '섹션 설명',
    },
    categories: {
      control: 'object',
      description: '카테고리 목록',
    },
    activeCategory: {
      control: 'text',
      description: '활성화된 카테고리',
    },
    sortOptions: {
      control: 'object',
      description: '정렬 옵션',
    },
    selectedSort: {
      control: 'text',
      description: '선택된 정렬',
    },
    filterCount: {
      control: 'number',
      description: '적용된 필터 수',
    },
    products: {
      control: 'object',
      description: '상품 목록',
    },
    hasMore: {
      control: 'boolean',
      description: '더보기 버튼 표시 여부',
    },
    moreLabel: {
      control: 'text',
      description: '더보기 버튼 텍스트',
    },
    onCategoryChange: {
      action: 'categoryChanged',
      description: '카테고리 변경 핸들러',
    },
    onSortChange: {
      action: 'sortChanged',
      description: '정렬 변경 핸들러',
    },
    onFilterClick: {
      action: 'filterClicked',
      description: '필터 클릭 핸들러',
    },
    onProductClick: {
      action: 'productClicked',
      description: '상품 클릭 핸들러',
    },
    onMoreClick: {
      action: 'moreClicked',
      description: '더보기 클릭 핸들러',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'OUTER',
    description: 'COMBINING CHIC AND MODERNITY,\nTHE ORR COLLECTION CREATIVELY INTERPRETS EVERY SEASON.',
    categories: defaultCategories,
    activeCategory: 'all',
    sortOptions: defaultSortOptions,
    selectedSort: 'new',
    filterCount: 0,
    products: sampleProducts,
    hasMore: true,
    moreLabel: 'MORE',
  },
};

export const WithActiveFilter = {
  args: {
    title: 'JACKET',
    description: 'DISCOVER OUR PREMIUM JACKET COLLECTION.',
    categories: defaultCategories,
    activeCategory: 'jacket',
    sortOptions: defaultSortOptions,
    selectedSort: 'price_asc',
    filterCount: 2,
    products: sampleProducts.slice(0, 4),
    hasMore: true,
    moreLabel: 'LOAD MORE',
  },
};

export const WithoutFilter = {
  args: {
    title: 'NEW ARRIVALS',
    description: 'FRESH FROM THE STUDIO.',
    categories: [],
    products: sampleProducts.slice(0, 4),
    hasMore: false,
  },
};
