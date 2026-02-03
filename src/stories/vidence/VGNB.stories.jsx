import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VGNB from '../../components/vidence/sections/VGNB';

export default {
  title: 'Section/VIDENCE/VGNB',
  component: VGNB,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
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
    scrollThreshold: {
      control: { type: 'number', min: 0, max: 500 },
      description: '스크롤 임계값 (px) - 이 값을 넘으면 배경이 투명해짐',
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
    scrollThreshold: 50,
  },
};

export const DifferentActiveMenu = {
  args: {
    menuItems: ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
    userMenuItems: ['COLLECTIONS', 'ORR STORY'],
    activeMenuIndex: 3,
  },
};

export const WithStickyScroll = {
  args: {
    menuItems: ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
    userMenuItems: ['COLLECTIONS', 'ORR STORY'],
    activeMenuIndex: 1,
    scrollThreshold: 50,
  },
  render: (args) => (
    <Box sx={{ minHeight: '200vh', backgroundColor: '#f5f5f5' }}>
      <VGNB {...args} />
      <Box
        sx={{
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e0e0e0',
        }}
      >
        <Typography variant="h4" color="text.secondary">
          스크롤하면 GNB가 상단에 고정되고 배경이 투명해집니다
        </Typography>
      </Box>
      <Box sx={{ p: 4 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Box
            key={i}
            sx={{
              height: 200,
              mb: 2,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" color="text.secondary">
              Content Block {i}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
};
