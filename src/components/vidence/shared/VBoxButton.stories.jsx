import VBoxButton from './VBoxButton';
import Stack from '@mui/material/Stack';

export default {
  title: 'Custom Component/VIDENCE/Shared/VBoxButton',
  component: VBoxButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '버튼에 표시할 텍스트',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: '버튼 스타일 (outlined: 테두리만, filled: 채워진 배경)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 여부',
    },
    isDisabled: {
      control: 'boolean',
      description: '비활성화 여부',
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
    label: 'ADD TO CART',
    variant: 'outlined',
    size: 'medium',
    fullWidth: false,
    isDisabled: false,
  },
};

export const Variants = {
  render: () => (
    <Stack spacing={3} alignItems="center">
      <VBoxButton label="OUTLINED" variant="outlined" />
      <VBoxButton label="FILLED" variant="filled" />
    </Stack>
  ),
};

export const Sizes = {
  render: () => (
    <Stack spacing={3} alignItems="center">
      <VBoxButton label="SMALL" size="small" />
      <VBoxButton label="MEDIUM" size="medium" />
      <VBoxButton label="LARGE" size="large" />
    </Stack>
  ),
};

export const States = {
  render: () => (
    <Stack spacing={3} alignItems="center">
      <VBoxButton label="DEFAULT" />
      <VBoxButton label="DISABLED" isDisabled />
    </Stack>
  ),
};
