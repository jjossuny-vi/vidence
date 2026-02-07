import ProductShowcasePage from './ProductShowcasePage';
import {
  heroImages,
  categories,
  sortOptions,
  sampleProducts,
} from '../data/productShowcaseData';

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
    heroImage: heroImages.default,
    heroTitle: 'LOVEMOMENT COLLECTION',
    heroOverlayOpacity: 0.2,
    categoryTitle: 'OUTER',
    categoryDescription: 'COMBINING CHIC AND MODERNITY,\nTHE ORR COLLECTION CREATIVELY INTERPRETS EVERY SEASON.',
    categories: categories,
    activeCategory: 'all',
    sortOptions: sortOptions,
    selectedSort: 'new',
    filterCount: 0,
    products: sampleProducts,
    hasMore: true,
    moreLabel: 'MORE',
  },
};

export const WithActiveFilter = {
  args: {
    heroImage: heroImages.default,
    heroTitle: 'WINTER COLLECTION',
    heroOverlayOpacity: 0.3,
    categoryTitle: 'JACKET',
    categoryDescription: 'DISCOVER OUR PREMIUM JACKET COLLECTION.',
    categories: categories,
    activeCategory: 'jacket',
    sortOptions: sortOptions,
    selectedSort: 'price_asc',
    filterCount: 2,
    products: sampleProducts.slice(0, 8),
    hasMore: true,
    moreLabel: 'LOAD MORE',
  },
};

export const Minimal = {
  args: {
    heroImage: heroImages.default,
    heroTitle: 'NEW ARRIVALS',
    heroOverlayOpacity: 0.15,
    categoryTitle: 'NEW IN',
    categoryDescription: 'FRESH FROM THE STUDIO.',
    categories: [],
    products: sampleProducts.slice(0, 4),
    hasMore: false,
  },
};
