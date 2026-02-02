import VGNB from '../../components/vidence/sections/VGNB';

export default {
  title: 'Custom Component/VIDENCE/VGNB',
  component: VGNB,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    menuItems: {
      control: 'object',
      description: '좌측 메뉴 아이템 배열',
    },
    userMenuItems: {
      control: 'object',
      description: '우측 사용자 메뉴 아이템 배열',
    },
    activeMenuIndex: {
      control: { type: 'number', min: 0, max: 4 },
      description: '활성 메뉴 인덱스',
    },
    onMenuClick: {
      action: 'menuClicked',
      description: '메뉴 클릭 핸들러',
    },
    onLogoClick: {
      action: 'logoClicked',
      description: '로고 클릭 핸들러',
    },
    onSearchClick: {
      action: 'searchClicked',
      description: '검색 아이콘 클릭',
    },
    onUserClick: {
      action: 'userClicked',
      description: '사용자 아이콘 클릭',
    },
    onCartClick: {
      action: 'cartClicked',
      description: '장바구니 아이콘 클릭',
    },
  },
};

export const Default = {
  args: {
    menuItems: ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
    userMenuItems: ['COLLECTIONS', 'ORR STORY'],
    activeMenuIndex: 1,
  },
};

export const DifferentActiveMenu = {
  args: {
    menuItems: ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
    userMenuItems: ['COLLECTIONS', 'ORR STORY'],
    activeMenuIndex: 3,
  },
};
