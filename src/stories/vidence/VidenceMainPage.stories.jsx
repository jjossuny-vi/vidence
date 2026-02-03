import VidenceMainPage from '../../pages/VidenceMainPage';

export default {
  title: 'Page/VIDENCE Main Page',
  component: VidenceMainPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  argTypes: {
    heroData: {
      control: 'object',
      description: '히어로 섹션 데이터',
    },
    videoData: {
      control: 'object',
      description: '비디오 섹션 데이터',
    },
    storeData: {
      control: 'object',
      description: '스토어 섹션 데이터',
    },
    categories: {
      control: 'object',
      description: '컬렉션 카테고리 배열',
    },
    products: {
      control: 'object',
      description: 'MD 추천 상품 배열',
    },
  },
};

export const Default = {
  args: {},
};
