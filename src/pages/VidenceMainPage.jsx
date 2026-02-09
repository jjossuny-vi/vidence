import { useEffect } from 'react';
import Lenis from 'lenis';
import {
  VAppShell,
  VHeroSection,
  VVideoSection,
  VStoreSection,
  VCollectionSection,
} from '../components/vidence';

// 카테고리 이미지
import categoryImage1 from '../assets/product/main_category_001.png';
import categoryImage2 from '../assets/product/main_category_002.png';
import categoryImage3 from '../assets/product/main_category_003.png';
import categoryImage4 from '../assets/product/main_category_004.png';

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
}) {
  // Default data for demonstration
  const defaultHeroData = {
    video: '/src/assets/video/hero-main.mp4',
    headline: ['WEEKEND EDITION'],
    scrollRange: { start: 0, end: 0.5 },
    ...heroData,
  };

  const defaultVideoData = {
    // firstImage와 secondImage는 컴포넌트 기본값 사용 (main_video_001.png, main_video_002.png)
    ...videoData,
  };

  const defaultStoreData = {
    // image는 컴포넌트 기본값 사용 (main_store.png)
    ...storeData,
  };

  const defaultCategories = categories.length > 0 ? categories : [
    { image: categoryImage1, label: 'CLOTHING' },
    { image: categoryImage2, label: 'SHOES' },
    { image: categoryImage3, label: 'ACCESSORY' },
    { image: categoryImage4, label: 'BAG COLLECTION' },
  ];



  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
    </VAppShell>
  );
}

export default VidenceMainPage;
