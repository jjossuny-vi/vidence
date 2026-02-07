/**
 * ProductShowcasePage 샘플 데이터
 * Storybook 및 개발용 목업 데이터
 */

// 로컬 상품 이미지/비디오
import product001Image from '../assets/product/product_001.png';
import product001Video from '../assets/product/product_001_hover.mp4';

// 히어로 이미지
export const heroImages = {
  default: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&h=900&fit=crop',
  winter: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&h=900&fit=crop',
  summer: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1600&h=900&fit=crop',
};

// 상품 이미지
export const productImages = {
  default: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
  knit: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
  blazer: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop',
  jacket: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
  dress: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
};

// 배너 이미지
export const bannerImages = {
  default: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop',
  gift: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
};

// 카테고리 목록
export const categories = [
  { label: 'ALL', value: 'all' },
  { label: 'JACKET', value: 'jacket' },
  { label: 'JUMPER', value: 'jumper' },
  { label: 'COAT', value: 'coat' },
  { label: 'DOWN', value: 'down' },
];

// 정렬 옵션
export const sortOptions = [
  { label: 'NEW ITEM', value: 'new' },
  { label: 'PRICE LOW', value: 'price_asc' },
  { label: 'PRICE HIGH', value: 'price_desc' },
  { label: 'BEST SELLER', value: 'best' },
];

// 샘플 상품 목록
export const sampleProducts = [
  {
    id: 1,
    image: product001Image,
    video: product001Video,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
  },
  {
    id: 2,
    image: product001Image,
    video: product001Video,
    title: 'Wool Blend Cardigan Navy',
    price: 298,
  },
  {
    id: 3,
    image: product001Image,
    video: product001Video,
    title: 'Premium Mohair Sweater Beige',
    price: 298,
  },
  {
    id: 4,
    image: product001Image,
    video: product001Video,
    title: 'Merino Wool Turtleneck Black',
    price: 298,
  },
  {
    id: 5,
    image: product001Image,
    video: product001Video,
    title: 'Alpaca Blend Pullover Ivory',
    price: 298,
  },
  {
    id: 6,
    image: product001Image,
    video: product001Video,
    title: 'Cotton Knit Vest Charcoal',
    price: 298,
  },
  {
    id: 7,
    image: product001Image,
    video: product001Video,
    title: 'Cashmere Blend Hoodie Cream',
    price: 298,
  },
  {
    id: 8,
    type: 'banner',
    image: bannerImages.default,
    category: 'GIFT COLLECTION',
    size: 'small',
  },
  {
    id: 9,
    image: product001Image,
    video: product001Video,
    title: 'Ribbed Knit Top White',
    price: 198,
  },
  {
    id: 10,
    image: product001Image,
    video: product001Video,
    title: 'Oversized Knit Dress Gray',
    price: 398,
  },
  {
    id: 11,
    type: 'banner',
    image: bannerImages.default,
    category: 'GIFT COLLECTION',
    size: 'large',
    title: 'CUBIC CYLINDER\nKEYRING',
    ctaLabel: 'Discover',
  },
];

// 기본 내보내기
export default {
  heroImages,
  productImages,
  bannerImages,
  categories,
  sortOptions,
  sampleProducts,
};
