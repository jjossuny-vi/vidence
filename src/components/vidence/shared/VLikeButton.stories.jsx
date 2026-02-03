import VLikeButton from './VLikeButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default {
  title: 'Custom Component/VIDENCE/Shared/VLikeButton',
  component: VLikeButton,
  tags: ['autodocs'],
  argTypes: {
    isLiked: {
      control: 'boolean',
      description: '좋아요 상태 여부',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    isLiked: false,
    size: 'medium',
  },
};

export const States = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box sx={{ textAlign: 'center' }}>
        <VLikeButton isLiked={false} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Default
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <VLikeButton isLiked={true} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Liked
        </Typography>
      </Box>
    </Stack>
  ),
};

export const Sizes = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box sx={{ textAlign: 'center' }}>
        <VLikeButton size="small" />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Small
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <VLikeButton size="medium" />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Medium
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <VLikeButton size="large" />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Large
        </Typography>
      </Box>
    </Stack>
  ),
};
