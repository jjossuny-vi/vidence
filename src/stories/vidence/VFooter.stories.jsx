import VFooter from '../../components/vidence/sections/VFooter';

export default {
  title: 'Section/VIDENCE/VFooter',
  component: VFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    supportLinks: {
      control: 'object',
      description: '지원 링크 배열',
    },
    policyLinks: {
      control: 'object',
      description: '정책 링크 배열',
    },
    aboutLinks: {
      control: 'object',
      description: '회사 소개 링크 배열',
    },
    csCenter: {
      control: 'object',
      description: 'CS 센터 정보',
    },
    copyright: {
      control: 'text',
      description: '저작권 텍스트',
    },
    country: {
      control: 'text',
      description: '국가',
    },
    onLinkClick: {
      action: 'linkClicked',
      description: '링크 클릭 핸들러',
    },
    onCountryClick: {
      action: 'countryClicked',
      description: '국가 선택 클릭',
    },
  },
};

export const Default = {
  args: {
    copyright: '© 2026 ORR. All Rights Reserved.',
    country: 'UNITED STATES',
  },
};
