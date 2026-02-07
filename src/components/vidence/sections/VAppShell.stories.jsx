import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VAppShell from './VAppShell';

export default {
  title: 'Section/VIDENCE/VAppShell',
  component: VAppShell,
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
    gnbMenuItems: {
      control: 'object',
      description: 'GNB 좌측 메뉴 아이템 배열',
    },
    gnbUserMenuItems: {
      control: 'object',
      description: 'GNB 우측 사용자 메뉴 아이템 배열',
    },
    activeMenuIndex: {
      control: { type: 'number', min: -1, max: 4 },
      description: '활성 메뉴 인덱스',
    },
    scrollThreshold: {
      control: { type: 'number', min: 0, max: 500 },
      description: '스크롤 임계값 (px) - 이 값을 넘으면 GNB 배경이 투명해짐',
    },
    hasFooter: {
      control: 'boolean',
      description: '푸터 표시 여부',
    },
    onMenuClick: { action: 'menuClicked' },
    onLogoClick: { action: 'logoClicked' },
    onSearchClick: { action: 'searchClicked' },
    onUserClick: { action: 'userClicked' },
    onCartClick: { action: 'cartClicked' },
  },
};

const SampleContent = () => (
  <Box sx={{ p: 4 }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Box
        key={i}
        sx={{
          height: 300,
          mb: 3,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="h4" color="text.secondary">
          Content Section {i}
        </Typography>
      </Box>
    ))}
  </Box>
);

export const Default = {
  args: {
    gnbMenuItems: ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
    gnbUserMenuItems: ['COLLECTIONS', 'ORR STORY'],
    activeMenuIndex: 1,
    scrollThreshold: 50,
    hasFooter: true,
  },
  render: (args) => (
    <VAppShell {...args}>
      <SampleContent />
    </VAppShell>
  ),
};

export const WithoutFooter = {
  args: {
    gnbMenuItems: ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
    gnbUserMenuItems: ['COLLECTIONS', 'ORR STORY'],
    activeMenuIndex: 0,
    hasFooter: false,
  },
  render: (args) => (
    <VAppShell {...args}>
      <SampleContent />
    </VAppShell>
  ),
};

export const WithHeroContent = {
  args: {
    gnbMenuItems: ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
    gnbUserMenuItems: ['COLLECTIONS', 'ORR STORY'],
    activeMenuIndex: -1,
    scrollThreshold: 100,
    hasFooter: true,
  },
  render: (args) => (
    <VAppShell {...args}>
      {/* Hero-like section */}
      <Box
        sx={{
          height: 600,
          backgroundColor: '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" sx={{ color: 'white', letterSpacing: 8 }}>
          HERO SECTION
        </Typography>
      </Box>

      {/* Content sections */}
      <SampleContent />
    </VAppShell>
  ),
};
