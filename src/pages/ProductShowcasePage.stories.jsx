import ProductShowcasePage from './ProductShowcasePage';

const heroImage = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&h=900&fit=crop';
const productImage = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop';
const bannerImage = 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop';

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
    image: productImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    isNew: true,
  },
  {
    id: 2,
    image: productImage,
    title: 'Wool Blend Cardigan Navy',
    price: 298,
    description: 'early access to new products, exclusive deals',
    hasCarousel: true,
    colorOptions: ['#aca8a3', '#222'],
  },
  {
    id: 3,
    image: productImage,
    title: 'Premium Mohair Sweater Beige',
    price: 298,
    isOutOfStock: true,
  },
  {
    id: 4,
    image: productImage,
    title: 'Merino Wool Turtleneck Black',
    price: 298,
  },
  {
    id: 5,
    image: productImage,
    title: 'Alpaca Blend Pullover Ivory',
    price: 298,
    isPreOrder: true,
  },
  {
    id: 6,
    image: productImage,
    title: 'Cotton Knit Vest Charcoal',
    price: 298,
    originalPrice: 398,
    discountRate: 25,
  },
  {
    id: 7,
    image: productImage,
    title: 'Cashmere Blend Hoodie Cream',
    price: 298,
  },
  {
    id: 8,
    type: 'banner',
    image: bannerImage,
    category: 'GIFT COLLECTION',
    size: 'small',
  },
  {
    id: 9,
    image: productImage,
    title: 'Ribbed Knit Top White',
    price: 198,
  },
  {
    id: 10,
    image: productImage,
    title: 'Oversized Knit Dress Gray',
    price: 398,
    isNew: true,
  },
  {
    id: 11,
    type: 'banner',
    image: bannerImage,
    category: 'GIFT COLLECTION',
    size: 'large',
    title: 'CUBIC CYLINDER\nKEYRING',
    ctaLabel: 'Discover',
  },
];

export default {
  title: 'Page/ProductShowcasePage',
  component: ProductShowcasePage,
  tags: ['autodocs'],
  argTypes: {
    heroImage: {
      control: 'text',
      description: '히어로 배경 이미지 URL',
    },
    heroTitle: {
      control: 'text',
      description: '히어로 타이틀',
    },
    heroOverlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: '히어로 오버레이 투명도',
    },
    categoryTitle: {
      control: 'text',
      description: '카테고리 섹션 타이틀',
    },
    categoryDescription: {
      control: 'text',
      description: '카테고리 설명',
    },
    categories: {
      control: 'object',
      description: '카테고리 탭 목록',
    },
    activeCategory: {
      control: 'text',
      description: '활성화된 카테고리',
    },
    sortOptions: {
      control: 'object',
      description: '정렬 옵션 목록',
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
    onMenuClick: { action: 'menuClicked' },
    onLogoClick: { action: 'logoClicked' },
    onSearchClick: { action: 'searchClicked' },
    onUserClick: { action: 'userClicked' },
    onCartClick: { action: 'cartClicked' },
    onCategoryChange: { action: 'categoryChanged' },
    onSortChange: { action: 'sortChanged' },
    onFilterClick: { action: 'filterClicked' },
    onProductClick: { action: 'productClicked' },
    onMoreClick: { action: 'moreClicked' },
    onFooterLinkClick: { action: 'footerLinkClicked' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
};

export const Default = {
  args: {
    heroImage: heroImage,
    heroTitle: 'LOVEMOMENT COLLECTION',
    heroOverlayOpacity: 0.2,
    categoryTitle: 'OUTER',
    categoryDescription: 'COMBINING CHIC AND MODERNITY,\nTHE ORR COLLECTION CREATIVELY INTERPRETS EVERY SEASON.',
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
    heroImage: heroImage,
    heroTitle: 'WINTER COLLECTION',
    heroOverlayOpacity: 0.3,
    categoryTitle: 'JACKET',
    categoryDescription: 'DISCOVER OUR PREMIUM JACKET COLLECTION.',
    categories: defaultCategories,
    activeCategory: 'jacket',
    sortOptions: defaultSortOptions,
    selectedSort: 'price_asc',
    filterCount: 2,
    products: sampleProducts.slice(0, 8),
    hasMore: true,
    moreLabel: 'LOAD MORE',
  },
};

export const Minimal = {
  args: {
    heroImage: heroImage,
    heroTitle: 'NEW ARRIVALS',
    heroOverlayOpacity: 0.15,
    categoryTitle: 'NEW IN',
    categoryDescription: 'FRESH FROM THE STUDIO.',
    categories: [],
    products: sampleProducts.slice(0, 4),
    hasMore: false,
  },
};
