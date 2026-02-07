import {
  VAppShell,
  VHeroSection,
  VVideoSection,
  VStoreSection,
  VCollectionSection,
  VMDSection,
} from '../components/vidence';

/**
 * VidenceMainPage 컴포넌트
 * VIDENCE 메인 페이지 - 모든 섹션을 포함한 전체 페이지
 *
 * Props:
 * @param {object} heroData - 히어로 섹션 데이터 [Optional]
 * @param {object} videoData - 비디오 섹션 데이터 [Optional]
 * @param {object} storeData - 스토어 섹션 데이터 [Optional]
 * @param {Array} categories - 컬렉션 카테고리 배열 [Optional]
 * @param {Array} episodes - 에피소드 배열 [Optional]
 * @param {Array} products - MD 추천 상품 배열 [Optional]
 * @param {Array} snsFeeds - SNS 피드 배열 [Optional]
 *
 * Example usage:
 * <VidenceMainPage />
 */
function VidenceMainPage({
  heroData = {},
  videoData = {},
  storeData = {},
  categories = [],
  products = [],
}) {
  // Default data for demonstration
  const defaultHeroData = {
    video: '/src/assets/video/hero-main.mp4',
    headline: ['WEEKEND', 'EDITION'],
    scrollRange: { start: 0, end: 0.5 },
    ...heroData,
  };

  const defaultVideoData = {
    videoThumbnail: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
    staticImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
    ...videoData,
  };

  const defaultStoreData = {
    image: '/store-visual.png',
    ...storeData,
  };

  const defaultCategories = categories.length > 0 ? categories : [
    { image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop', label: 'CLOTHING' },
    { image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=600&fit=crop', label: 'SHOES' },
    { image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop', label: 'ACCESSORY' },
    { image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=600&fit=crop', label: 'BAG COLLECTION' },
  ];



  const defaultProducts = products.length > 0 ? products : [
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
  ];



  return (
    <VAppShell>
      {/* Hero Section */}
      <VHeroSection {...defaultHeroData} />

      {/* Video Section */}
      <VVideoSection {...defaultVideoData} />

      {/* Store Section */}
      <VStoreSection {...defaultStoreData} />

      {/* Collection Section */}
      <VCollectionSection categories={defaultCategories} />

      {/* MD Section */}
      <VMDSection products={defaultProducts} />
    </VAppShell>
  );
}

export default VidenceMainPage;
