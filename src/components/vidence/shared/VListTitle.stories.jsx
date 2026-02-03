import VListTitle from './VListTitle';

export default {
  title: 'Custom Component/VIDENCE/Shared/VListTitle',
  component: VListTitle,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '카테고리 제목',
    },
    description: {
      control: 'text',
      description: '설명 텍스트 (줄바꿈: \\n)',
    },
    align: {
      control: 'select',
      options: ['left', 'center'],
      description: '정렬',
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
    align: 'left',
  },
};

export const TitleOnly = {
  args: {
    title: 'NEW ARRIVALS',
    align: 'left',
  },
};

export const CenterAligned = {
  args: {
    title: 'FEATURED',
    description: 'DISCOVER OUR CURATED SELECTION OF SEASONAL FAVORITES.',
    align: 'center',
  },
};
